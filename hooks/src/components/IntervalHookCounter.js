import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        console.log(count)
        setCount(count + 1) // count will be 0 always because of lexical scope
        // setCount(prevCount => prevCount + 1) 
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
        }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter