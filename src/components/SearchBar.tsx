import preventDefault from "@utils/preventDefault";
import "./styles/SearchBar.scss";

export function SearchBar(): JSX.Element {
  return (
    <form onSubmit={preventDefault} className="search">
      <div className="search__first">
        <input
          placeholder="Rechercher un CV"
          type="search"
          name="search"
          id="search"
        />
        <select name="job-type" id="job-type">
          <option selected disabled>
            Type d'emploi
          </option>
          <option value="APPRENTICESHIP">Alternance</option>
          <option value="FULL-TIME">CDI</option>
          <option value="PART-TIME">CDD</option>
          <option value="INTERNSHIP">Stage</option>
        </select>
      </div>
      <div className="search__secondary">
        <select name="level" id="level">
          <option selected disabled>
            Niveau
          </option>
          <option value="JUNIOR">Junior</option>
          <option value="SENIRO">Senior</option>
          <option value="EXPERT">Expert</option>
        </select>
        <select name="etablishement" id="etablishement">
          <option selected disabled>
            Etablissement
          </option>
          <optgroup label="Ecole / Université">
            <option value="SCHOOL">ESATIC</option>
            <option value="SCHOOL">INPHB</option>
            <option value="SCHOOL">Autre</option>
          </optgroup>
          <optgroup label="Entreprise">
            <option value="">Meta</option>
            <option value="COMPANY">Autre</option>
          </optgroup>
        </select>
        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}

export function FavSearchBar(): JSX.Element {
  return (
    <form onSubmit={preventDefault} className="search">
      <div className="search__first">
        <input
          placeholder="Rechercher un CV"
          type="search"
          name="search"
          id="search"
        />
        <select name="job-type" id="job-type">
          <option selected disabled>
            Type d'emploi
          </option>
          <option value="APPRENTICESHIP">Alternance</option>
          <option value="FULL-TIME">CDI</option>
          <option value="PART-TIME">CDD</option>
          <option value="INTERNSHIP">Stage</option>
        </select>
      </div>
      <div className="search__secondary">
        <select name="level" id="level">
          <option selected disabled>
            Niveau
          </option>
          <option value="JUNIOR">Junior</option>
          <option value="SENIRO">Senior</option>
          <option value="EXPERT">Expert</option>
        </select>
        <select name="etablishement" id="etablishement">
          <option selected disabled>
            Etablissement
          </option>
          <optgroup label="Ecole / Université">
            <option value="SCHOOL">ESATIC</option>
            <option value="SCHOOL">INPHB</option>
            <option value="SCHOOL">Autre</option>
          </optgroup>
          <optgroup label="Entreprise">
            <option value="">Meta</option>
            <option value="COMPANY">Autre</option>
          </optgroup>
        </select>
        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}
