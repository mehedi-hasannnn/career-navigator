import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between mt-4 items-center">
            <div className="font-bold">Career Navigator</div>
            <div className="nav space-x-1 md:space-x-5">
                <Link to="/">Home</Link>
                <Link to="/myprofile">My Profile</Link>
                <Link to="/resources">Resources</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral round">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;