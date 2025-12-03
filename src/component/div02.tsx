type User = {
    name: string;
    sessionID: string;
}

type guest = Omit<User, 'name'>

export function Users({name, sessionID} : User) {
    return(
        <div>USER DETAILS - {name} : {sessionID}</div>
    )
}

export function GuestUser({sessionID}: guest){
    return(
        <div>GUEST USER DETAILS - {sessionID}</div>
    )
}