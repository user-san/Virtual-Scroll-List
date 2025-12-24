import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex mb-9  text-black items-center justify-between px-4 py-2 bg-[#43334C] h-18 ">
      <div className="flex items-center">
        <span className="text-xl md:text-2xl lg:text-4xl ml-5 mr-10 text-[#E83C91]">
          V-Scroll |
        </span>
        <Link
          to="/"
          className="group flex items-center px-2 py-1 sm:text-2xl sm:px-10 text-[#F8F4EC] bg-pink-400/90 hover:bg-[#FF8FB7] hover:text-[#43334C]  active:bg-pink-500/80 rounded-l  border border-transparent transition-all duration-300 ease-out"
        >
          <span>Home</span>
          <HomeRoundedIcon className="text-pink-300 group-hover:text-[#43334C] " />
        </Link>
        <Link
          to="/list"
          className="group flex items-center px-2 p-1 sm:text-2xl sm:px-10 text-[#F8F4EC] bg-pink-400/60 hover:bg-[#FF8FB7] hover:text-[#43334C] active:bg-pink-400 rounded-r border border-transparent transition-all duration-300 ease-out"
        >
          <span>List</span>
          <DnsRoundedIcon className="text-pink-300 group-hover:text-[#43334C]" />
        </Link>
      </div>
    </div>
  );
};
