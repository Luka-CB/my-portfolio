import { useContext, useEffect, useState } from "react";
import styles from "../../styles/AdminForm.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "@/context/project";
import { Loader } from "../Loader";
import AdditionalInputs from "./AdditionalInputs";
import { AdditionalInputsContext } from "@/context/additionalInputs";
import DisplayImageUrlInputs from "./DisplayImageUrlInputs";
import { DisplayImageUrlInputsContext } from "@/context/displayImageUrlInputs";

const Form = () => {
  const { additionalInputs } = useContext(AdditionalInputsContext);

  const { imageUrls } = useContext(DisplayImageUrlInputsContext);

  const [name, setName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [frontendUrl, setFrontendUrl] = useState("");
  const [backendUrl, setBackendUrl] = useState("");
  const [description, setDescription] = useState("");

  const { addProjectLoading, addProject, addProjectSuccess } =
    useContext(ProjectContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    addProject({
      name,
      displayImages: imageUrls,
      websiteUrl: siteUrl,
      frontendUrl,
      backendUrl,
      description,
      screenshots: additionalInputs,
    });
  };

  useEffect(() => {
    if (addProjectSuccess) {
      window.location.reload();
    }
  }, [addProjectSuccess]);

  let disabled: any;

  if (
    addProjectLoading ||
    (!name && !siteUrl && !frontendUrl && !description)
  ) {
    disabled = true;
  }

  return (
    <div className={styles.container}>
      <h1>Add New Project</h1>
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
            {addProjectLoading ? <Loader width={25} height={25} /> : "Submit"}
          </button>
        </div>
        <AdditionalInputs disabled={disabled} />
        <button
          type="submit"
          className={styles.submitBtnSmScreen}
          disabled={disabled}
        >
          {addProjectLoading ? <Loader width={25} height={25} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
