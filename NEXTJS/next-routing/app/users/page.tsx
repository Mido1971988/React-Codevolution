import User from "../../components/User"

export default async function UserList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersList : [{ id : string , name : string , email : string}]  = await response.json()
    return (
        <>
            <h1>List of users</h1>
            {usersList.map(user => {
                return (
                <div key={user.id}>
                    <User user={user} />
                </div>
                )
            })}
        </>
    )
}



