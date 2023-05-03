import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsChatSquareText } from "react-icons/bs";
const Header = () => {
  return (
    <header className="py-4 md:flex justify-around">
      <a href="/" className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>

        <span className="font-bold text-2xl">STAR</span>
      </a>

      <div className="flex lg:gap-14 border border-black rounded-full py-2 shadow-md shadow-gray-300 uppercase text-2xl">
        <div className="border-300"></div>
        <Link to="/" className="hover:underline hover:underline-offset-4 hover:scale-105">
          Home
        </Link>
        <div className="border-gray-300"></div>
        <Link to="/projects" className="hover:underline hover:underline-offset-4 hover:scale-105">
          Projects
        </Link>
        <div className="border-gray-300"></div>
        <Link to="/skills" className="hover:underline hover:underline-offset-4 hover:scale-105">
          Skills
        </Link>
        <div className="border-300"></div>
      </div>

      <div className="flex my-2 py-1 text-2xl">
        <Link to="https://www.linkedin.com/in/john-jovi-sidabutar-736051261/" target="_blank ">
          <BsLinkedin className="hover:text-blue-800 hover:scale-110" />
        </Link>
        <Link to="https://github.com/johnjovisidabutarr" target="_blank" className="px-4">
          <BsGithub className="text-gray-800 hover:scale-110 hover:text-inherit" />
        </Link>
        <Link to="/message">
          <BsChatSquareText className="hover:text-yellow-800 hover:scale-110" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
