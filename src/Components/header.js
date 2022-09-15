import { Link } from 'react-router-dom';

const Header = () => (

  <header className="header">
    <h1 className="title">Math Magician</h1>
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </header>

);
export default Header;
