import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between mt-4 items-center">
            <div className="font-bold">Career Navigator {user && user.email}</div>
            <div className="nav space-x-1 md:space-x-5">
                <Link to="/">Home</Link>
                <Link to="/myprofile">My Profile</Link>
                <Link to="/resources">Resources</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email? ( <button onClick={logOut} className="btn  bg-lime-300 round">LogOut</button> ) : <Link to="/auth/login" className="btn bg-lime-300 round">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;