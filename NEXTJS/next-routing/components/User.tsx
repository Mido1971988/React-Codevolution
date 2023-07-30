"use client"

export default function User({ user } : { user : { name : string , email : string}}){
    console.log(user)
    return (
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}