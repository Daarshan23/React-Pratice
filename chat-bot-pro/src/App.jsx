import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
    const [chatMessages, setChatMessages] = useState([
        {
            message: 'hello chatbot ',
            sender: 'user',
            id: 'id1',
        },
        {
            message: 'hello Hello how can i help you ',
            sender: 'robot',
            id: 'id2',
        },
        {
            message: 'Can you get me today date chatbot ',
            sender: 'user',
            id: 'id3',
        },
        {
            message: '03-feb-2026  ',
            sender: 'robot',
            id: 'id4',
        },
    ]);
    //const [chatMessages , setChatMessages] = array;
    // const chatMessages = array[0];
    // const setChtMessages =  array[1];
    return (
        <div className="app">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App;
