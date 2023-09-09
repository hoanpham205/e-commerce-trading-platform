import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
      <div className="container">
        <Link to="/dashboard" className="navbar-brand">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/dashboard/cupouns" className="nav-link">
                <AiOutlineGift color="#555" size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard-events" className="nav-link">
                <MdOutlineLocalOffer color="#555" size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard-products" className="nav-link">
                <FiShoppingBag color="#555" size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard-orders" className="nav-link">
                <FiPackage color="#555" size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard-messages" className="nav-link">
                <BiMessageSquareDetail color="#555" size={30} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/shop/${seller._id}`} className="nav-link">
                <img
                  src={`${seller.avatar?.url}`}
                  alt=""
                  className="w-50 h-50 rounded-circle object-cover"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
