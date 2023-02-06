import React from 'react'
import Persons from './persons'

function NameList() {
    const names = ["Mohamed" , "Ahmed" , "Soliman"]
    const persons = [
        {
            id : 1,
            name : "Mohamed",
            skill : "HTML"
        },
        {
            id : 2,
            name : "Ahmed",
            skill : "CSS"
        },
        {
            id : 3,
            name : "Soliman",
            skill : "JS"
        }
    ]
    return (
        // <div>
        //     {[<h1>{names[0]}</h1> , <h1>{names[1]}</h1> , <h1>{names[2]}</h1>]}
        // </div>

        // using map method
        <div>
            {
                names.map((name,indx) => <h1 key={indx}>{name}</h1>)
            }
        </div>

        // persons
        // <div>
        //     {
                // persons.map(person => <h1>Name : {person.name}. ID : {person.id}. Skill : {person.skill} </h1>)
                
                // using person.js (map method here)
                // persons.map(person => <Persons key={person.id} prop={person}></Persons>)

                // using person.js (map method inside persons.js)
                // <Persons prop={persons}></Persons>

        //     }
        // </div>
    )
}

export default NameList