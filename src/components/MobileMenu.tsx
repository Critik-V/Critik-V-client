import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles/MobileMenu.scss";
import AwesomeIcons from "./AwesomeIcons";

type PropsTypes = {
  hide: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
};

export default function MobileMenu({ hide, btnRef }: PropsTypes): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        btnRef.current?.contains(event.target as Node) ||
        menuRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      return hide();
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hide, btnRef]);

  return (
    <div className="mb-menu" ref={menuRef}>
      <div className="mb-menu__img">
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="photo de profile"
        />
        <p>User full name</p>
      </div>
      <div className="mb-menu__menu">
        <button>
          <NavLink onClick={hide} to={"/new-post"}>
            Poster son CV
          </NavLink>
        </button>
        <button>
          <NavLink onClick={hide} to={"/my-posts"}>
            Mes Posts
          </NavLink>
        </button>
        <button>
          <NavLink onClick={hide} to={"/favorites"}>
            Favoris
          </NavLink>
        </button>
        <button>
          <NavLink onClick={hide} to={"/guide"}>
            CV guide
          </NavLink>
        </button>
        <button>
          <NavLink onClick={hide} to={"/about-us"}>
            About Us
          </NavLink>
        </button>
      </div>
      <div className="mb-menu__setting">
        <Link onClick={hide} to="/profile">
          <AwesomeIcons type="solid" name="cog" />
        </Link>
      </div>
    </div>
  );
}
