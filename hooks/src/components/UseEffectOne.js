import React , {useState , useEffect}from 'react'

function UseEffectOne() {
    const [num , incrementNum ] = useState(0)

    // we can directly use this
    // document.title = `You Clicked ${num} Times`

    // or use useEffect()
    useEffect( _ => {
        document.title = `You Clicked ${num} Times`
    })
    
    return (
        <div>
            <button onClick={() => incrementNum(num + 1)}>You Clicked {num} Times</button>
        </div>
    )
}

export default UseEffectOne