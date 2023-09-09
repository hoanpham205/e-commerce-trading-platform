import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {
  AiOutlineFolderAdd,
  AiOutlineGift,
  AiOutlineDashboard,
} from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <Navbar
    className="bg-white shadow-sm flex-column"
    style={{ height: "90vh", position: "sticky", top: 0, left: 0, zIndex: 10 }}
    >

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard"
          className={`${active === 1 ? "text-danger" : "text-dark"}`}
        >
          <AiOutlineDashboard size={30} />
          <span className="ml-2 d-none d-md-inline">Dashboard</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-orders"
          className={`${active === 2 ? "text-danger" : "text-dark"}`}
        >
          <FiShoppingBag size={30} />
          <span className="ml-2 d-none d-md-inline">All Orders</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-products"
          className={`${active === 3 ? "text-danger" : "text-dark"}`}
        >
          <FiPackage size={30} />
          <span className="ml-2 d-none d-md-inline">All Products</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-create-product"
          className={`${active === 4 ? "text-danger" : "text-dark"}`}
        >
          <AiOutlineFolderAdd size={30} />
          <span className="ml-2 d-none d-md-inline">Create Product</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-events"
          className={`${active === 5 ? "text-danger" : "text-dark"}`}
        >
          <MdOutlineLocalOffer size={30} />
          <span className="ml-2 d-none d-md-inline">All Events</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-create-event"
          className={`${active === 6 ? "text-danger" : "text-dark"}`}
        >
          <VscNewFile size={30} />
          <span className="ml-2 d-none d-md-inline">Create Event</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-withdraw-money"
          className={`${active === 7 ? "text-danger" : "text-dark"}`}
        >
          <CiMoneyBill size={30} />
          <span className="ml-2 d-none d-md-inline">Withdraw Money</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-messages"
          className={`${active === 8 ? "text-danger" : "text-dark"}`}
        >
          <BiMessageSquareDetail size={30} />
          <span className="ml-2 d-none d-md-inline">Shop Inbox</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-coupouns"
          className={`${active === 9 ? "text-danger" : "text-dark"}`}
        >
          <AiOutlineGift size={30} />
          <span className="ml-2 d-none d-md-inline">Discount Codes</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/dashboard-refunds"
          className={`${active === 10 ? "text-danger" : "text-dark"}`}
        >
          <HiOutlineReceiptRefund size={30} />
          <span className="ml-2 d-none d-md-inline">Refunds</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="p-4">
        <Nav.Link
          as={Link}
          to="/settings"
          className={`${active === 11 ? "text-danger" : "text-dark"}`}
        >
          <CiSettings size={30} />
          <span className="ml-2 d-none d-md-inline">Settings</span>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default DashboardSideBar;
