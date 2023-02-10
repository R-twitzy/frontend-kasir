export default function UserAdmin(){
    if(!localStorage.getItem("token-kasir")){
        window.location.href ="login"
    }

    return(
        <div>
            <h1>User</h1>
        </div>
    )
}