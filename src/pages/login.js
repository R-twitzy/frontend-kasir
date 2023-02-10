import { useState } from "react";
import axios from "axios";

//axios utk transfer data dr FE ke BE

export default function Login() {
  //ss
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let loginProcess = (ev) => {
    ev.preventDefault();
    //akses ke backend utk proses login
    // method POST
    // endpoint http://localhost:8080/user/auth
    // request: username dan password
    // response logged and token
    let request = {
      username: username,
      password: password,
    };
    let endpoint = `http://localhost:8080/user/auth`;

    //sending data
    axios
      .post(endpoint, request)
      .then((response) => {
        if (response.data.logged === true) {
          let token = response.data.token;
          //store token to local storage browser
          localStorage.setItem(`token-pelanggaran`, token);
          let dataUser = JSON.stringify(response.data.dataUser);
          localStorage.setItem(`user-pelanggaran`, dataUser);
          alert(`Login Berhhasil`);
          window.location.href = `/${response.data.dataUser.role}`;
        } else {
          alert(`invalid username or password`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid tengah">
      <div className="row justify-content-center mt-5">
        <div className="col-10 col-md-8 col-lg-6 col-xl-4 card-rama mb-5">
          <div className="card-body p-3">
            <form onSubmit={(ev) => loginProcess(ev)}>
              <div className=" px-2 py-3">
                <h3 className="fw-bold">Login</h3>
                <h6 className="mb-4">Enter your username and password</h6>
                {/* User Name Input */}
                <b>Username</b>
                <input
                  type="text"
                  className="form-control form-biru my-2 col-12"
                  required
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                />
                {/* password input */}
                <b>Password</b>
                <input
                  type="password"
                  className="form-control form-biru my-2 col-12"
                  required
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                {/* button login */}
                <button type="submit" className="tombol-biru mt-3">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
