import { useRef, useState } from "react";
import "./styles/Header.scss";
import CritikVLogo from "@assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import AwesomeIcons from "@components/AwesomeIcons";
import MobileMenu from "@components/MobileMenu";

const cssMenuActive: string = "active-menu-header";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <header>
      <div className="menu">
        <NavLink to={"/"}>
          <img src={CritikVLogo} title="Logo Critik-V" alt="Logo Critik-V" />
        </NavLink>
        <div className="menu__items">
          <button>
            <NavLink
              to={"/my-posts"}
              className={({ isActive }) => (isActive ? cssMenuActive : undefined)}>
              Mes Posts
            </NavLink>
          </button>
          <button>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) => (isActive ? cssMenuActive : undefined)}>
              Favoris
            </NavLink>
          </button>
          <button>
            <NavLink
              to={"/guide"}
              className={({ isActive }) => (isActive ? cssMenuActive : undefined)}>
              CV guide
            </NavLink>
          </button>
          <button>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) => (isActive ? cssMenuActive : undefined)}>
              A propos
            </NavLink>
          </button>
        </div>
      </div>
      <div className="profile">
        <button
          ref={menuBtnRef}
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="profile__mobile-btn">
          <AwesomeIcons type="solid" name="bars" />
        </button>
        <Link to={"profile"}>
          <button className="profile__img">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="Profile"
              title="Profile"
            />
          </button>
        </Link>
        <button onClick={() => console.log("disconnected...")} id="disconnect-btn">
          <AwesomeIcons type="solid" name="right-from-bracket" />
        </button>
      </div>
      {isMenuOpen && (
        <MobileMenu
          hide={() => {
            setIsMenuOpen(false);
          }}
          btnRef={menuBtnRef}
        />
      )}
    </header>
  );
}
