import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSideBar from "../components/Dashboard/DashboardSideBar";


const ShopDashboardPage = () => {
    return (
        <div>
          <DashboardHeader />
    
          <div className="container-fluid">
            <div className="row">
              <nav className="col-md-2 col-lg-2 d-md-block bg-light sidebar">
                <DashboardSideBar active={1} />
              </nav>
    
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              </main>
            </div>
          </div>
        </div>
      );
};

export default ShopDashboardPage;