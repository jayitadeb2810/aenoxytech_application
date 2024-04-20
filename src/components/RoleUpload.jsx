import React from "react"
import axios from "axios"
import Card from "./Card"
import localData from "../data.json"
import { useState } from "react"
import { useEffect } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { useNavigate } from "react-router-dom"

const RoleUpload = ({
  handlePrevious,
  image,
  location,
}) => {
  const [cardsData, setCardsData] = useState([])
  const [submitDisabled, setSubmitDisabled] =
    useState(true)

  useEffect(() => {
    setCardsData(localData)
  }, [])
  const navigate = useNavigate()

  const handleCheckboxChange = (cardId) => {
    const updatedCardsData = cardsData.map(
      (card) => {
        if (card.id === cardId) {
          return {
            ...card,
            isChecked: !card.isChecked,
          }
        }
        return card
      }
    )
    setCardsData(updatedCardsData)

    setSubmitDisabled(
      updatedCardsData.every(
        (card) => !card.isChecked
      )
    )
  }

  const handlesubmit = async () => {
    const role = cardsData
      .filter((card) => card.isChecked)
      .map((card) => card.label)
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/J3/profile/create",
        {
          image,
          location,
          role,
        },
        {
          headers: {
            Authorization:
              localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      )

      console.log(data)
      navigate("/receiveemail")
    } catch (err) {
      console.log(
        "Error sending data to the server:"
      )
    }
  }

  return (
    <div className="flex flex-col">
      <div className="xl:pt-[60px] pt-[30px] xl:ps-0 ps-[40px]">
        <div
          className="  flex justify-center items-center w-[50px] h-[50px] rounded-md bg-gray-200 "
          onClick={handlePrevious}
        >
          <ChevronLeftIcon
            className=" text-gray-700"
            sx={{
              fontSize: 30,
            }}
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center sm:mt-0 mt-[20px]">
        <h1 className=" text-[30px] font-Poppins font-semibold sm:ml-0 ml-[20px]  ">
          What brings you to Dribbble?
        </h1>
        <p className=" mt-[20px] font-Poppins text-gray-500 font-medium text-[15px] sm:ml-0 ml-[20px]">
          Select the options that best describe
          you. Don't worry you can explore other
          options later
        </p>
        <div className="  flex flex-wrap justify-center items-center w-full  px-[auto] mt-[70px]">
          {cardsData.map((card) => (
            <Card
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              handleCheckboxChange={
                handleCheckboxChange
              }
              isChecked={card.isChecked || false}
            />
          ))}
        </div>
        <button
          className="my-[40px] bg-[#F33A6A] text-white text-[18px] disabled:opacity-[0.4] font-Poppins font-bold px-[100px] py-[12px] rounded-[10px]"
          disabled={submitDisabled}
          onClick={handlesubmit}
        >
          Finish
        </button>
      </div>
    </div>
  )
}

export default RoleUpload
