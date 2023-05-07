import { createContext, ReactNode, useState, useCallback } from "react";
import supabase from "@/config/supabaseClient";

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
  getProjectsLoading: boolean;
  addProject: (projectData: projectDataIFace) => void;
  getProjects: () => void;
  resetProjectContext: () => void;
}

export const ProjectContext = createContext({} as projectIface);

const ProjectProvider = ({ children }: childrenIFace) => {
  const [projects, setProjects] = useState<projectDataIFace[]>([]);

  const [addProjectLoading, setAddProjectLoading] = useState(false);
  const [addProjectSuccess, setAddprojectSuccess] = useState(false);
  const [addProjectError, setAddProjectError] = useState("");

  const [getProjectsLoading, setGetProjectsLoading] = useState(false);

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
      setProjects((prev: any) => [...prev, data[0]]);
    }
  };

  const getProjects = useCallback(async () => {
    setGetProjectsLoading(true);

    const { data, error }: any = await supabase.from("projects").select();

    if (error) {
      setGetProjectsLoading(false);
      console.log(error);
    }

    if (data) {
      setGetProjectsLoading(false);
      setProjects(data);
    }
  }, []);

  const contextData = {
    projects,
    addProjectLoading,
    addProjectSuccess,
    addProjectError,
    addProject,
    resetProjectContext,
    getProjectsLoading,
    getProjects,
  };

  return (
    <ProjectContext.Provider value={contextData}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
