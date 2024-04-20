import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Signup from "./components/Signup"
import Welcome from "./components/Welcome"
import RoleUpload from "./components/RoleUpload"
import ReceiveEmail from "./components/ReceiveEmail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Signup />}
          />
          <Route
            path="/welcome"
            element={<Welcome />}
          />
          <Route
            path="/receiveemail"
            element={<ReceiveEmail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// {
//   image ? (
//     <div className=" rounded-[50%] overflow-hidden h-[238px]  w-[238px] ">
//       <img
//         className=" h-full w-full object-cover"
//         src={image}
//         alt="userImage"
//       />
//     </div>
//   ) : (
//     <div className=" rounded-[50%] relative h-[230px]  w-[230px] border-dashed border-[4px] border-gray-300">
//       <CameraEnhanceIcon
//         className=" text-gray-500 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 "
//         sx={{
//           fontSize: 30,
//         }}
//       />
//     </div>
//   )
// }
