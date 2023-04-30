import { createContext, ReactNode, useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";

interface childrenIFace {
  children: ReactNode;
}

interface screenshotsIFace {
  id: string;
  description: string;
  screenshotUrl: string;
}

interface projectDataIFace {
  name: string;
  displayImage: string;
  websiteUrl: string;
  frontendUrl: string;
  backendUrl: string;
  description: string;
  screenshots: screenshotsIFace[];
}

interface projectIface {
  projects: projectDataIFace[];
  addProjectLoading: boolean;
  addProjectSuccess: boolean;
  addProjectError: string;
  addProject: (projectData: projectDataIFace) => void;
  resetProjectContext: () => void;
}

export const ProjectContext = createContext({} as projectIface);

const ProjectProvider = ({ children }: childrenIFace) => {
  const [projects, setProjects] = useState<projectDataIFace[]>([]);

  const [addProjectLoading, setAddProjectLoading] = useState(false);
  const [addProjectSuccess, setAddprojectSuccess] = useState(false);
  const [addProjectError, setAddProjectError] = useState("");

  const resetProjectContext = () => {
    setAddProjectLoading(false);
    setAddprojectSuccess(false);
    setAddProjectError("");
  };

  const addProject = async (projectData: projectDataIFace) => {
    setAddProjectLoading(true);

    const { data, error } = await supabase
      .from("projects")
      .insert(projectData)
      .select();

    if (error) {
      setAddProjectLoading(false);
      setAddProjectError("Add project request failed!");
    }

    if (data) {
      setAddProjectLoading(false);
      setAddprojectSuccess(true);
      setProjects((prev: any) => [...prev, data]);
    }
  };

  const contextData = {
    projects,
    addProjectLoading,
    addProjectSuccess,
    addProjectError,
    addProject,
    resetProjectContext,
  };

  return (
    <ProjectContext.Provider value={contextData}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
