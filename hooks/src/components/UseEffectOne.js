import React , {useState , useEffect}from 'react'

function UseEffectOne() {
    const [num , incrementNum ] = useState(0)
    const [name , setName] = useState("")

    // we can directly use this
    // document.title = `You Clicked ${num} Times`

    // or use useEffect()
    useEffect( _ => {
        console.log("Updating...")
        document.title = `You Clicked ${num} Times`
    },[num])
    
    return (
        <div>
            <input type="text" value={name} onChange={ e => setName(e.target.value)}></input>
            <button onClick={() => incrementNum(num + 1)}>You Clicked {num} Times</button>
        </div>
    )
}

export default UseEffectOne