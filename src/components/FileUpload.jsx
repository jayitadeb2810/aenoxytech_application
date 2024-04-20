import React from "react"
import { useState } from "react"
import { useRef } from "react"
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const FileUpload = ({
  handleNext,
  image,
  setImage,
  location,
  setLocation,
}) => {
  const fileInputRef = useRef()

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className=" mt-[30px] xl:mt-[100px] md:ml-0 ml-[15px]">
      <h1 className=" text-[30px] font-Poppins font-semibold mb-[10px]">
        Welcome! Let's Create Your Profile
      </h1>
      <p className=" font-Poppins mb-[20px] text-gray-500 font-medium text-[15px]">
        Let others get to know you better. You can
        do these later
      </p>
      <div className=" text-[20px] font-Poppins font-bold mb-[20px]">
        Add an Avatar
      </div>
      <div className=" flex xl:mb-[70px] xl:flex-row flex-col ">
        <div
          className={` rounded-[50%] overflow-hidden relative h-[230px]  w-[230px] ${
            image
              ? "border-transparent"
              : "border-dashed border-[4px] border-gray-300"
          }`}
        >
          {image ? (
            <img
              className=" h-full w-full object-cover z-20"
              src={image}
              alt="userImage"
            />
          ) : (
            <CameraEnhanceIcon
              className=" text-gray-500 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 "
              sx={{
                fontSize: 30,
              }}
            />
          )}
        </div>
        <div className=" flex flex-col justify-start xl:ms-[60px] xl:h-[230px]  xl:relative">
          <div
            className="mt-[30px] border-[2px] hover:bg-gray-100 cursor-pointer rounded-[10px] text-[15px] border-gray-300 h-[48px] w-[165px] flex justify-center items-center font-bold "
            onClick={() =>
              fileInputRef.current.click()
            }
          >
            Choose image
          </div>
          <div className=" flex mb-[25px] mt-[20px] justify-start cursor-pointer text-gray-400 text-[15px] xl:absolute xl:m-0 xl:top-[50%] xl:-translate-y-[50%] whitespace-nowrap">
            <ChevronRightIcon
              sx={{
                fontSize: 24,
              }}
            />
            <p className=" font-bold">
              Or choose one from our defaults
            </p>
          </div>
        </div>
        <input
          className=" hidden"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
      </div>
      <div className=" text-[20px] font-Poppins font-bold mb-[20px]">
        Add your location
      </div>
      <input
        type="text"
        className=" focus:outline-none font-Poppins font-semibold text-[15px]"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      />
      <hr className=" border-[1px] border-gray-300 md:w-full w-[95%] mt-[10px]" />
      <button
        className="my-[40px] bg-[#F33A6A] disabled:opacity-[0.4] text-white text-[18px] font-Poppins font-bold px-[100px] py-[12px] rounded-[10px]"
        // disabled={!(image && location)}
        disabled={!location}
        onClick={handleNext}
      >
        Next
      </button>{" "}
    </div>
  )
}

export default FileUpload
