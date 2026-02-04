import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
            const [inputText, setInputText] = useState("");
            function saveInputText(event) {
                setInputText(event.target.value);
            }
            function sendMessage() {
                const newChatMessages = [
                    ...chatMessages,
                    {
                        message: inputText,
                        sender: "user",
                        id: crypto.randomUUID(),
                    },
                ];
                setChatMessages(newChatMessages);

                const response = Chatbot.getResponse(inputText);
                //console.log(response);
                setChatMessages([
                    ...newChatMessages,
                    {
                        message: response,
                        sender: "robot",
                        id: crypto.randomUUID(),
                    },
                ]);
                setInputText("");
            }
            return (
                <div className='flex'>
                    <input
                        placeholder="Send a msg to chatbot"
                        size="30"
                        onChange={saveInputText}
                        value={inputText}
                        className='input'
                    />
                    <button onClick={sendMessage} className='send'>Send</button>
                </div>
            );
        }