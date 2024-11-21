import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        
        if (!/[A-Z]/.test(password)) {
            setError({ password: "Password must contain at least one uppercase letter." });
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError({ password: "Password must contain at least one lowercase letter." });
            return;
        }
        if (password.length < 6) {
            setError({ password: "Password must be at least 6 characters long." });
            return;
        }
    
        setError({});
        

        console.log({name,email,photo,password});
        createNewUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name, photoURL:photo})

            toast.success("Registration successful!",{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(()=> navigate("/"),3000) ;
    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
          
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>

      <form onSubmit={handleSubmit} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>

        {
            error.password && (
                <label className="label text-red-600 text-xs">
            {error.password}
          </label>
            )
        }

        <div className="form-control mt-6">
          <button className="btn bg-lime-400">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">Already Have An Account ? <Link className="text-lime-500" to="/auth/login">Login</Link> </p>
    </div>
            
        </div>
    );
};

export default Register;