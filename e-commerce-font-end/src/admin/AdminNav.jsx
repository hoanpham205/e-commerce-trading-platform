import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { endpoints } from "../configs/Apis";
import "../styles/admin-nav.css";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "Chart",
    path: "/dashboard/chart",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
  {
    display: "Stores",
    path: "/dashboard/all-stores",
  },
];

const AdminNav = () => {
  const isLoggedIn = useSelector((state) => state.auth.login.isLoggedIn);
  const [currentUser, setCurrentUser] = useState(cookie.load("user") || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints["current-user"], {
          headers: {
            Authorization: cookie.load("token"),
          },
        });
        setCurrentUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };

    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);
  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>HT Store</h2>
              </div>

              <div className="search__box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i class="ri-notification-line"></i>
                </span>
                <span>
                  <i class="ri-settings-4-line"></i>
                </span>
                <img src={currentUser && currentUser.avatar} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
