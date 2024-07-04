import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GridItemSkeleton = () => {
  return (
    <Skeleton borderRadius={20} overflow="hidden">
      <SkeletonText />
    </Skeleton>
  );
};

export default GridItemSkeleton;
