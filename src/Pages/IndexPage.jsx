/* eslint-disable react-hooks/exhaustive-deps */
import "animate.css";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex justify-center">
      <div style={{ marginTop: "5%" }}>
        <p className="lg:text-4xl">
          Hi! I&apos;m <span className="lg:text-5xl font-semibold">John Jovi Sidabutar</span>
        </p>
        <p className="lg:text-2xl mt-5">Web development enthusiast and student with </p>
        <p className="lg:text-2xl">great passion in backend development</p>

        <div className="flex mt-20 justify-center">
          <Link to="/message">
            <button className="border-2 p-3 border-black text-black hover:bg-black hover:text-white hover:border-black">
              Let&apos;s Connect{" "}
              <button className="border-2 border-zinc-600 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>{" "}
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-20">
          <p className="text-sm mt-5 italic">&quot;I love programming and I do it for fun&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
