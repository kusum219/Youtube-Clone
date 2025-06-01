import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default function Navbar(){

    return(
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
        </nav>
    )
}
