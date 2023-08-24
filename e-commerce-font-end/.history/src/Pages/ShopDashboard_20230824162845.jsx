import React from "react";
import DashboardHeader from "../../components/Dashboar/DashboardHeader";
import DashboardSideBar from "../../components/Dashboar/DashboardSideBar";


const ShopDashboardPage = () => {
  return (
        <div>
          <DashboardHeader />
          <div className="flex items-start justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={1} />
            </div>
            
          </div>
        </div>
  );
};

export default ShopDashboardPage;