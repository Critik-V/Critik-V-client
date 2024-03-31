import "./styles/SearchBar.scss";
import { JobtypeSelect, LevelSelect } from "@utils";

export function SearchBar(): JSX.Element {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <div className="search__first">
        <input
          placeholder="Rechercher un CV"
          type="search"
          name="search"
          id="search"
        />
        <select defaultValue="" name="job-type" id="job-type">
          <option value="" disabled>
            Type d'emploi
          </option>
          {JobtypeSelect.map((jobtype) => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search__secondary">
        <select defaultValue="" name="level" id="level">
          <option value="" disabled>
            Niveau
          </option>
          {LevelSelect.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        {/* <select defaultValue="" name="etablishement" id="etablishement">
          <option value="" disabled>
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
        </select> */}
        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}

export function FavSearchBar(): JSX.Element {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <div className="search__first">
        <input
          placeholder="Rechercher un CV"
          type="search"
          name="search"
          id="search"
        />
        <select defaultValue="" name="job-type" id="job-type">
          <option value="" disabled>
            Type d'emploi
          </option>
          {JobtypeSelect.map((jobtype) => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search__secondary">
        <select defaultValue="" name="level" id="level">
          <option value="" disabled>
            Niveau
          </option>
          {LevelSelect.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        {/* <select defaultValue="" name="etablishement" id="etablishement">
          <option value="" disabled>
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
        </select> */}
        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}
