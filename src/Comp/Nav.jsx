import '../Styles/main.css';
import '../Styles/Nav.css';


export default function Nav() {
    return (
        <div className='container'>
            <nav>
                <div className="nav-element">
                    <div className="logo">
                        <h2>Fumi.</h2>
                    </div>
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>About us</li></a>
                        <a href='#services'><li>Services</li></a>
                        <a href='#blog'><li>Blog</li></a>
                        <a href='#contact'><li>Contact us</li></a>
                    </ul>
                </div>
                <div className="nav-icons">
                <span class="material-symbols-outlined control">person</span>
                <span class="material-symbols-outlined">shopping_cart</span>
                </div>
            </nav>
        </div>
    );
}