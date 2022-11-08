// import axios from "axios";
// import { Navigate, Route } from "react-router-dom";

// export const isAuth = () => {
//   axios
//     .get("https://28eb-103-141-51-42.in.ngrok.io/api/v1/login")
//     .then((response) => {
//       console.log(response.status ===2000);
//       return response.status === 2000;
//     });

//   const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuth() === true ? (
//             <Component {...props} />
//           ) : (
//             <Navigate
//               to={{
//                 pathname: "/",
//                 state: { from: props.location },
//               }}
//             />
//           )
//         }
//       />
//     );
//   };
// };

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth,value }) {
  
 return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;


