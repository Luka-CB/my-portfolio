import { useContext, useEffect, useState } from "react";
import styles from "../../styles/AdminForm.module.scss";
import { v4 as uuidv4 } from "uuid";
import { GrClose } from "react-icons/gr";
import { ProjectContext } from "@/context/project";
import { Loader } from "../Loader";
import { AdditionalInputsContext } from "@/context/additionalInputs";
import { DisplayImageUrlInputsContext } from "@/context/displayImageUrlInputs";
import DisplayImageUrlInputs from "./DisplayImageUrlInputs";
import AdditionalInputs from "./AdditionalInputs";

const UpdateForm = () => {
  const { additionalInputs, setAdditionalInputs } = useContext(
    AdditionalInputsContext
  );
  const { imageUrls, setImageUrls } = useContext(DisplayImageUrlInputsContext);
  const {
    editProjectData,
    setIsEditStateActive,
    updateProject,
    updateProjectLoading,
    updateProjectSuccess,
  } = useContext(ProjectContext);

  const [name, setName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [frontendUrl, setFrontendUrl] = useState("");
  const [backendUrl, setBackendUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    updateProject(
      {
        name,
        displayImages: imageUrls,
        websiteUrl: siteUrl,
        frontendUrl,
        backendUrl,
        description,
        screenshots: additionalInputs,
      },
      editProjectData.id || ""
    );
  };

  useEffect(() => {
    if (editProjectData) {
      setName(editProjectData.name);
      setSiteUrl(editProjectData.websiteUrl);
      setFrontendUrl(editProjectData.frontendUrl);
      setBackendUrl(editProjectData.backendUrl);
      setDescription(editProjectData.description);
      setImageUrls(editProjectData.displayImages);
      setAdditionalInputs(editProjectData.screenshots);
    }
  }, [editProjectData]);

  useEffect(() => {
    if (updateProjectSuccess) {
      window.location.reload();
    }
  }, [updateProjectSuccess]);

  let disabled: any;

  if (!name && !siteUrl && !frontendUrl && !description) {
    disabled = true;
  }

  const handleCloseEditState = () => {
    setIsEditStateActive(false);
    setImageUrls([
      {
        id: uuidv4(),
        url: "",
      },
    ]);
    setAdditionalInputs([
      {
        id: uuidv4(),
        additionalInputCount: 1,
        description: "",
        screenshotUrls: [
          {
            id: uuidv4(),
            screenshotUrlCount: 1,
            screenshotUrl: "",
          },
        ],
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <h1>Update Project</h1>
      <div className={styles.cancel} onClick={handleCloseEditState}>
        <GrClose className={styles.closeIcon} />
        <span>Cancel</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mainInputs}>
          <input
            type="text"
            placeholder="Enter website name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <DisplayImageUrlInputs />
          <input
            type="text"
            placeholder="Enter website url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter frontend code url"
            value={frontendUrl}
            onChange={(e) => setFrontendUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter backend code url"
            value={backendUrl}
            onChange={(e) => setBackendUrl(e.target.value)}
          />
          <textarea
            cols={65}
            rows={7}
            placeholder="Enter Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={disabled}
          >
            {updateProjectLoading ? (
              <Loader width={25} height={25} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <AdditionalInputs disabled={disabled} />
        <button
          type="submit"
          className={styles.submitBtnSmScreen}
          disabled={disabled}
        >
          {updateProjectLoading ? <Loader width={25} height={25} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
