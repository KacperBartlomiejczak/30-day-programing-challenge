import { useState, useRef } from "react";

import TasksList from "./components/TasksList";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";
function App() {
  //States
  const [selectedProject, setSelectedProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  //Refs

  //Functions
  function handleCreateProjcet() {
    setSelectedProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject(e) {
    e.preventDefault();
    setSelectedProject((prevState) => {
      return {
        projects: [...prevState.projects],
        selectedProjectId: undefined,
      };
    });

    console.log(selectedProject);
  }

  function handleSaveProject(projectData) {
    setSelectedProject((prevState) => {
      const projectId = Math.random();
      const newProject = {
        id: projectId,
        ...projectData,
      };

      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(selectedProject);
  return (
    <main className="h-screen my-8 flex gap-8">
      <TasksList onCreate={handleCreateProjcet} tasksList={selectedProject} />
      {selectedProject.selectedProjectId === undefined ? (
        <NoProjectSelected onCreate={handleCreateProjcet} />
      ) : (
        <CreateProject
          onCancel={handleCancelProject}
          onSave={handleSaveProject}
        />
      )}
    </main>
  );
}

export default App;
