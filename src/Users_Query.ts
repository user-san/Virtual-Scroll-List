import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "./api";
export function createUsersQuery() {
  return queryOptions({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
}
