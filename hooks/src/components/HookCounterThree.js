import React , {useState}from 'react'

function HookCounterThree() {
    const [name , setName] = useState({firstName : "" , lastName : ""})
    return (
        <div>
            <input typeof='text' value={name.firstName} onChange={e=> setName({...name ,firstName : e.target.value})}></input>
            <input typeof='text' value={name.lastName} onChange={e=> setName({...name ,lastName : e.target.value})}></input>
            <h1>Your First Name is {name.firstName}</h1>
            <h1>Your Last Name is {name.lastName}</h1>
            <h2>name object {JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree