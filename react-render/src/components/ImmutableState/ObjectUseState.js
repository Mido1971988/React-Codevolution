import React, { useState } from 'react'

const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}
export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        // will not re-render because changing the properties of state object not changing the object so initState has the same reference 
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)

        // will re-render because you changed state object to new object with new reference
        // const newPerson = {...person}
        // newPerson.fname = 'Clark'
        // setPerson(newPerson)
        
        // or directly pass the object to setter function
        setPerson({
            fname: 'Clark',
            lname: 'Kent'
        })
    }
    console.log('ObjectUseState Render')
    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
