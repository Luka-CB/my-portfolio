import { DisplayImageUrlInputsContext } from "@/context/displayImageUrlInputs";
import React, { useContext } from "react";
import styles from "../../styles/DisplayImageUrlInputs.module.scss";
import { v4 as uuidv4 } from "uuid";
import { AiFillCloseCircle } from "react-icons/ai";

const DisplayImageUrlInputs = () => {
  const { imageUrls, setImageUrls } = useContext(DisplayImageUrlInputsContext);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    let data = [...imageUrls];
    data[i]["url"] = e.target.value;
    setImageUrls(data);
  };

  const handleAddUrl = () => {
    setImageUrls((prev: any) => [
      ...prev,
      {
        id: uuidv4(),
        url: "",
      },
    ]);
  };

  const handleRemoveUrlInput = (id: string) => {
    const filteredImageUrls = imageUrls.filter((imgUrl) => imgUrl.id !== id);
    setImageUrls(filteredImageUrls);
  };

  return (
    <div className={styles.container}>
      {imageUrls.map((x, i) => (
        <div className={styles.inputWrapper} key={x.id}>
          <input
            className={styles.input}
            type="text"
            name="url"
            placeholder="Enter display image url"
            value={x.url}
            onChange={(e) => handleOnChange(e, i)}
            required
          />
          {imageUrls.length === i + 1 ? (
            <button
              className={styles.addBtn}
              onClick={handleAddUrl}
              disabled={x.url === ""}
            >
              Add Url
            </button>
          ) : null}
          {i === 0 ? null : (
            <AiFillCloseCircle
              className={styles.closeIcon}
              onClick={() => handleRemoveUrlInput(x.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayImageUrlInputs;
