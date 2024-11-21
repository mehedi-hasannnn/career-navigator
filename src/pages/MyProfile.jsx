import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await updateProfile(user, { displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL }); 
      setSuccess("Profile updated successfully!");
    } 
    catch (err) {
      setError("Failed to update profile. Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>CareerNavigator | Profile</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-md shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

        <div className="text-center mb-6">
          <img
            src={photoURL || "https://i.ibb.co.com/4NDZCbV/no-photo.jpg"}
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
          />
          <h3 className="text-lg mt-2">{user?.email}</h3>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered"
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              className={`btn ${loading ? "btn-disabled" : "bg-lime-400"}`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>

        {success && (
          <p className="mt-4 text-green-600 text-center font-medium">{success}</p>
        )}
        {error && (
          <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
        )}
        <Link to={`/`} className="mt-6 btn bg-lime-400">Back To Home</Link>
      </div>
      
    </div>
  );
};

export default MyProfile;
