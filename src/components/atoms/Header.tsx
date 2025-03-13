import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [token, setToken] = useState<string>("");
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className="max-padd-container w-full z-50">
      <div className="flexBetween py-3">
        {/* Logo Left Side */}
        <Link to="/" className="flex flex-1">
          <div className="bold-32">
            Outfir<span className="text-secondary">o</span>
          </div>
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar
            toggleMenu={toggleMenu}
            containerStyles={`${menuOpened
              ? "flex flex-items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rouded-xl shadow-md w-52 ring-1 ring-slate-90/5 z-50"
              : "hidden xl:flex xl:flex-center items-center gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full"}`}
          />
        </div>

        {/* Button Right Side */}
        <div className="flex-1 flex items-center justify-end gap-x-2 xs:gap-x-8">
          {/* menu toggle */}
          <FaBarsStaggered onClick={toggleMenu} className="xl:hidden cursor-pointer text-xl" />

          {/* Search Icon */}
          <FaSearch className="text-lg cursor-pointer" />

          {/* Cart - See After the complete Implementation */}
          <Link to="" className="flex relative">
            <TbBasket className="text-[27px]" />
            <span className="bg-secondary text-white text-[12px] font-semibold left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
              0
            </span>
          </Link>

          {/* User Icon */}
          <div className="group relative">
            <div>
              {token ? (
                <div>
                  <TbUserCircle className="text-[29px] cursor-pointer" />
                </div>
              ) : (
                <button
                  type="button"
                  className=" btn-light flexCenter gap-x-2"
                >
                  Login
                  <RiUserLine />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
