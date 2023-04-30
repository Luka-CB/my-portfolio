import { useContext, useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import styles from "../../styles/AdminForm.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "@/context/project";
import { ButtonLoader } from "../Loader";

interface additionalInputIFace {
  id: string;
  additinalInputCount: number;
  description: string;
  screenshotUrl: string;
}

const Form = () => {
  const [additionalInputs, setAdditionalInputs] = useState<
    additionalInputIFace[]
  >([
    {
      id: "",
      additinalInputCount: 1,
      description: "",
      screenshotUrl: "",
    },
  ]);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [frontendUrl, setFrontendUrl] = useState("");
  const [backendUrl, setBackendUrl] = useState("");
  const [description, setDescription] = useState("");

  const {
    addProjectLoading,
    addProject,
    projects,
    addProjectSuccess,
    resetProjectContext,
  } = useContext(ProjectContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formattedAdditionalInputs = additionalInputs.map((x) => {
      return {
        id: uuidv4(),
        description: x.description,
        screenshotUrl: x.screenshotUrl,
      };
    });

    addProject({
      name,
      displayImage: imageUrl,
      websiteUrl: siteUrl,
      frontendUrl,
      backendUrl,
      description,
      screenshots: formattedAdditionalInputs,
    });
  };

  console.log(projects);

  useEffect(() => {
    if (addProjectSuccess) {
      resetProjectContext();
      setName("");
      setImageUrl("");
      setSiteUrl("");
      setFrontendUrl("");
      setBackendUrl("");
      setDescription("");
      setAdditionalInputs([
        {
          id: "",
          additinalInputCount: 1,
          description: "",
          screenshotUrl: "",
        },
      ]);
    }
  }, [addProjectSuccess]);

  const handleAddMoreInput = () => {
    setAdditionalInputs((prev) => [
      ...prev,
      {
        id: `additonalInput${additionalInputs.length + 1}`,
        additinalInputCount: additionalInputs.length + 1,
        description: "",
        screenshotUrl: "",
      },
    ]);
  };

  const handleRemoveInput = (id: string) => {
    const filteredAdditionalInputs = additionalInputs.filter(
      (x) => x.id !== id
    );
    setAdditionalInputs(filteredAdditionalInputs);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>,
    i: number
  ) => {
    let data = [...additionalInputs];
    data[i][e.target.name === "description" ? "description" : "screenshotUrl"] =
      e.target.value;
    setAdditionalInputs(data);
  };

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
          <input
            type="text"
            placeholder="Enter display image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter website url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter frontend url"
            value={frontendUrl}
            onChange={(e) => setFrontendUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter backend url"
            value={backendUrl}
            onChange={(e) => setBackendUrl(e.target.value)}
            required
          />
          <textarea
            cols={65}
            rows={7}
            placeholder="Enter Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit" className={styles.submitBtn}>
            {addProjectLoading ? (
              <ButtonLoader width={25} height={25} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <div className={styles.additionalInputs}>
          <h2>Additional Inputs</h2>
          {additionalInputs.map((x, i) => (
            <div className={styles.inputGroup} key={x.id}>
              {x.additinalInputCount > 1 && (
                <AiFillCloseCircle
                  className={styles.closeIcon}
                  onClick={() => handleRemoveInput(x.id)}
                />
              )}
              <textarea
                cols={65}
                rows={5}
                name="description"
                placeholder="Enter Screenshot Description"
                value={x.description}
                onChange={(e) => handleOnChange(e, i)}
              ></textarea>
              <input
                type="text"
                name="screenshotUrl"
                placeholder="Screenshot url"
                value={x.screenshotUrl}
                onChange={(e) => handleOnChange(e, i)}
              />
            </div>
          ))}
          <button
            type="button"
            className={styles.addMoreBtn}
            onClick={handleAddMoreInput}
          >
            Add More
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
