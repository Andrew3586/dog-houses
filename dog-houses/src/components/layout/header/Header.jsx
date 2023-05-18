import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-evenly mt-8 font-bold">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Link to="/adddoghouse">Add A New Dog House Listing</Link>
      </div>
      <div>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Header;
