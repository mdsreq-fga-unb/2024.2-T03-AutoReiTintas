import React, { useState } from "react";
import '../styles/sideBarStyle.css';
import logo_user from '../assets/images/user_person.png';
import carrinho from '../assets/images/shopping cart.png';
import pincel from '../assets/images/create.png';
import logo_db from '../assets/images/diamond.png';

const SideBar = ({active}) => {
    
    return (
            <div className="container">
                
                <div className="sidebar">
                    <div >
                        <img src={logo_user}/>
                        <h3>Minha Conta</h3>
                    </div>
                    <div style={{ backgroundColor: '#d4dde1' }} >
                        <img src={carrinho} />
                        <h3>Gestão de Estoque</h3>
                    </div>
                    <div >
                        <img src={pincel} className="pincel"/>
                        <h3>Administrar Contas</h3>
                    </div>
                    <div >
                        <img src={logo_db} />
                        <h3>DashBoards</h3>
                    </div>
                </div>
            </div>
    );
}

export default SideBar;
