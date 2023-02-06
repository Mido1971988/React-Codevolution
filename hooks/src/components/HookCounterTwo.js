import React , {useState} from 'react'

function HookCounterTwo() {
    
    const [count , setCount] = useState(0)
    
    const incrementFive = () => {
        //React groups multiple state updates into a single re-render for better performance (Batching)
        for(let i =0 ; i < 5; i++){
            // setCount(count + 1)
            setCount( prevState => prevState + 1)
        }
    }
    return (
        <div>
            Count {count}
            <button onClick={()=> setCount(0)}>Reset</button>
            {/* <button onClick={()=> setCount( count + 1)}>Increment</button> */}
            <button onClick={()=> setCount(  prevState => prevState + 1)}>Increment</button>
            {/* <button onClick={()=> setCount( count - 1)}>Decrement</button> */}
            <button onClick={()=> setCount(  prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo