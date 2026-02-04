import { useRef,useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';
function ChatMessages({ chatMessages }) {
        const chatMsgRef =useRef(null);
            useEffect(() => {
                const conElement = chatMsgRef.current;
                if(conElement){
                    conElement.scrollTop = conElement.scrollHeight;
                }
            }, [chatMessages]);
            return (
                <div
                    className='chat-msgg-cont'
                    ref={chatMsgRef}>
                    {chatMessages.map((chatMessage) => {
                        return (
                            <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                            />
                        );
                    })}
                </div>
            );
        }

        export default ChatMessages;