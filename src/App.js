import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import TodaySubjects from "./TodaySubjects";
import "./App.css";
import Login from "./Login";
import Navigator from "./Navigator";
import { useSubject, actions } from "./subject";
import AllSemester from "./AllSemester";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";

function App() {
  const dispatch = useSubject()[1];
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .post(
        "https://sinhvien1.tlu.edu.vn:8098/education/oauth/token",
        {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
          client_id: 'education_client',
          grant_type: 'password',
          client_secret: 'password'
        }
      )
      .then((res) => {
        axios
          .get(
            "https://sinhvien1.tlu.edu.vn:8098/education/api/StudentCourseSubject/studentLoginUser/10",
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
            setloading(false);
            console.log("success");
          })
          .catch((err) => {
            console.log(err);
            setloading(false);
            alert('failed get courses')
          });
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        alert('failed get token')
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <GlobalStyles>
          <div className="App">
            <Header>
              <Navigator />
            </Header>
            <Routes>
              <Route path="/" element={<TodaySubjects />} />
              <Route path="/login" element={<Login />} />
              <Route path="/allsemester" element={<AllSemester />} />
            </Routes>
          </div>
        </GlobalStyles>
      )}
    </Router>
  );
}

export default App;
