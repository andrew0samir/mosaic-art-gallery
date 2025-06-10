import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

function AdminLayout() {
  return (
    <>
      <div className="flex w-full min-h-screen bg-gray-800">
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <div className="flex-1 overflow-y-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;