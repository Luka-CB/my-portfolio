import { createContext, ReactNode, useState, useCallback } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface screenshotsIFace {
  id: string;
  description: string;
  screenshotUrls?: {
    id: string;
    screenshotUrl: string;
  }[];
}

interface imageUrlsIFace {
  id: string;
  url: string;
}

export interface projectDataIFace {
  id?: string;
  name: string;
  displayImages: imageUrlsIFace[];
  websiteUrl: string;
  frontendUrl: string;
  backendUrl: string;
  description: string;
  created_at?: string;
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

    try {
      const res = await fetch("/api/addProject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      const data = await res.json();

      if (data) {
        setAddProjectLoading(false);
        setAddprojectSuccess(true);
        setProjects((prev: any) => [...prev, data[0]]);
      }
    } catch (error) {
      setAddProjectLoading(false);
      setAddProjectError("Add project request failed!");
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
