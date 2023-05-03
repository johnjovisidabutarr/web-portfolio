import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Layout";
import SkillPage from "./Pages/SkillPage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillPage />} />
      </Route>
    </Routes>
  );
}

export default App;
