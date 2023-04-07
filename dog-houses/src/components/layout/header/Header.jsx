import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Name</h1>
        {/* logo */}
      </div>
      <div>
        <Link to="/adddoghouse">Add new dog house listing</Link>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
