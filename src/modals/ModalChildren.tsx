import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Modal.scss";
import { modalContext } from "@context/store";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditPostInputType } from "@types";
import { JobtypeSelect, LevelSelect } from "@utils";

export function EditModal() {
  const [isTitleCorrect, setIsTitleCorrect] = useState<boolean>(true);
  const [isDescriptionCorrect, setIsDescriptionCorrect] =
    useState<boolean>(true);
  const { hide } = modalContext((state) => state);

  const { register, handleSubmit } = useForm<EditPostInputType>();

  const onSubmit: SubmitHandler<EditPostInputType> = (data) => {
    isTitleCorrect && isDescriptionCorrect && console.log(data);
  };

  return (
    <div className="modal-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <button onClick={hide}>
          <AwesomeIcons type="solid" name="xmark" />
        </button>
        <label htmlFor="new-post-title">
          Titre <span>*</span>
        </label>
        <input
          className={isTitleCorrect ? "" : "invalid-input"}
          required
          type="text"
          {...register("title", {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setIsTitleCorrect(e.target.value.length > 0),
          })}
          id="new-post-title"
          maxLength={100}
          placeholder="Titre de votre post"
        />
        <label htmlFor="new-post-description">
          Description <span>*</span>
        </label>
        <textarea
          className={isDescriptionCorrect ? "" : "invalid-input"}
          required
          placeholder="Description de votre post"
          {...register("description", {
            onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
              setIsDescriptionCorrect(e.target.value.length > 10),
          })}
          id="new-post-description"
          cols={30}
          rows={4}
          maxLength={300}></textarea>
        <label htmlFor="new-post-job-type">
          Type d'emploi <span>*</span>
        </label>
        <select defaultValue="" {...register("jobType")} id="new-post-job-type">
          <option value="" disabled>
            Type d'emploi
          </option>
          {JobtypeSelect.map((jobtype) => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
        <label htmlFor="new-post-level">
          Niveau <span>*</span>
        </label>
        <select defaultValue="" {...register("level")} id="new-post-level">
          <option value="" disabled>
            Niveau
          </option>
          {LevelSelect.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        <button type="submit">
          <AwesomeIcons name="pencil" type="solid" /> Modifier
        </button>
      </form>
    </div>
  );
}

export function ArchiveModal() {
  const { hide } = modalContext((state) => state);

  return (
    <div className="modal">
      <div className="modal__header">
        <div></div>
        <button onClick={hide}>
          <AwesomeIcons type="solid" name="xmark" />
        </button>
      </div>
      <div className="modal__content">
        <div data-type="archive">
          <AwesomeIcons type="regular" name="eye-slash" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dignissimos enim est, commodi
        </p>
        <button data-type="archive">Archiver</button>
      </div>
    </div>
  );
}

export function DeleteModal() {
  const { hide } = modalContext((state) => state);

  return (
    <div className="modal">
      <div className="modal__header">
        <div></div>
        <button onClick={hide}>
          <AwesomeIcons type="solid" name="xmark" />
        </button>
      </div>
      <div className="modal__content delete">
        <div data-type="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dignissimos enim est, commodi
        </p>
        <button data-type="delete">Supprimer</button>
      </div>
    </div>
  );
}

export function UnArchiveModal() {
  const { hide } = modalContext((state) => state);

  return (
    <div className="modal">
      <div className="modal__header">
        <div></div>
        <button onClick={hide}>
          <AwesomeIcons type="solid" name="xmark" />
        </button>
      </div>
      <div className="modal__content">
        <div data-type="unarchive">
          <AwesomeIcons type="regular" name="eye" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          dignissimos enim est, commodi
        </p>
        <button data-type="unarchive">Désarchiver</button>
      </div>
    </div>
  );
}
