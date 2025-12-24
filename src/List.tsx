import { useInfiniteQuery } from "@tanstack/react-query";
import { createInfiniteUsersQuery } from "./infinite_User_Query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useRef } from "react";
import { Card } from "./components/Card";

export const List = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery(createInfiniteUsersQuery());

  const scrollRef = useRef<HTMLDivElement>(null);

  const users = data?.pages.flatMap((page) => page.users) ?? [];

  const virtualizer = useVirtualizer({
    count: users?.length ?? 0,
    estimateSize: () => 100,
    getScrollElement: () => scrollRef.current,
    scrollMargin: 0,
    initialOffset: 0,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1];

    if (
      !hasNextPage ||
      isFetchingNextPage ||
      !lastItem ||
      lastItem.index < users.length - 6
    )
      return;
    fetchNextPage();
  }, [
    virtualItems,
    hasNextPage,
    isFetchingNextPage,
    users.length,
    fetchNextPage,
  ]);

  return (
    <>
      <h1 className="text-center text-2xl sm:text-5xl font-bold mb-10 text-[#43334C]">
        Users List
      </h1>
      {status === "pending" ? (
        <h1 className="text-center sm:text-2xl font-bold">Loading...</h1>
      ) : status === "error" ? (
        <p className="text-center sm:text-2xl text-red-500">
          Error:{error.message}!
        </p>
      ) : (
        <div className="flex flex-col">
          <div
            ref={scrollRef}
            className="h-[70dvh] w-full sm:w-[60dvw] mx-auto scrollbar-custom  overflow-auto "
          >
            <div
              className="relative w-full"
              style={{ height: `${virtualizer.getTotalSize()}px` }}
            >
              {virtualItems.map(({ index, key, size, start }) => {
                const user = users?.[index];
                if (!user) return null;
                return (
                  <div
                    key={key}
                    data-start={start}
                    className="absolute top-0 left-0 w-full"
                    style={{
                      height: `${size}px`,
                      transform: `translateY(${start}px)`,
                    }}
                    data-index={index}
                  >
                    <Card key={user?._id} user={user} />
                  </div>
                );
              })}
            </div>

            {isFetchingNextPage && (
              <div className="flex justify-center items-center">
                <h1 className="text-center sm:text-2xl font-bold">
                  Loading More data...
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
