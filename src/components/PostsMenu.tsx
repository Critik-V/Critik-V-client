import { NavLink } from "react-router-dom";
import "./styles/PostsMenu.scss";

const cssMenuActive: string = "active-menu-posts";

export default function PostsMenu() {
  return (
    <div className="posts-menu">
      <NavLink
        className={({ isActive }) => (isActive ? cssMenuActive : undefined)}
        to={""}
        end>
        Tous
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cssMenuActive : undefined)}
        to={"archived"}>
        Archives
      </NavLink>
    </div>
  );
}
