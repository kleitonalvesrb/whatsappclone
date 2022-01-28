import React from "react";
import './MessegeItem.css'

function MessegeItem({ data, user }) {
    return (
        <div
            className="messageLine"
            style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' }}
        >


            <div
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#DCF8C6' : ''
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    )
}

export default MessegeItem;

/*
Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)
*/

/**
 for(var start = 1; start < 100; start++) {
    await setTimeout(async function () {
        window.InputEvent = window.Event || window.InputEvent;
        var event = new InputEvent('input', {bubbles: true});
        var textbox = document.querySelector('footer .selectable-text');
        textbox.textContent = "não me bloqueia nao viadinho! "+ new Date();
        textbox.dispatchEvent(event);
        document.querySelector('span[data-icon="send"]').click();
await new Promise(r => setTimeout(r, 5000));
    }, 300);
  }

 */