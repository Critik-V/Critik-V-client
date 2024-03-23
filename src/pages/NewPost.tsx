import "./styles/NewPost.scss";
import AwesomeIcons from "@components/AwesomeIcons";
import Dropzone from "react-dropzone";
import { Fragment } from "react/jsx-runtime";
import { toast } from "react-hot-toast";
import { FileRejectedToast } from "@components/CustomToasts";

type IsUploadedProps = { name: string; weight: number };

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

export default function NewPost(): JSX.Element {
  return (
    <main id="new-post">
      <h1>Nouveau post</h1>
      <form>
        <label htmlFor="new-post-title">
          Titre <span>*</span>
        </label>
        <input
          type="text"
          name="new-post-title"
          id="new-post-title"
          maxLength={100}
          placeholder="Titre de votre post"
        />
        <label htmlFor="new-post-description">
          Description <span>*</span>
        </label>
        <textarea
          placeholder="Description de votre post"
          name="new-post-description"
          id="new-post-description"
          cols={30}
          rows={4}
          maxLength={300}></textarea>
        <label htmlFor="new-post-job-type">
          Type d'emploi <span>*</span>
        </label>
        <select name="new-post-job-type" id="new-post-job-type">
          <option selected disabled>
            Type d'emploi
          </option>
          <option value="APPRENTICESHIP">Alternance</option>
          <option value="FULL-TIME">CDI</option>
          <option value="PART-TIME">CDD</option>
          <option value="INTERNSHIP">Stage</option>
        </select>
        <label htmlFor="new-post-job-domain">Domaine</label>
        <select name="new-post-job-domain" id="new-post-job-domain">
          <option selected disabled>
            Domaine
          </option>
          <option value="DEVELOPMENT">Développement</option>
          <option value="DESIGN">Design</option>
          <option value="MARKETING">Marketing</option>
          <option value="SALES">Vente</option>
          <option value="CUSTOMER-SERVICE">Service client</option>
          <option value="FINANCE">Finance</option>
          <option value="HUMAN-RESOURCES">Ressources humaines</option>
          <option value="LEGAL">Juridique</option>
          <option value="ADMINISTRATIVE">Administratif</option>
          <option value="MANAGEMENT">Management</option>
          <option value="OTHER">Autre</option>
        </select>
        <label htmlFor="new-post-level">
          Niveau <span>*</span>
        </label>
        <select name="new-post-level" id="new-post-level">
          <option selected disabled>
            Niveau
          </option>
          <option value="JUNIOR">Junior</option>
          <option value="SENIOR">Senior</option>
          <option value="EXPERT">Expert</option>
        </select>
        <label htmlFor="upload-field">
          CV <span>*</span>
        </label>
        <Dropzone
          maxFiles={1}
          maxSize={3 * 1024 * 1024}
          accept={{ "application/pdf": [".pdf"] }}
          onDropRejected={() =>
            toast(
              (t) => <FileRejectedToast dismiss={() => toast.dismiss(t.id)} />,
              {
                duration: 5000,
                style: {
                  background: "#f7ede2",
                },
              }
            )
          }>
          {({ getRootProps, getInputProps, acceptedFiles, isDragActive }) => (
            <section>
              <div
                {...getRootProps()}
                style={
                  isDragActive
                    ? { borderColor: "#07beb8", backgroundColor: "#07beb84c" }
                    : undefined
                }>
                <input {...getInputProps()} />
                {isDragActive && <IsUploading />}
                {acceptedFiles[0] && !isDragActive && (
                  <IsUploaded
                    name={acceptedFiles[0].name}
                    weight={acceptedFiles[0].size}
                  />
                )}
                {!acceptedFiles[0] && !isDragActive && <NofileUpload />}
              </div>
            </section>
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
