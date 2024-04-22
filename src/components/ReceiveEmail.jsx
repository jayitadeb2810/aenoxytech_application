import React from "react"
import Navbar from "./Navbar"
import EmailIcon from "@mui/icons-material/Email"
import CheckIcon from "@mui/icons-material/Check"
import { useState } from "react"
import { Footer } from "./Footer"
import axiosConfig from "../config/axiosConfig"

const ReceiveEmail = () => {
  const [data, setData] = useState("")
  console.log(data)

  const emailResendHandler = async () => {
    try {
      await axios.get(
        "/api/J3/emailresend",
        {
          headers: {
            Authorization:
              localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  return (
    <div>
      <Navbar
        data={data}
        setData={setData}
      />
      <div className=" mt-[80px] flex justify-center items-center flex-col xl:text-[18px] text-[15px] xl:font-[600] font-[400] text-gray-500  xl:px-0 px-[15%]  ">
        <h3 className=" xl:font-[700] font-[500] xl:text-[35px] text-[20px] tracking-tight text-black">
          Please varify your email...
        </h3>
        <div className=" relative h-[120px] w-[130px] mt-[15px] z-10">
          <EmailIcon
            className=" text-gray-300 absolute bottom-0 left-0"
            sx={{ fontSize: 120 }}
          />
          <div className=" h-[45px] w-[45px] border-[5px] border-white rounded-[50%] absolute right-0 top-0 flex justify-center items-center bg-[#F33A6A] ">
            <CheckIcon
              className=" text-white "
              sx={{ fontSize: 30 }}
            />
          </div>
        </div>
        <p className=" text-center ">
          Please varify your email address. We
          have sent a confirmation email to:
        </p>
        <h3 className=" text-[20px] font-[700] mt-[30px] text-black">
          {data?.email}
        </h3>
        <p className=" text-center my-[30px]">
          Click the confirmation link in the email
          to begin using Dribbble.
        </p>
        <p className="  text-center">
          Didn't receive the email? Check your
          spam folder, it may have been caught by
          a filter. If
          <br />
          you still don't see it, you can
          <span
            className="text-[#F33A6A] ms-[5px] cursor-pointer"
            onClick={emailResendHandler}
          >
            resend the confirmation email
          </span>
        </p>
        <p className=" t text-center mt-[30px] mb-[80px]">
          Wrong email address?
          <span className="text-[#F33A6A] ms-[8px]   cursor-pointer">
            Change it{" "}
          </span>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default ReceiveEmail
