import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const ServiceDetails = () => {
    const service = useLoaderData();

    const [comments, setComments] = useState([]); 
    const [newComment, setNewComment] = useState(""); 

    
    const handleAddComment = () => {
        if (newComment.trim() === "") return; 
        setComments([...comments, newComment]); 
        setNewComment(""); 
    };
    
    return (
        <div className="font-poppins">
            <header className="mb-10">
                <Header></Header>
            </header>

    <main className="w-11/12 mx-auto gap-5 py-5">
                
     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            
                    <img
                        src={service.image}
                        alt={service.service_name}
                        className="w-full h-[400px] md:h-[600px] object-cover"
                    />
                  
                    <div className="p-5 space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-lime-500">{service.service_name}</h1>
                        <p className="text-base md:text-lg text-gray-700">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-500">
                            <p>
                                <span className="font-semibold">Category:</span> {service.category}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span> {service.pricing}
                            </p>
                            <p>
                                <span className="font-semibold">Duration:</span> {service.duration_with_date}
                            </p>
                            <p>
                                <span className="font-semibold">Counselor:</span> {service.counselor}
                            </p>
                            <p>
                                <span className="font-semibold">Rating:</span> {service.rating} ⭐
                            </p>
                            <p>
                                <span className="font-semibold">Target Audience:</span> {service.target_audience}
                            </p>
                        </div>

                        
                        <div>
                            <h2 className="text-lg md:text-xl font-bold mb-2">Features:</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                       
                        <div>
                            <h2 className="text-lg md:text-xl font-bold mb-2">Availability:</h2>
                            <p>
                                <span className="font-semibold">Days:</span> {service.availability.days.join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Time Slots:</span>{" "}
                                {service.availability.time_slots.join(", ")}
                            </p>
                        </div>

                        
                        <div>
                            <h2 className="text-lg md:text-xl font-bold mb-2">Contact Information:</h2>
                            <p>
                                <span className="font-semibold">Phone:</span> {service.contact.phone}
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span> {service.contact.email}
                            </p>
                        </div>

                        
                        <div>
                            <h2 className="text-lg md:text-xl font-bold mb-2">Additional Information:</h2>
                            <p>
                                <span className="font-semibold">Languages:</span> {service.languages.join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Tools Used:</span> {service.tools_used.join(", ")}
                            </p>
                            <p>
                                <span className="font-semibold">Discounts:</span> {service.discounts}
                            </p>
                            <p>
                                <span className="font-semibold">Cancellation Policy:</span> {service.cancellation_policy}
                            </p>
                        </div>
                    </div>
     </div>

     <div className="mt-10 bg-gray-50 p-5 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-lime-500">Comments / Feedback</h2>

                    
                    <div className="flex items-center gap-3 mb-5">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write your comment here..."
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        <button
                            onClick={handleAddComment}
                            className="bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition"
                        >
                            Comment
                        </button>
                    </div>

                    
                    {comments.length > 0 ? (
                        <ul className="space-y-3">
                            {comments.map((comment, index) => (
                                <li
                                    key={index}
                                    className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                                >
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    )}
     </div>


        <Link to={`/`} className="mt-6 btn bg-lime-400">Back To Services</Link>

    </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ServiceDetails;