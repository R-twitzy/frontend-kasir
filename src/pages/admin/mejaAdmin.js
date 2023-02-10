import { useState, useEffect } from "react"
import axios from "axios"
import { Modal, Toast } from "bootstrap"

export default function MejaAdmin(){
    if(!localStorage.getItem("token-kasir")){
        window.location.href ="login"
    }

    let [meja, setMeja] = useState([])
    let [idMeja, setIdMeja] = useState(0)
    let [nomorMeja, setNomorMeja] = useState("")
    let [status, setStatus] = useState("")
    let [action, setAction] = useState("")

    let [message, setMessage] = useState("")
    let [modal, setModal] = useState(null)

    // prepare token
    let token = localStorage.getItem("token-kasir")
    let authorization = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    let getData = () => {
        let endpoint= `http://localhost:8080/meja`
        // send data
        axios.get(endpoint, authorization)
            .then(response => {
                setMeja(response.data.Meja)
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            <h1>Meja</h1>
        </div>
    )
}