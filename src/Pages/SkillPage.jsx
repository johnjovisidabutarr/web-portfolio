import { Link } from "react-router-dom";
import { skills } from "../assets/skills";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "animate.css";

const SkillPage = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-2 my-10">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center py-3">
            <LazyLoadImage src={`/images/${skill[0].img}`} alt={skill[0].title} width={skill[0].width} effect="blur" className="transform hover:scale-110" />
          </div>
        ))}
      </div>
      <div>
        <Link to="https://www.hackerrank.com/certificates/8c23640ad523" target="_blank">
          <button className="border-2 border-black p-2">My Certificates</button>
        </Link>
      </div>
    </div>
  );
};

export default SkillPage;
