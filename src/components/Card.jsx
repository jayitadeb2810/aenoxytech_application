import React from "react"
import CheckIcon from "@mui/icons-material/Check"

const Card = ({
  id,
  image,
  title,
  description,
  isChecked,
  handleCheckboxChange,
}) => {
  return (
    <div className=" w-full flex justify-center items-center md:w-1/2 xl:w-1/3 p-4">
      <div
        key={id}
        className={`border-[2px]  w-[350px] h-[350px] rounded-[20px] flex flex-col   justify-center items-center relative
      ${
        isChecked
          ? " border-[#F33A6A] border-[2px]"
          : "border-gray-300"
      } `}
      >
        <div className=" absolute mb-[50px] flex flex-col justify-center items-center">
          <img
            className=" mb-[20px]"
            src={image}
            alt="cardImageFirst"
            style={{
              width: "220px",
              height: "130px",
            }}
          />
          <div className="w-[80%]  text-[20px] font-Poppins font-bold text-center">
            {title}
          </div>
          {isChecked && (
            <p className=" w-[90%] font-Poppins text-gray-500 font-medium text-[15px] my-[30px]">
              {description}
            </p>
          )}
        </div>

        <div className=" flex items-center justify-center mt-[30px] absolute bottom-[45px] ">
          <label
            htmlFor={`checkbox-${id}`}
            className=" relative"
          >
            <input
              className=" cursor-pointer absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] checked:bg-[#F33A6A] w-[30px] h-[30px] rounded-[50%]  checked:border-transparent focus:outline-none appearance-none  border-[1px] border-gray-300 border-solid"
              type="checkbox"
              id={`checkbox-${id}`}
              checked={isChecked}
              onChange={() =>
                handleCheckboxChange(id)
              }
            />
            {isChecked && (
              <CheckIcon
                className="  absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]"
                sx={{
                  fontSize: 20,
                  color: "white",
                }}
              />
            )}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Card
