import { AttachFile, Close, InsertEmoticon, Mic, Send } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import Search from '@material-ui/icons/Search';
import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useState, useRef } from 'react';
import MessegeItem from '../MessegeItem/MessegeItem';
import './ChatWindow.css'

function ChatWindow({ user }) {
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
        { author: 123, body: 'Kleiton Alves Rodrigues batista, 26 anos, nascido em 01/03/1995 formado em sistemas de informaçãoes pela universidade católica de brasilia em 2017/1, atuo como desenvolvedor de software desde então, comecei atuando dentro do ministerio da educação onde atuei por 5 anos em diversos sistemas da Secretaria de educação básica (SEB)' },
        { author: 123, body: 'cpf 044.179.961-21' },
        { author: 1234, body: 'telefone 61 98187-9959' },
    ]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }
    const handleMicClick = () => {
        if (recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false)
            }

            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
            recognition.start();

        }
    }
    const handleSendClick = () => {

    }
    const body = useRef();
    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list])

    return (
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
                    <div className='chatWindow--name'>Kleiton Batista</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn'>
                        <Search style={{ color: '#919191' }} />
                    </div>
                    <div className='chatWindow--btn'>
                        <AttachFile style={{ color: '#919191' }} />
                    </div>
                    <div className='chatWindow--btn'>
                        <MoreVert style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) => (
                    <MessegeItem key={key}
                        data={item}
                        user={user} />
                ))}

            </div>
            <div className='chatWindow--emojiarea' style={{ height: emojiOpen ? '200px' : '0' }}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className='chatWindow--footer'>
                <div className='chatWindow--pre'>

                    <div className='chatWindow--btn'
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? "40px" : "0" }}>
                        <Close style={{ color: '#919191' }} />
                    </div>

                    <div className='chatWindow--btn'
                        onClick={handleOpenEmoji}>
                        <InsertEmoticon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>
                <div className='chatWindow--inputarea'>
                    <input className="chatWindow--input"
                        placeholder='Digite uma mensagem'
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className='chatWindow--pos'>
                    {text === '' &&
                        <div onClick={handleMicClick} className='chatWindow--btn'>
                            <Mic style={{ color: listening ? '#126ece' : '#919191' }} />
                        </div>
                    }
                    {text !== '' &&

                        <div onClick={handleSendClick} className='chatWindow--btn'>
                            <Send style={{ color: '#919191' }} />
                        </div>
                    }
                </div>
            </div>

        </div>
    );

}
export default ChatWindow;