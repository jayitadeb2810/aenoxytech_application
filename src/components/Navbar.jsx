import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import axiosConfig from "../config/axiosConfig"

const Navbar = ({ data, setData }) => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make API call using Axios
        const res = await axiosConfig.get(
          "/api/J3/profile",
          {
            headers: {
              Authorization:
                localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          },
          { withCredentials: true }
        )
        console.log(res)
        setData(res?.data?.user)
      } catch (error) {
        console.log(
          error?.response?.data?.message
        )
      }
    }
    fetchData()
  }, [])

  return (
    <div className=" w-full h-[100px]  relative ">
      <div className="  h-full flex flex-col mx-[40px] justify-center">
        <div className=" flex justify-between">
          <img
            className=" w-[100px] h-[30px]"
            src="/redLogo.jpg"
            alt="redLogo"
          />

          <button
            className=" focus:outline-none xl:hidden block  "
            onClick={toggleMenu}
          >
            <MenuIcon
              sx={{
                fontSize: 35,
              }}
            />
          </button>
          <div
            className={`xl:flex-grow xl:flex xl:justify-between xl:items-center xl:ms-[40px]  hidden`}
          >
            <ul className=" flex  w-[55%] 2xl:w-[42%] justify-between items-center">
              <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                Inspiration
              </li>
              <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                Find Work
              </li>
              <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                Learn Design
              </li>
              <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                Go Pro
              </li>
              <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                Hire Designers
              </li>
            </ul>
            <div className="  w-[32%] 2xl:w-[22%] flex justify-between items-center">
              <div className=" w-[140px] h-[40px] bg-[#F2F2F2] rounded-[8px]  ">
                <div className=" w-full h-full flex items-center ">
                  <SearchIcon
                    sx={{
                      fontSize: "22px",
                      color: "#5C5C5C",
                      marginLeft: "14px",
                    }}
                  />
                  <div className="w-[242px] h-[19px]  text-[14px] leading-[18.2px] font-IBMPlex text-[#5C5C5C] font-medium ml-[14px]">
                    Search
                  </div>
                </div>
              </div>
              <div className=" relative h-[30px] w-[30px]">
                <BusinessCenterIcon
                  className=" text-gray-400 absolute top-0 left-0"
                  sx={{ fontSize: 25 }}
                />
                <div className=" h-[15px] w-[15px] border-[2px] border-white rounded-[50%] absolute right-0 bottom-0 flex justify-center items-center bg-gray-600 ">
                  <CloseIcon
                    className=" text-white "
                    sx={{ fontSize: 12 }}
                  />
                </div>
              </div>
              <div className=" h-[40px] w-[40px] rounded-[50%] overflow-hidden  ">
                <img
                  src={data?.image?.url}
                  className="h-full w-full object-cover"
                  alt="userImage"
                />
              </div>
              <button className=" bg-[#F33A6A] text-white text-[15px] font-Poppins font-bold px-[15px] py-[10px] rounded-[10px]">
                Upload
              </button>
            </div>
          </div>
          <div
            className={`fixed top-0 right-0 bg-gray-100 z-20 h-full w-1/2 justify-center items-center ${
              isMenuOpen ? "flex" : "hidden"
            } xl:hidden`}
          >
            <button
              className=" focus:outline-none fixed top-[40px] right-[40px] "
              onClick={toggleMenu}
            >
              <CloseIcon
                sx={{
                  fontSize: 35,
                }}
              />
            </button>
            <div className=" flex flex-col justify-center items-center gap-y-[20px]">
              <ul className=" flex flex-col  justify-center items-center gap-y-[20px]">
                <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                  Inspiration
                </li>
                <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                  Find Work
                </li>
                <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                  Learn Design
                </li>
                <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                  Go Pro
                </li>
                <li className=" font-Poppins text-[18px] font-semibold text-gray-500">
                  Hire Designers
                </li>
              </ul>
              <div className="  flex flex-col  justify-center items-center gap-y-[20px]">
                <div className=" relative h-[30px] w-[30px]">
                  <BusinessCenterIcon
                    className=" text-gray-400 absolute top-0 left-0"
                    sx={{ fontSize: 25 }}
                  />
                  <div className=" h-[15px] w-[15px] border-[2px] border-white rounded-[50%] absolute right-0 bottom-0 flex justify-center items-center bg-gray-600 ">
                    <CloseIcon
                      className=" text-white "
                      sx={{ fontSize: 12 }}
                    />
                  </div>
                </div>
                <div className=" h-[40px] w-[40px] rounded-[50%] overflow-hidden  ">
                  <img
                    src={data?.image?.url}
                    className="h-full w-full object-cover"
                    alt="userImage"
                  />
                </div>
                <button className=" bg-[#F33A6A] text-white text-[15px] font-Poppins font-bold px-[15px] py-[10px] rounded-[10px]">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-[1px] border-gray-100 absolute bottom-0 w-full  " />
    </div>
  )
}

export default Navbar
