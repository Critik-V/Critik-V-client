import { useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./styles/MobileMenu.scss";
import AwesomeIcons from "./AwesomeIcons";
import { getMe, logout } from "@api/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

type PropsTypes = {
  hide: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
};

export default function MobileMenu({ hide, btnRef }: PropsTypes): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 5
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Vous êtes déconnecté");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  });

  const handleLogout = () => mutation.mutate();

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
        <img src={user?.profilePic} alt="photo de profile" />
        <p>{user?.fullname}</p>
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
            A propos
          </NavLink>
        </button>
        <button onClick={handleLogout} style={{ color: "#ff5252" }}>
          Se déconnecter
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
