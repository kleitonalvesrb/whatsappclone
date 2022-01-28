import React from 'react';
import './ChatIntro.css';


function ChatIntro(){
    return (
        <div className='chatIntro'>
            <img src='http://olsan.com.br/img/home/atendimento_pessoal_online-02.png' alt='webwhatsapp'/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sicronizar suas mensagens
                <br/>
                Para reduxir o uso de dados, conect seu telefone a uma rede Wi-Fi
            </h2>
        </div>
    );
}

export default ChatIntro;