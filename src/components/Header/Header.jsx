import './header.css'
import logo from "../../assets/img/Logo.svg"
import menu from "../../assets/img/menu.svg"


const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <nav className="header__nav">
          <img src={logo} alt="webovio" />
          <img src={menu} alt="menu" />
        </nav>
        <div className="header__content">
          <p className="header__content_excerpt">A place where</p>
          <h1>A creative agency for redemptive brands</h1>
          <p className="header__content_intro">
            Anteelo is leading strategic design that builds powerful digital solutions
            for startups and enterprises.
          </p>
          <a href="/">Get in touch</a>
        </div>
      </div>
      <div className="header__brands"></div>
    </header>
  )
}

export default Header;