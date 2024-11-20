import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation } from "swiper/modules";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
const HomeSlider = () => {
    return (
        <div className="relative w-full h-[400px]">
          <Swiper
            spaceBetween={50} 
            slidesPerView={1} 
            loop={true} 
            autoplay={{ delay: 2500 }} 
            navigation={true} 
            pagination={{ clickable: true }}

            breakpoints={{
                640: {
                  slidesPerView: 1, 
                },
                768: {
                  slidesPerView: 1, 
                },
                1024: {
                  slidesPerView: 1, 
                },
              }} 

            modules={[Navigation]}
            className="swiper-container"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="h-full relative">
                <img 
                  src={slider1}
                  alt="Slide 1" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-lime-500 text-3xl font-bold">Explore Career Options</h2>
                </div>
              </div>
            </SwiperSlide>
    
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="h-full relative">
                <img 
                  src={slider2} 
                  alt="Slide 2" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-lime-500 text-3xl font-bold">Achieve Your Goals</h2>
                </div>
              </div>
            </SwiperSlide>
    
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="h-full relative">
                <img 
                  src={slider3}
                  alt="Slide 3" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-lime-500 text-3xl font-bold">Find Your Path</h2>
                </div>
              </div>
            </SwiperSlide>
    
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="h-full relative">
                <img 
                  src={slider4}
                  alt="Slide 4" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-lime-500 text-3xl font-bold">Unlock Your Potential</h2>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          
        </div>
      );
};

export default HomeSlider;