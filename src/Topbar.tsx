import './Topbar.css';

function Topbar() {
    return (
        <header>
            <div className='logoGroup'>
                <img src="/logo.svg" alt="logo" />
                <h1>
                  <span className="full">Mobile Artificial Intelligence</span>
                  <span className="short">Mobile AI</span>
                </h1>
            </div>
            <div className='linkGroup'>
                <a href="https://github.com/orgs/Mobile-Artificial-Intelligence/repositories">Github</a>
            </div>
        </header>
    )
}

export default Topbar;