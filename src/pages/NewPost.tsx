import preventDefault from "@utils/preventDefault";
import "./styles/NewPost.scss";
import AwesomeIcons from "@components/AwesomeIcons";

export default function NewPost() {
  return (
    <section id="new-post">
      <form onSubmit={preventDefault}>
        <label htmlFor="new-post-title">
          Titre <span>*</span>
        </label>
        <input
          type="text"
          name="new-post-title"
          id="new-post-title"
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
          maxLength={150}></textarea>
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
        <div>
          <AwesomeIcons type="regular" name="file-pdf" animation="shake" />
          <p style={{ fontWeight: 600 }}>Charger votre CV ici</p>
          <p>
            Exclusivement <span>PDF</span> de taille <span>Max 3.0 Mo</span>
          </p>
        </div>
        <button type="submit">Poster</button>
      </form>
    </section>
  );
}
