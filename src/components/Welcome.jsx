import React from "react"
import { useState } from "react"
import FileUpload from "./FileUpload"
import RoleUpload from "./RoleUpload"

const Welcome = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [image, setImage] = useState(null)
  const [location, setLocation] = useState(null)

  const handleNext = () => {
    setPageIndex(pageIndex + 1)
  }

  const handlePrevious = () => {
    setPageIndex(pageIndex - 1)
  }

  return (
    <div className=" flex xl:flex-row flex-col">
      <div className=" xl:w-[10%] w-full pt-[60px] ps-[40px]">
        <img
          className="w-[100px] h-[30px] "
          src="/redLogo.jpg"
          alt="logoImage"
        />
      </div>
      <div className=" flex-grow flex justify-center items-center  ">
        {pageIndex === 1 && (
          <FileUpload
            handleNext={handleNext}
            image={image}
            setImage={setImage}
            location={location}
            setLocation={setLocation}
          />
        )}
        {pageIndex === 2 && (
          <RoleUpload
            handlePrevious={handlePrevious}
            image={image}
            location={location}
          />
        )}
      </div>
    </div>
  )
}

export default Welcome
