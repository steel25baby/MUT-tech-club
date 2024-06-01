import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./header.css";
const Header =() => {
    return(
        <header className="header">
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    )
}

export default Header;