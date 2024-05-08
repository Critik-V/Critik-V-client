import { SubmitHandler, useForm } from "react-hook-form";
import "./styles/SearchBar.scss";
import { JobtypeSelect, LevelSelect } from "@utils";
import { SearchInputType } from "@types";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function SearchBar(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [queries] = useSearchParams();
  const page = queries.get("page") || "1";

  const { register, handleSubmit } = useForm<SearchInputType>();

  const onSubmit: SubmitHandler<SearchInputType> = data => {
    const params = new URLSearchParams();
    params.append("page", page);
    params.append("search", data.search);
    params.append("jobtype", data.jobType);
    params.append("level", data.experienceLevel);
    navigate(`${location.pathname}?${params.toString()}`, { replace: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <div className="search__first">
        <input {...register("search")} placeholder="Rechercher un CV" type="search" id="search" />
        <select defaultValue="" {...register("jobType")} id="job-type">
          <option value="">Tous les emplois</option>
          {JobtypeSelect.map(jobtype => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search__secondary">
        <select defaultValue="" {...register("experienceLevel")} id="level">
          <option value="">Tous niveaux</option>
          {LevelSelect.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>

        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}

export function FavSearchBar(): JSX.Element {
  const { register, handleSubmit } = useForm<SearchInputType>();
  const onSubmit: SubmitHandler<SearchInputType> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search">
      <div className="search__first">
        <input {...register("search")} placeholder="Rechercher un CV" type="search" id="search" />
        <select defaultValue="" {...register("jobType")} id="job-type">
          <option value="">Tous les emplois</option>
          {JobtypeSelect.map(jobtype => (
            <option key={jobtype.value} value={jobtype.value}>
              {jobtype.label}
            </option>
          ))}
        </select>
      </div>
      <div className="search__secondary">
        <select defaultValue="" {...register("experienceLevel")} id="level">
          <option value="">Tous niveaux</option>
          {LevelSelect.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>

        <button type="submit">Rechercher</button>
      </div>
    </form>
  );
}
