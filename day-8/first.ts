import { treeMaps } from "./utils.ts";

let visibleTrees = 0;

for (let index = 0; index < treeMaps.length; index++) {
  const treeList = treeMaps[index].map(Number);

  for (let treeIndex = 0; treeIndex < treeList.length; treeIndex++) {
    const individualTree = treeList[treeIndex];

    // Check if its current tree is in edge
    if (
      index === 0 ||
      treeIndex === 0 ||
      index === treeList.length - 1 ||
      treeIndex === treeList.length - 1
    ) {
      visibleTrees += 1;
      continue;
    }

    const leftTrees = treeList.slice(0, treeIndex);
    const rightTrees = treeList.slice(treeIndex + 1);
    const topAndBottomTrees: number[] = treeMaps.map((list) => list[treeIndex]);
    const topTrees = topAndBottomTrees.slice(0, index);
    const bottomTrees = topAndBottomTrees.slice(index + 1);

    const isVisibleFromLeftSide = leftTrees.every(
      (tree) => individualTree > tree
    );
    const isVisibleFromRightSide = rightTrees.every(
      (tree) => individualTree > tree
    );
    const isVisibleFromTop = topTrees.every((tree) => individualTree > tree);
    const isVisibleFromBottom = bottomTrees.every(
      (tree) => individualTree > tree
    );

    if (
      isVisibleFromLeftSide ||
      isVisibleFromRightSide ||
      isVisibleFromTop ||
      isVisibleFromBottom
    ) {
      visibleTrees += 1;
    }
  }
}

console.log({ visibleTrees }); // 1779
