import React from 'react'

function Persons({prop}) {
    return (
        prop.map(person => <h1 key={person.id}>Name : {person.name}. ID : {person.id}. Skill : {person.skill} </h1>)
    )
}

export default Persons