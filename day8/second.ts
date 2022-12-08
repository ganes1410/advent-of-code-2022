import { treeMaps } from "./utils.ts";

const sceneicScores: number[] = [];

enum Direction {
  Left,
  Right,
  Top,
  Bottom,
}

function getEligibleTrees(
  treeList: number[],
  treeIndex: number,
  direction: Direction
) {
  const list = [];
  const currentValue = treeList[treeIndex];
  let initialIndex = treeIndex;

  if (direction === Direction.Left || direction === Direction.Top) {
    while (initialIndex) {
      const value = treeList[initialIndex - 1];
      if (value === currentValue) {
        list.push(value);
        break;
      } else if (currentValue > value) {
        list.push(value);
      }

      initialIndex -= 1;
    }
  } else {
    while (initialIndex <= treeList.length) {
      const value = treeList[initialIndex + 1];
      if (value === currentValue) {
        list.push(value);
        break;
      } else if (currentValue > value) {
        list.push(value);
      }

      initialIndex += 1;
    }
  }

  return list;
}

for (let index = 0; index < treeMaps.length; index++) {
  const treeList = treeMaps[index].map(Number);

  for (let treeIndex = 0; treeIndex < treeList.length; treeIndex++) {
    if (
      index === 0 ||
      treeIndex === 0 ||
      index === treeList.length - 1 ||
      treeIndex === treeList.length - 1
    ) {
      continue;
    }

    const leftTrees = getEligibleTrees(treeList, treeIndex, Direction.Left);
    const rightTrees = getEligibleTrees(treeList, treeIndex, Direction.Right);
    const topAndBottomTrees = treeMaps.map((list) => list[treeIndex]);
    const topTrees = getEligibleTrees(topAndBottomTrees, index, Direction.Top);
    const bottomTrees = getEligibleTrees(
      topAndBottomTrees,
      index,
      Direction.Bottom
    );

    const scenicScore =
      leftTrees.length *
      rightTrees.length *
      topTrees.length *
      bottomTrees.length;

    sceneicScores.push(scenicScore);
  }
}

console.log({ maxScenicScore: Math.max(...sceneicScores) }); //172224
