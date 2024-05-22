/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";

import { useSubject, actions } from "../subject";
import Loading from "../Loading";
import style from "./Login.module.scss";

const cx = classNames.bind(style);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useSubject()[1];
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function newLogin() {
    setIsLoading(true);
    axios
      .post(
        "https://sinhvien1.tlu.edu.vn:8098/education/public/login/ext/loginnew",
        {
          username,
          password,
        }
      )
      .then((res) => {
        axios
          .get(
            "https://sinhvien1.tlu.edu.vn:8098/education/api/semester/1/100",
            {
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                Authorization: "Bearer " + res.data.access_token,
              },
            }
          )
          .then((sesInfo) => {
            console.log("sesInfo content", sesInfo.data.content);
            console.log("access_token", res.data.access_token);
            axios
              .get(
                "https://sinhvien1.tlu.edu.vn:8098/education/api/StudentCourseSubject/studentLoginUser/" +
                  sesInfo.data.content[0].id,
                {
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + res.data.access_token,
                  },
                }
              )
              .then((response) => {
                dispatch(actions.updateSubjects(response.data));
                console.log("success");
                navigator("/");
              })
              .catch((err) => {
                console.log(err);
                setIsLoading(false);
              });
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    // setIsLoading(false);
  }

  return (
    <div className={cx('container')}>
      {isLoading && <Loading />}
      <div className={cx('content')}>
        <div className={cx('form')}>
          <input
            name="username"
            value={username}
            placeholder="username"
            className={cx('input')}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className={cx('input')}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className={cx('btn-login')} onClick={newLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
