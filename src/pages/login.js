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
          window.location.href = "/";
        } else {
          alert(`invalid username or password`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className=" mt-5 col-12 col-md-9 col-lg-7 col-xl-6 card-rama">
          <div className="card-body p-3">
            <form onSubmit={(ev) => loginProcess(ev)}>
              {/* User Name Input */}
              <div className="form-group row justify-content-center px-3 my-2">
                <h6>Username</h6>
                <input
                  type="text"
                  className="form-biru"
                  required
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                />
              </div>
              {/* Password Input */}
              <div className="row justify-content-center px-3 my-2">
                <h6>Password</h6>
                <input
                  type="password"
                  className="form-biru"
                  required
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              {/* Log in Button */}
              <div className="">
                <button
                  type="submit"
                  className="tombol-biru my-3"
                >
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
