import { useRef, useState } from "react";
import "./styles/Header.scss";
import CritikVLogo from "@assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AwesomeIcons from "@components/AwesomeIcons";
import MobileMenu from "@components/MobileMenu";
import { getMe, logout } from "@api/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const cssMenuActive: string = "active-menu-header";

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header>
      <div className="menu">
        <NavLink to={"/?page=1"}>
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
              to={"/favorites?page=1"}
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
        <p className="profile__name">
          {user?.fullname}
          <span></span>
        </p>
        <button
          aria-label="menu"
          ref={menuBtnRef}
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="profile__mobile-btn">
          <AwesomeIcons type="solid" name="bars" />
        </button>
        <Link to={"profile"}>
          <button className="profile__img">
            <img src={user?.profilePic} alt="Profile" title="Profile" />
          </button>
        </Link>
        <button aria-label="se deconnecter" onClick={handleLogout} id="disconnect-btn">
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
