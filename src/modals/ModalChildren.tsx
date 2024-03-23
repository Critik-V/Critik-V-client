import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Modal.scss";
import { modalContext } from "@context/store";
import preventDefault from "@utils/preventDefault";

export function EditModal() {
  const { hide } = modalContext((state) => state);

  return (
    <div className="modal-form">
      <form onSubmit={preventDefault}>
        <button onClick={hide}>
          <AwesomeIcons type="solid" name="xmark" />
        </button>
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
