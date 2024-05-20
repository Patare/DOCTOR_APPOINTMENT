// import React from 'react'
// import { Form, Input, message ,Button} from "antd";
// // import { Form, Input, Button, message } from 'antd';
// import "../style/register.css";
// import { useNavigate, Link } from "react-router-dom";
// import axios from'axios'
// // import { useDispatch } from 'react-redux';
// // import { showLoading,hideLoading } from '../Redux/Features/alertSlice';

// function Login() {
//   const navigate = useNavigate();
// // const dispatch=useDispatch()

//   const onFinishHandle = async(values) => {
//     try{
//     //  dispatch(showLoading())
//      const res = await axios.post('http://localhost:3001/api/v1/user/login',values)
//      window.location.reload()
//     //  dispatch(hideLoading())
//      console.log(res)
//      if(res.data.success){
//       localStorage.setItem('token',res.data.token)
//       message.success('Login Successfully')
//       navigate('/')
//      }
//      else{
//       message.error(res.data.message)
//      }
//     } catch(error){
//       // dispatch(hideLoading())
//       console.log(error)
//       message.error("Something went wrong")      }
// };
// return (
//       <div>
//         <div className="form-container">
//           <Form layout="vertical" onFinish={onFinishHandle} className="register-form">
//             <h3 className="text-center">Login Form</h3>
//             <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
//               <Input type="email" />
//             </Form.Item>
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[{ required: true, message: 'Please input your password!' }]}
//             >
//               <Input type="password" />
//             </Form.Item>
  
//             <Link to="/register" className="m-2">
//               Not a user? Register Here
//             </Link>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Login
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     );
// }

// export default Login







import React from "react";
import "../style/register.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from '../Redux/Features/alertSlice';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:3001/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container ">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login From</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;