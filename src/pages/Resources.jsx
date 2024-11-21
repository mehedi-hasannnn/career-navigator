import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const Resources = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Helmet>
                <title>CareerNavigator|Resources</title>
            </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">Career Resources</h1>
          <p className="mt-2 text-gray-600">
            Welcome {user ? user.displayName : "Guest"}! Here are some valuable resources to help you on your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
         
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/6rJZZhc/career-guide.jpg"
              alt="Career Guides"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Career Guides</h3>
              <p className="text-gray-600 mt-2">
                Explore in-depth career guides and articles to help you navigate through your career choices.
              </p>
              <Link to="/resources/career-guides" className="text-lime-500 mt-4 inline-block">
                Explore Guides
              </Link>
            </div>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/jzP0hQk/resume.jpg"
              alt="Resume Templates"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Resume Templates</h3>
              <p className="text-gray-600 mt-2">
                Download customizable resume templates that can help you create a professional CV to stand out.
              </p>
              <Link to="/resources/resume-templates" className="text-lime-500 mt-4 inline-block">
                Browse Templates
              </Link>
            </div>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/JznjpY3/interview-tips.jpg"
              alt="Interview Tips"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Interview Tips</h3>
              <p className="text-gray-600 mt-2">
                Prepare for your job interviews with these practical tips and tricks from industry professionals.
              </p>
              <Link to="/resources/interview-tips" className="text-lime-500 mt-4 inline-block">
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/mz9s6xH/job-search-strategy.jpg"
              alt="Job Search Strategies"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Job Search Strategies</h3>
              <p className="text-gray-600 mt-2">
                Master the art of job searching with resources that teach you how to network, apply for jobs, and more.
              </p>
              <Link to="/resources/job-search" className="text-lime-500 mt-4 inline-block">
                View Strategies
              </Link>
            </div>
          </div>

          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/XFJLjrt/career-coaching.jpg"
              alt="Career Coaching"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Career Coaching</h3>
              <p className="text-gray-600 mt-2">
                Access personalized career coaching to help you develop a plan for success.
              </p>
              <Link to="/resources/career-coaching" className="text-lime-500 mt-4 inline-block">
                Get Coaching
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/Jc5fhPy/salary-negotiation.jpg"
              alt="Salary Negotiation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Salary Negotiation</h3>
              <p className="text-gray-600 mt-2">
                Learn how to negotiate your salary with confidence and get the pay you deserve.
              </p>
              <Link to="/resources/salary-negotiation" className="text-lime-500 mt-4 inline-block">
                Start Learning
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      <Link to={`/`} className="mt-6 ml-8 btn bg-lime-400">Back To Services</Link>
    </div>
    );
};

export default Resources;