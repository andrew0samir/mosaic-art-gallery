import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <header className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-700 shadow-sm">
      <div className="flex items-center space-x-3">
        <h2 className="font-semibold text-lg text-white">Welcome Admin</h2>
        <div>
          <Link to="/admin">
            <button className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-xl cursor-pointer">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Link to="/admin/Edit">
            <button className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-xl cursor-pointer">
              Edit Projects
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-6 mx-2 rounded-xl cursor-pointer">
              Home &rarr;
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
