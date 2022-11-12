import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeUserSession} from "./Utils/Common";
import { getTokenRefresh } from "./Utils/Common";
import { TimeoutLogic } from "./Utils/TimeoutLogic";

function Dashboard() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const userdata = {
    student_admissions_id: 1013,
  };

  const token = getToken();
  const refresh = getTokenRefresh();


  const decoder=jwtDecode(token)
  console.log(decoder)

  console.log(refresh);
  console.log(token);

  useEffect(() => {
    setTimeout(() => {
      axios.post("https://2689-103-141-51-42.in.ngrok.io/api/v1/login", {
          refreshtoken: refresh,
        })
        .then((response) => {
          sessionStorage.setItem("token", response.data.accesstoken);
          sessionStorage.setItem("refreshtoken", response.data.refreshtoken);
          console.log("refrence",response.data.refreshtoken)

          
          
        })
        .catch((err) => {

          console.log("eror", err)
  
          navigate('/');
  
        })
    },45000);
    // eslint-disable-next-line
  }, []);

 

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .post(
        "https://2689-103-141-51-42.in.ngrok.io/api/v1/studentProfile",
        userdata,
        {
          headers: headers,
        }
      )
      .then((res) => {
        
        setData(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };

  return (
    <div className="container log bg-dark text-white">

<input
        type="button"
        className=" btn btn-primary"
        onClick={handleLogout}
        value="Logout"
      />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Si.NO</th>
            <th>Student Detail</th>
            <th> Data </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>student_allocation</td>
            <td> {data.student_allocation_id}</td>
          </tr>
          <tr>
            <td>2</td>
            <td> from_grade_id</td>
            <td> {data.from_grade_id}</td>
          </tr>
          <tr>
            <td>3</td>
            <td> grade_id </td>
            <td> {data.grade_id}</td>
          </tr>
          <tr>
            <td>4</td>
            <td> created_at</td>
            <td> {data.created_at}</td>
          </tr>
          <tr>
            <td>5</td>
            <td> updated_at</td>
            <td> {data.updated_at}</td>
          </tr>
          <tr>
            <td>6</td>
            <td> student_admissions_id </td>
            <td> {data.student_admissions_id}</td>
          </tr>
          <tr>
            <td>7</td>
            <td> student_id</td>
            <td> {data.student_id}</td>
          </tr>
          <tr>
            <td>8</td>
            <td> grade_section_id </td>
            <td> {data.grade_section_id}</td>
          </tr>
          <tr>
            <td>9</td>
            <td> year_id </td>
            <td> {data.year_id}</td>
          </tr>
          <tr>
            <td>10</td>
            <td> mode_of_transport </td>
            <td> {data.mode_of_transport}</td>
          </tr>
          <tr>
            <td>11</td>
            <td> mode_of_transport_allocation </td>
            <td> {data.mode_of_transport_allocation}</td>
          </tr>
          <tr>
            <td>12</td>
            <td> mode_of_transport_touched </td>
            <td> {data.mode_of_transport_touched}</td>
          </tr>
          <tr>
            <td>13</td>
            <td> grade_master_id </td>
            <td> {data.grade_master_id}</td>
          </tr>
          <tr>
            <td>14</td>
            <td> grade_master</td>
            <td> {data.grade_master}</td>
          </tr>
          <tr>
            <td>15</td>
            <td> description </td>
            <td> {data.description}</td>
          </tr>
          <tr>
            <td>16</td>
            <td> section </td>
            <td> {data.section}</td>
          </tr>
          <tr>
            <td>17</td>
            <td> academic_year_id </td>
            <td> {data.academic_year_id}</td>
          </tr>
          <tr>
            <td>18</td>
            <td> student_name </td>
            <td> {data.student_name}</td>
          </tr>
          <tr>
            <td>19</td>
            <td> DOB </td>
            <td> {data.DOB}</td>
          </tr>
          <tr>
            <td>20</td>
            <td> gender </td>
            <td> {data.gender}</td>
          </tr>
          <tr>
            <td>21</td>
            <td> email </td>
            <td> {data.email}</td>
          </tr>
          <tr>
            <td>22</td>
            <td> admission_date </td>
            <td> {data.admission_date}</td>
          </tr>
          <tr>
            <td>23</td>
            <td> previous_school_info </td>
            <td> {data.previous_school_info}</td>
          </tr>
          <tr>
            <td>24</td>
            <td> father_name</td>
            <td> {data.father_name}</td>
          </tr>
          <tr>
            <td>25</td>
            <td> father_occupation </td>
            <td> {data.father_occupation}</td>
          </tr>
          <tr>
            <td>26</td>
            <td> address </td>
            <td> {data.address}</td>
          </tr>
          <tr>
            <td>27</td>
            <td> phone_number </td>
            <td> {data.phone_number}</td>
          </tr>
          <tr>
            <td>28</td>
            <td> alt_phone_number </td>
            <td> {data.alt_phone_number}</td>
          </tr>
          <tr>
            <td>29</td>
            <td> stu_code </td>
            <td> {data.stu_code}</td>
          </tr>
          <tr>
            <td>30</td>
            <td> status </td>
            <td> {data.status}</td>
          </tr>
          <tr>
            <td>31</td>
            <td> admission_no </td>
            <td> {data.admission_no}</td>
          </tr>
          <tr>
            <td>32</td>
            <td> from_grade </td>
            <td> {data.from_grade}</td>
          </tr>
        </tbody>
      </table>
      <br />
      
      <TimeoutLogic />
    </div>
  );
}

export default Dashboard;
