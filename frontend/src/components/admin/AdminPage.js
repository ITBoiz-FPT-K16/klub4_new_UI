import React from "react";
import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import AdminReport from "./AdminReport";

const AdminPage = () => {
    return (
        <div className="relative">
            <div className="navbar ">
                <AdminHeader />
            </div>
            <div className="sideBar">
                <AdminSideBar />
            </div>
            <div className="report">
                <AdminReport />
            </div>
        </div>
    );
};

export default AdminPage;
