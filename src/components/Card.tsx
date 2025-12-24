import { type User } from "../types";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export const Card = ({ user }: { user: User }) => {
  return (
    <div className="relative bg-red-200 rounded mx-10 p-4 px-6">
      <div className="flex items-center justify-between">
        <span className="sm:text-2xl font-bold">{user?.name}</span>
        <button className="hover:text-red-700 active:scale-[0.90] active:text-red-500 transition-all duration-50 ease-out">
          <CancelRoundedIcon />
        </button>
      </div>
      <p className="text-sm ">{user?.age}</p>
      <p className="text-sm ">{user?.email}</p>
    </div>
  );
};
