import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Component/Layout';
import { Row, Col } from "antd";
import DoctorList from "../Component/DoctorList";

function Home() {
  // Fetch user data
  const [userData, setUserData] = useState([]);
  
  const getUserData = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/user/getUserData',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(res.data);
      setUserData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
   

    <Layout>
     <h1 className="text-center">Home Page</h1>
     <Row>
     {Array.isArray(userData) && userData.map((doctor) => <DoctorList doctor={doctor} />)}

     </Row>
   </Layout>
</>


   
  );
}

export default Home;





{/* <Layout>
<h1 className="text-center">Home Page</h1>
{userData && (
  <Row justify="center">
    <Col span={24}>
      <h4>Name: {userData.name}</h4>
      <h4>Email: {userData.email}</h4>
    </Col>
  </Row>
)}
</Layout> */}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "./../Component/Layout";
// import { Row } from "antd";
// import DoctorList from "../Component/DoctorList";
// const HomePage = () => {
//   const [doctors, setDoctors] = useState([]);
//   // login user data
//   const getUserData = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3001/api/v1/user/getUserData",

//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);
//   return (
//     <Layout>
//       <h1 className="text-center">Home Page</h1>
//       <Row>
//         {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
//       </Row>
//     </Layout>
//   );
// };

// export default HomePage;