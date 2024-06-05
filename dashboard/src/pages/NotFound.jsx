import React from "react";
import NotFoundImg from "../data/NotFoundMan.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-full h-auto text-center">
      <img
        src={NotFoundImg}
        alt="Not_Found_Image"
        className="w-[600px] h-auto ml-auto mr-auto"
      />

      <Link
        to="/"
        className="py-4 px-6 bg-[#5B3BB2] text-white font-medium ml-auto mr-auto rounded-full"
      >
        Back To Home Page
      </Link>
    </div>
  );
};

export default NotFound;
