import './Topbar.css';

function Topbar() {
    return (
        <header>
            <div className='logoGroup'>
                <img src="/logo.svg" alt="logo" className="logo" />
                <h1>Mobile Artificial Intelligence</h1>
            </div>
            <div className='linkGroup'>
                <a href="https://github.com/orgs/Mobile-Artificial-Intelligence/repositories">Github</a>
            </div>
        </header>
    )
}

export default Topbar;