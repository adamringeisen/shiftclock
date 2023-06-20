import './App.css'
import getSegments from './lib/segments'
import getShift from './lib/shift'
import { useEffect, useState } from 'react'
function App() {
    const [segs, setSegs] = useState(getSegments());

    useEffect(() => {
        const interval = setInterval(() => setSegs(getSegments()), 6000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>

            <h1>{segs}</h1>
            <h2>{getShift(segs)}</h2>
        </>
    )
}

export default App
