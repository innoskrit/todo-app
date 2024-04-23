import { useEffect, useState } from "react";

function App2() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("PSIT");
    }, [])

    useEffect(() => {
        console.log("Count Incremented");
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <>
        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default App2;