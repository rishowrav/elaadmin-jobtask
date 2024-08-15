import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast("logout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="navbar mx-auto container ">
        <div className="flex-1">
          <img className="w-32" src="logo.webp" alt="" />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li
                onClick={handleLogout}
                className="bg-red-500 text-white rounded-lg active:bg-red-300"
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
