import ShareButton from "../ShareButton/ShareButton";
import ".//Navbar.css"


const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
            <div className="nav-logo">
                <h2>UiGradients + <span className="highlight">CodeVixens</span></h2>
            </div>
            <div className="buttons">
                <ShareButton/>
                
            </div>
            </nav>

        </div>
     );
}
 
export default Navbar;