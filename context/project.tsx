import { createContext, ReactNode, useState } from "react";
import axios from "axios";

interface childrenIFace {
  children: ReactNode;
}

export interface screenshotsIFace {
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
  addProjectLoading: boolean;
  addProjectSuccess: boolean;
  addProjectError: string;
  addProject: (projectData: projectDataIFace) => void;
  updateProject: (projectData: projectDataIFace, projectId: string) => void;
  deleteProject: (projectId: string) => void;
  isEditStateActive: boolean;
  setIsEditStateActive: any;
  editProjectData: projectDataIFace;
  setEditProjectData: any;
  updateProjectLoading: boolean;
  updateProjectSuccess: boolean;
  delProjectLoading: boolean;
  delProjectSuccess: boolean;
}

export const ProjectContext = createContext({} as projectIface);

const ProjectProvider = ({ children }: childrenIFace) => {
  const [addProjectLoading, setAddProjectLoading] = useState(false);
  const [addProjectSuccess, setAddprojectSuccess] = useState(false);
  const [addProjectError, setAddProjectError] = useState("");

  const [updateProjectLoading, setUpdateProjectLoading] = useState(false);
  const [updateProjectSuccess, setUpdateprojectSuccess] = useState(false);

  const [isEditStateActive, setIsEditStateActive] = useState(false);
  const [editProjectData, setEditProjectData] = useState(
    {} as projectDataIFace
  );

  const [delProjectLoading, setDelProjectLoading] = useState(false);
  const [delProjectSuccess, setDelProjectSuccess] = useState(false);

  const addProject = async (projectData: projectDataIFace) => {
    setAddProjectLoading(true);

    try {
      const { data } = await axios.post("/api/addProject", projectData, {
        headers: { "Content-Type": "application/json" },
      });

      if (data) {
        setAddProjectLoading(false);
        setAddprojectSuccess(true);
      }
    } catch (error) {
      setAddProjectLoading(false);
      setAddProjectError("Add project request failed!");
    }
  };

  const updateProject = async (
    projectData: projectDataIFace,
    projectId: string | undefined
  ) => {
    setUpdateProjectLoading(true);
    setUpdateprojectSuccess(false);

    try {
      const { data } = await axios.put(
        `/api/updateProject?projectId=${projectId}`,
        projectData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data) {
        setUpdateProjectLoading(false);
        setUpdateprojectSuccess(true);
      }
    } catch (error) {
      setUpdateProjectLoading(false);
      console.log(error);
    }
  };

  const deleteProject = async (projectId: string) => {
    setDelProjectLoading(true);
    setDelProjectSuccess(false);

    try {
      const { data } = await axios.delete(
        `/api/deleteProject?projectId=${projectId}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data) {
        setDelProjectLoading(false);
        setDelProjectSuccess(true);
      }
    } catch (error) {
      setDelProjectLoading(false);
      console.log(error);
    }
  };

  const contextData = {
    addProjectLoading,
    addProjectSuccess,
    addProjectError,
    addProject,
    isEditStateActive,
    setIsEditStateActive,
    editProjectData,
    setEditProjectData,
    updateProjectLoading,
    updateProjectSuccess,
    updateProject,
    delProjectLoading,
    delProjectSuccess,
    deleteProject,
  };

  return (
    <ProjectContext.Provider value={contextData}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
