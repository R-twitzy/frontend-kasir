export default function Admin(){
    return(
        <div className="container-fluid tengah">
            <a href="/admin/user">
                <button className="tombol-biru col-2 m-1">
                    User
                </button>
            </a>
            <a href="/admin/menu">
                <button className="tombol-biru col-2 m-1">
                    Menu
                </button>
            </a>
            <a href="/admin/meja">
                <button className="tombol-biru col-2 m-1">
                    Meja
                </button>
            </a>
        </div>
    )
}
