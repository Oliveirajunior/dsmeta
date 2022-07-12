import icon from "../../assets/img/logo.svg"
import "./styles.css"

const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={icon} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/Oliveirajunior">@Oliveirajunior</a>
        </p>
      </div>
    </header>
  )
}

export default Header