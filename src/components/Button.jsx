import { useState } from "react";

export default function Options() {
    const [status, setStatus] = useState(true);

    const handleDataChange = () => {
        setStatus(!status);
    };

    return (
        <>
            <button class={`${status ? "bg-green-400" : "bg-red-400"} text-white font-bold py-2 px-4 rounded`} onClick={handleDataChange}>{status ? "Success" : "Failure"}</button>
        </>
    )
}

