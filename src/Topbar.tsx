import './Topbar.css';

function Topbar() {
    const styles = {
        header: {
            paddingTop: '5px',
            paddingLeft: '10px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '50px',
        },
        logoGroup: { 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px' 
        }
    }


    return (
        <header style={styles.header}>
            <div className='logoGroup'>
                <img src="/logo.svg" alt="logo" className="logo" />
                <h1>Mobile Artificial Intelligence</h1>
            </div>
        </header>
    )
}

export default Topbar;