import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
    return (
        <header>
            <div className='logo-group'>
                <Link to="/">
                    <img src="/logo.svg" alt="logo" />
                </Link>
                <h1>
                  <span className="full">Mobile Artificial Intelligence</span>
                  <span className="short">Mobile AI</span>
                </h1>
            </div>
            <div className='link-group'>
                <a href="https://github.com/orgs/Mobile-Artificial-Intelligence/repositories">Github</a>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </header>
    )
}

export default Topbar;