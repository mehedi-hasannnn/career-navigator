import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Logged out successfully!");
  };

  return (
    <div className="flex justify-between mt-4 items-center">
      <div className="font-bold">Career Navigator</div>
      <div className="nav space-x-1 md:space-x-5">
        <Link to="/">Home</Link>
        <Link to="/myprofile">My Profile</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="relative">
          {user && user?.email ? (
            <div className="group flex items-center gap-2">
              <img
                className="w-10 rounded-full"
                src={user?.photoURL}
                alt="User"
              />
              
              <div className="hidden group-hover:block absolute bottom-full mb-2 bg-white text-black text-xs p-1 w-32 rounded-md">
                {user.displayName} 
                <br />
                {user.email}
              </div>
            </div>
          ) : (
            <img src={userIcon} alt="User" />
          )}
        </div>

        {user && user?.email ? (
          <button onClick={handleLogOut} className="btn bg-lime-300 rounded">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-lime-300 rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
