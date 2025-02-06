import React from 'react';
import Header from '../components/Header';  
import SideBarState from '../components/SideBarState';

const DashboardPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
                <SideBarState />
                <main style={{ flex: 1, padding: '20px' }}>
                    <h1>Dashboard</h1>
                    <p>Aqui vai o conteúdo principal do dashboard.</p>
                </main>
            </div>
        </div>
    );
}

export default DashboardPage;
