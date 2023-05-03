import { projects } from "../assets/projects";

const ProjectPage = () => {
  return (
    <div>
      <p>ProjectPage</p>

      {projects.map((project, i) => (
        <div key={i} className="border-2 border-black mb-4 p-4">
          <p>{project.title}</p>
          <div>
            <button>{project.description_1}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
