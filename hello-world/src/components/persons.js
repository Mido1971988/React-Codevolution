import React from 'react'

// map method here
// function Persons({prop}) {
//     return (
//         prop.map(person => <h1 key={person.id}>Name : {person.name}. ID : {person.id}. Skill : {person.skill} </h1>)
//     )
// }

// map method in nameList.js
function Persons({prop , key}) {
    return (
        <div>
            {/* can not access key because it is not a prop */}
            {/* {key}  */}
            <h1>Name : {prop.name}. ID : {prop.id}. Skill : {prop.skill} </h1>
        </div>
    ) 
    
    
}

export default Persons