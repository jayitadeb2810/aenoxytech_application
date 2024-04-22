import React, { useState } from "react"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import ReportProblemIcon from "@mui/icons-material/ReportProblem"
import { useNavigate } from "react-router-dom"
import axiosConfig from "../config/axiosConfig"

const Signup = () => {
  const navigate = useNavigate()
  const [signupData, setsignupData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    agreed: false,
    error: null,
  })
  const {
    name,
    username,
    email,
    password,
    agreed,
    error,
  } = signupData

  const onChange = (e) => {
    if (e.target.name === "agreed") {
      setsignupData({
        ...signupData,
        [e.target.name]: e.target.checked,
      })
    } else {
      setsignupData({
        ...signupData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axiosConfig.post(
        "/api/J3/signup",
        {
          name,
          username,
          email,
          password,
          agreed,
        },
        { withCredentials: true }
      )
      localStorage.setItem("token", data?.token)

      console.log(data)
      navigate("/welcome")
      // You can redirect the user to another page or display a success message here
    } catch (err) {
      console.log(err)
      setsignupData({
        ...signupData,
        error: err?.response?.data?.message,
      })
    }
  }

  return (
    <div className=" flex  lg:justify-between lg:flex-row flex-col ">
      <img
        className="lg:w-[35%] lg:h-[100vh] w-full h-[100vh]"
        src="/frontpageImage.jpg"
        alt="frontPageImage"
        // style={{
        //   width: "600px",
        //   height: "100vh",
        // }}
      />
      <div className=" flex xl:flex-row flex-col xl:justify-center xl:items-start justify-center items-center xl:mt-[60px] md:h-[100vh] xl:h-[calc(100%-60px)]  ">
        <form
          className=" xl:ms-auto  xl:w-[50%] w-[70%] "
          onSubmit={(e) => onSubmit(e)}
        >
          <div className=" text-[30px] font-Poppins  font-bold mb-[25px]">
            Sign Up to Dribbble
          </div>
          {error !== null && (
            <div className=" flex justify-start items-center mb-[30px] ps-[12px]">
              <FiberManualRecordIcon
                sx={{
                  fontSize: 10,
                  color: "#ce6262",
                }}
              />
              {error === "Username" && (
                <div className=" text-[#ce6262] font-semibold font-Poppins text-[18px]  ps-[12px] ">
                  This username is already taken
                </div>
              )}
              {error === "Email" && (
                <div className=" text-[#ce6262] font-semibold font-Poppins text-[18px]  ps-[12px] ">
                  This email is already registered
                </div>
              )}
              {error === "Emptyfield" && (
                <div className=" text-[#ce6262] font-semibold font-Poppins text-[18px]  ps-[12px] ">
                  Some fields are empty, enter all
                  the fields
                </div>
              )}
            </div>
          )}
          <div className=" grid grid-rows-1 gap-y-[45px] ">
            <div className=" grid grid-cols-2 gap-x-[20px]">
              <div className=" flex flex-col">
                <label
                  className=" text-[20px] font-Poppins font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className=" bg-gray-200 rounded-[10px] h-[50px] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className=" flex flex-col">
                <div className=" flex items-center justify-start">
                  {error === "Username" && (
                    <ReportProblemIcon
                      sx={{
                        fontSize: 23,
                        color: "#ce6262",
                        marginRight: "6px",
                      }}
                    />
                  )}

                  <label
                    className=" text-[20px] font-Poppins font-bold"
                    htmlFor="username"
                  >
                    Username
                  </label>
                </div>
                {error === "Username" ? (
                  <input
                    className=" bg-[#fcf2f2] rounded-[10px] h-[50px]  text-[#ce6262] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => onChange(e)}
                  />
                ) : (
                  <input
                    className=" bg-gray-200 rounded-[10px] h-[50px] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => onChange(e)}
                  />
                )}
              </div>
            </div>
            <div className=" flex flex-col">
              <div className=" flex items-center justify-start">
                {error === "Email" && (
                  <ReportProblemIcon
                    sx={{
                      fontSize: 23,
                      color: "#ce6262",
                      marginRight: "6px",
                    }}
                  />
                )}

                <label
                  className=" text-[20px] font-Poppins font-bold"
                  htmlFor="email"
                >
                  email
                </label>
              </div>
              {error === "Email" ? (
                <input
                  className=" bg-[#fcf2f2] rounded-[10px] h-[50px]  text-[#ce6262] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              ) : (
                <input
                  className=" bg-gray-200 rounded-[10px] h-[50px] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              )}
            </div>
            {/* <div className=" flex flex-col">
              <label
                className=" text-[20px] font-Poppins font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" bg-gray-200 rounded-[10px] h-[50px] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div> */}
            <div className=" flex flex-col">
              <label
                className=" text-[20px] font-Poppins font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" bg-gray-200 rounded-[10px] h-[50px] ps-[22px] focus:outline-none mt-[10px] text-[18px] font-bold"
                type="password"
                name="password"
                id="password"
                placeholder="6+ Characters"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="  mt-[30px]">
            <input
              className=" w-[25px] h-[25px]"
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={(e) => onChange(e)}
            />
            <label className=" ms-[10px] text-[18px] font-Poppins font-medium text-gray-500">
              Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
              Fugiat, molestiae quod itaque
              laboriosam quasi blanditiis
              explicabo
            </label>
          </div>
          <button className="mt-[30px] bg-[#F33A6A] text-white text-[18px] font-Poppins font-bold px-[60px] py-[15px] rounded-[10px]">
            Create Account
          </button>
        </form>
        <div className="  font-Poppins text-[18px] font-medium xl:mr-[40px] mr-0 xl:mt-0 mt-[15px]  ">
          Already a member?
          <span className=" text-[#4b4bc4] ml-[10px]">
            Sign in
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signup
