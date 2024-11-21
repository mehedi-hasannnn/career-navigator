import { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
    const { userLogin, signInWithGoogle, sendPasswordReset, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                toast.success("Login Successful", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                navigate(location?.state ? location.state : "/");
                form.reset();
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('ERROR', error.message));
    };

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Please enter your email to reset password", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        sendPasswordReset(email)
            .then(() => {
                toast.success("Password reset email sent!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
            .catch((err) => {
                console.log(err.message);
                toast.error("Failed to send password reset email", {
                    position: "top-center",
                    autoClose: 3000,
                });
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Helmet>
                <title>CareerNavigator|Login</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        {error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )}

                        <label className="label">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="label-text-alt link link-hover text-lime-500"
                            >
                                Forgot password?
                            </button>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-lime-400">Login</button>
                    </div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="mt-5 btn bg-lime-400"
                    >
                        <FaGoogle /> Login With Google
                    </button>
                </form>
                <p className="text-center font-semibold">
                    Don't Have An Account ?{" "}
                    <Link className="text-lime-500" to="/auth/register">
                        Register
                    </Link>{" "}
                </p>
            </div>
        </div>
    );
};

export default Login;
