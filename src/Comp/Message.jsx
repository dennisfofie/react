import { useState } from "react";
import Sculpture from "./Sculpture";

//using hook to render components

export default function Message() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return (
            <>
            <Sculpture/>
            </>
        );
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMesssage(message);
        }}>
            <textarea  placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
            <button>send</button>
        </form>
    );
}

function sendMesssage(message) {
    console.log(message);
}