import Nav from "./Nav";

// Header equal to a stateless functional component
const Header = () => (
    <div>
        <div className="bar">
            <a href="">Sick Fits</a>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </div>
)

export default Header;
