import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
    return (
        <header>
            <div id='logo-group'>
                <Link to="/">
                    <img src="/logo.svg" alt="logo" />
                </Link>
                <h1>
                  <span id="title-full">Mobile Artificial Intelligence</span>
                  <span id="title-short">Mobile AI</span>
                </h1>
            </div>
            <div id='link-group'>
                <a href="https://github.com/orgs/Mobile-Artificial-Intelligence/repositories">Github</a>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
        </header>
    )
}

export default Topbar;