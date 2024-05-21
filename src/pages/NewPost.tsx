import "./styles/NewPost.scss";
import AwesomeIcons from "@components/AwesomeIcons";
import Dropzone from "react-dropzone";
import { Fragment } from "react/jsx-runtime";
import { toast } from "react-hot-toast";
import { FileRejectedToast } from "@components/CustomToasts";
import { ChangeEvent, FocusEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { JobtypeSelect, LevelSelect } from "@utils";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@api/index";
import { CreatePostType } from "@api/types";

type IsUploadedProps = { name: string; weight: number };
const textAreaxMaxLength: number = 400;

export default function NewPost(): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const [isTitleCorrect, setIsTitleCorrect] = useState<boolean>(true);
  const [isDescriptionCorrect, setIsDescriptionCorrect] = useState<boolean>(true);

  const { register, handleSubmit, reset } = useForm<CreatePostType & { file: File }>();

  const mutation = useMutation({
    mutationKey: ["new-post"],
    mutationFn: (data: CreatePostType) => createPost(data),
    onSuccess: data => {
      if (data?.statusCode === 200 || data?.statusCode === 201) {
        reset();
        setFile(null);
      }
    }
  });

  const onSubmit: SubmitHandler<CreatePostType> = data => {
    data.file = file as File;

    if (!data.file) {
      toast.error("Veuillez ajouter un fichier PDF");
      return;
    }
    if (isTitleCorrect && isDescriptionCorrect) return mutation.mutate(data);
  };
  return (
    <main id="new-post">
      <h1>Nouveau post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="new-post-title">
          Titre <span>*</span>
        </label>
        <input
          className={isTitleCorrect ? "" : "invalid-input"}
          type="text"
          id="new-post-title"
          required
          maxLength={100}
          placeholder="Titre de votre post"
          {...register("title", {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setIsTitleCorrect(e.target.value.length === 0 || e.target.value.length > 5),
            onBlur: (e: FocusEvent<HTMLInputElement>) => e.target.value.trim()
          })}
        />
        <label htmlFor="new-post-description">
          Description <span>*</span>
        </label>
        <textarea
          className={isDescriptionCorrect ? "" : "invalid-input"}
          id="new-post-description"
          required
          maxLength={textAreaxMaxLength}
          placeholder="Description de votre post"
          {...register("description", {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setIsDescriptionCorrect(e.target.value.length === 0 || e.target.value.length > 5),
            onBlur: (e: FocusEvent<HTMLInputElement>) => e.target.value.trim()
          })}
          cols={30}
          rows={4}></textarea>
        <label htmlFor="new-post-job-type">
          Type d'emploi <span>*</span>
        </label>
        <select required defaultValue="" {...register("jobType")} id="new-post-job-type">
          <option value="" disabled>
            Type d'emploi
          </option>
          {JobtypeSelect.map(jobtype => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
        <label htmlFor="new-post-level">
          Niveau <span>*</span>
        </label>
        <select required defaultValue="" {...register("experienceLevel")} id="new-post-level">
          <option value="" disabled>
            Niveau
          </option>
          {LevelSelect.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        <label htmlFor="upload-field">
          CV <span>*</span>
        </label>
        <Dropzone
          maxFiles={1}
          maxSize={3 * 1024 * 1024}
          accept={{ "application/pdf": [".pdf"] }}
          onDropAccepted={files => setFile(files[0])}
          onFileDialogOpen={() => setFile(null)}
          onDropRejected={() => {
            setFile(null);
            toast(t => <FileRejectedToast dismiss={() => toast.dismiss(t.id)} />, {
              duration: 5000,
              style: {
                background: "#f7ede2"
              }
            });
          }}>
          {({ getRootProps, getInputProps, acceptedFiles, isDragActive }) => (
            <div
              {...getRootProps()}
              style={
                isDragActive ? { borderColor: "#07beb8", backgroundColor: "#07beb84c" } : undefined
              }>
              <input {...getInputProps({})} />
              {isDragActive && <IsUploading />}
              {file && !isDragActive && (
                <IsUploaded name={acceptedFiles[0].name} weight={acceptedFiles[0].size} />
              )}
              {!file && !isDragActive && <NofileUpload />}
            </div>
          )}
        </Dropzone>
        <button type="submit">
          <AwesomeIcons name="upload" type="solid" />
          Poster
        </button>
      </form>
    </main>
  );
}

// SUB COMPONENTS

export function NofileUpload(): JSX.Element {
  return (
    <Fragment>
      <AwesomeIcons type="regular" name="file" animation="shake" />
      <p style={{ fontWeight: 600 }}>Charger votre CV ici</p>
      <p>
        Exclusivement <span>PDF</span> de taille <span>Max 3.0 Mo</span>
      </p>
    </Fragment>
  );
}
export function IsUploading(): JSX.Element {
  return (
    <Fragment>
      <AwesomeIcons type="solid" name="upload" animation="beat" />
      <p style={{ fontWeight: 600 }}>Ajouter le fichier PDF</p>
      <p>
        <span>Assuerez vous que ça soit le bon</span>
      </p>
    </Fragment>
  );
}
export function IsUploaded({ name, weight }: IsUploadedProps): JSX.Element {
  return (
    <Fragment>
      <AwesomeIcons type="regular" name="file-pdf" />
      <p style={{ fontWeight: 600 }}>{name}</p>
      <p>
        <span>{(weight / (1024 * 1024)).toFixed(2)} Mo</span>
      </p>
    </Fragment>
  );
}
