import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "../../styles/AdditionalInputs.module.scss";
import { AdditionalInputsContext } from "@/context/additionalInputs";

interface componentIFace {
  disabled: any;
}

const AdditionalInputs: React.FC<componentIFace> = ({ disabled }) => {
  const { additionalInputs, setAdditionalInputs } = useContext(
    AdditionalInputsContext
  );

  const handleAddMoreInput = () => {
    setAdditionalInputs((prev: any) => [
      ...prev,
      {
        id: uuidv4(),
        additionalInputCount: additionalInputs.length + 1,
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

  const handleAddUrl = (id: string) => {
    let newAdditionalInputs = [...additionalInputs];
    const newArr = newAdditionalInputs.find((input) => input.id === id);
    newArr?.screenshotUrls.push({
      id: uuidv4(),
      screenshotUrlCount: newArr.screenshotUrls.length + 1,
      screenshotUrl: "",
    });

    setAdditionalInputs(newAdditionalInputs);
  };

  const handleRemoveInput = (id: string) => {
    const filteredScreenshotDescriptions = additionalInputs.filter(
      (x) => x.id !== id
    );
    setAdditionalInputs(filteredScreenshotDescriptions);
  };

  const handleRemoveUrlInput = (
    additionalInputIndex: number,
    screenshotUrlIndex: number
  ) => {
    let newAdditionalInputs = [...additionalInputs];
    newAdditionalInputs[additionalInputIndex].screenshotUrls.splice(
      screenshotUrlIndex,
      1
    );

    setAdditionalInputs(newAdditionalInputs);
  };

  const handleAdditionalInputOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>,
    i: number
  ) => {
    let Data = [...additionalInputs];
    Data[i]["description"] = e.target.value;
    setAdditionalInputs(Data);
  };

  const handleScreenshotUrlOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>,
    additionalInputIndex: number,
    screenshotUrlIndex: number
  ) => {
    let data = [...additionalInputs];
    data[additionalInputIndex].screenshotUrls[screenshotUrlIndex][
      "screenshotUrl"
    ] = e.target.value;
    setAdditionalInputs(data);
  };
  return (
    <div className={styles.additionalInputs}>
      <h2>Additional Inputs</h2>
      {additionalInputs.map((x, additionalInputIndex) => (
        <div className={styles.inputGroup} key={x.id}>
          {x.additionalInputCount > 1 && (
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
            disabled={disabled}
            value={x.description}
            onChange={(e) =>
              handleAdditionalInputOnChange(e, additionalInputIndex)
            }
          ></textarea>
          {x.screenshotUrls.map((scrUrl, screenshotUrlIndex) => (
            <div key={scrUrl.id} className={styles.urlInputWrapper}>
              <input
                type="text"
                name="screenshotUrl"
                placeholder="Enter Screenshot Url"
                disabled={x.description === ""}
                value={scrUrl.screenshotUrl}
                onChange={(e) =>
                  handleScreenshotUrlOnChange(
                    e,
                    additionalInputIndex,
                    screenshotUrlIndex
                  )
                }
              />
              {scrUrl.screenshotUrlCount > 1 && (
                <AiFillCloseCircle
                  className={styles.urlCloseIcon}
                  onClick={() =>
                    handleRemoveUrlInput(
                      additionalInputIndex,
                      screenshotUrlIndex
                    )
                  }
                />
              )}
            </div>
          ))}
          <button
            type="button"
            className={styles.addUrlBtn}
            onClick={() => handleAddUrl(x.id)}
            disabled={x.screenshotUrls[0].screenshotUrl === ""}
          >
            Add Url
          </button>
        </div>
      ))}
      <button
        type="button"
        className={styles.addMoreBtn}
        onClick={handleAddMoreInput}
        disabled={disabled}
      >
        Add More
      </button>
    </div>
  );
};

export default AdditionalInputs;
