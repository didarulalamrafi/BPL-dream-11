import React from "react";
import dollerImg from "../../assets/dollar 1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="flex items-center justify-center gap-2 text-xl font-semibold">
          0 Coin <img src={dollerImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
