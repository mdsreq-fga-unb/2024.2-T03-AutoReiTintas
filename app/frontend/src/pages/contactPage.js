import React from "react";
import Header from "../components/header";
import "../styles/contactStyle.css"

const ContactPage = () => {
    return(
    <div>
        <Header></Header>
        <h1 style={{padding: '20px',
  background: 'linear-gradient(to right, rgb(221, 222, 230), rgba(243, 244, 248, 0.88))',
  color: 'black'}}>Contato</h1>
        <div style={{display: 'block', justifyContent: 'flex-start', padding: '20px', width: '80%', margin: 'auto', fontSize: "20px"}}>
            <p><b>Opções de serviço:</b> Oferece entrega no mesmo dia</p>
            <p><b>Endereço:</b> SCIA Q 13 - Guará, Brasília - DF, 71250-220</p>
            <p><b>Telefone:</b> (61) 3204-7000</p>
            <p><b>Horários de funcionamento:</b></p>
            <div className="tabela-container">
    <table>
        <tr>
            <th>Dia</th>
            <th>Horário</th>
        </tr>
        <tr>
            <td>Segunda-feira</td>
            <td>08:00–18:00</td>
        </tr>
        <tr>
            <td>Terça-feira</td>
            <td>08:00–18:00</td>
        </tr>
        <tr>
            <td>Quarta-feira</td>
            <td>08:00–18:00</td>
        </tr>
        <tr>
            <td>Quinta-feira</td>
            <td>08:00–18:00</td>
        </tr>
        <tr>
            <td>Sexta-feira</td>
            <td>08:00–18:00</td>
        </tr>
        <tr>
            <td>Sábado</td>
            <td>08:00–12:00</td>
        </tr>
        <tr>
            <td>Domingo</td>
            <td>Fechado</td>
        </tr>
    </table>

            </div>
        </div>
    </div>);
}

export default ContactPage;