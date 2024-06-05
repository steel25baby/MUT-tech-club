import {Link} from "react-router-dom"
const HeaderBottom = () => {
    return(
        <div className="header-bottom">
            <nav className="header-nav">
                <ol className="header-nav-list">
                    <li className="header-nav-item"><Link to="/">home</Link></li>
                    <li className="header-nav-item"><Link to="/Tracks">Tracks</Link></li>
                    <li className="header-nav-item"><Link to="/leaders">leaders</Link></li>
                    <li className="header-nav-item"><Link to="/events">events</Link></li>


                </ol>

            </nav>
        
      
        </div>
    )
}

export default HeaderBottom;