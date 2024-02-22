import "./Header.module.css";
import Logo from "../../../assets/svgs/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={Logo} className="logo" />
      <h1 className="header-title">PetBlog</h1>
    </header>
  );
}
