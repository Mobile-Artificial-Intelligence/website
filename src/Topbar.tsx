import React from 'react';

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
            <div style={styles.logoGroup}>
                <img src="/maid.svg" alt="Maid Logo" width="40px" />
                <h1>Maid</h1>
            </div>
        </header>
    )
}

export default Topbar;