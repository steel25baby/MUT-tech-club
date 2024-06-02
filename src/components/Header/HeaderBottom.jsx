import {Link} from "react-router-dom"
const HeaderBottom = () => {
    return(
        <div className="header-bottom">
            <nav className="header-nav">
                <ol className="header-nav-list">
                    <li className="header-nav-item"><Link to="/"></Link>home</li>
                    <li className="header-nav-item"><Link to="/tracks"></Link>careers</li>
                    <li className="header-nav-item"><Link to="/leaders"></Link>leaders</li>
                    <li className="header-nav-item"><Link to="/events"></Link>events</li>


                </ol>

            </nav>
        
      
        </div>
    )
}

export default HeaderBottom;