import './Topbar.css';

function Topbar() {
    return (
        <header>
            <div className='logo-group'>
                <img src="/logo.svg" alt="logo" />
                <h1>
                  <span className="full">Mobile Artificial Intelligence</span>
                  <span className="short">Mobile AI</span>
                </h1>
            </div>
            <div className='link-group'>
                <a href="https://github.com/orgs/Mobile-Artificial-Intelligence/repositories">Github</a>
            </div>
        </header>
    )
}

export default Topbar;