import logo from "../assets/logoG.png"
import Typewriter from "typewriter-effect";
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="w-[300px]" src={logo} alt="website logo" />
            <h2 className="text-gray-400">Navigating Careers, Empowering Dreams</h2>

            <h1 className="text-2xl font-bold text-lime-500 text-center" >
            <Typewriter
                options={{
                strings: ['Navigate Your Career', 'Plan Your Success', 'Achieve Your Dreams'],
                autoStart: true,
                loop: true,
                }}
            />
            </h1>
        </div>
    );
};

export default Header;