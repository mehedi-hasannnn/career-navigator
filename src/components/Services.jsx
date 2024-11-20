import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      // Fetching the service data from the public folder
      fetch("/serviceData.json")
        .then((response) => response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error("Error fetching services:", error));
    }, []);
  
    return (
      <div className="w-11/12 mx-auto py-5">
        <h2 className="text-3xl text-lime-500 font-bold text-center mb-8">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.service_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{service.service_name}</h3>
                <p className="text-sm text-gray-500">{service.category}</p>
                
                <div className="mt-4">
                  <p className="text-lg font-bold">{service.pricing}</p>
                  <p className="text-sm text-gray-400">{service.duration_with_date}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm">Counselor: {service.counselor}</p>
                  <p className="text-sm">Rating: {service.rating}⭐</p>
                </div>
                <button className="btn mt-3 bg-lime-400 w-full ">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;