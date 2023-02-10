export default function MenuAdmin(){
    if(!localStorage.getItem("token-kasir")){
        window.location.href ="login"
    }

    return(
        <div>
            <h1>Menu</h1>
        </div>
    )
}