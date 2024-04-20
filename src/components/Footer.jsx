import React from "react"
import { useState } from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import CopyrightIcon from "@mui/icons-material/Copyright"

export const Footer = () => {
  const [printedItems, setPrintedItems] =
    useState([])

  const columnData = [
    {
      heading: "For designers",
      items: ["Item 1", "Item 2"],
    },
    {
      heading: "Hire designers",
      items: ["Item 3", "Item 4", "Item 5"],
    },
    {
      heading: "Brands",
      items: [
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
      ],
    },
    {
      heading: "Companies",
      items: ["Item 10", "Item 11"],
    },
    {
      heading: "Directories",
      items: [
        "Item 12",
        "Item 13",
        "Item 14",
        "Item 15",
        "Item 16",
      ],
    },

    {
      heading: "Design assets",
      items: ["Item 17", "Item 18"],
    },
  ]

  return (
    <div className=" w-full p-[60px] flex flex-col bg-gray-50">
      <div className="flex flex-col xl:flex-row gap-[22px]">
        <div className="xl:w-[28%]  p-4 flex flex-col justify-center items-center xl:justify-start xl:items-start gap-y-[20px]">
          <img
            className="w-[100px] h-[30px]"
            src="/redLogo.jpg"
            alt="LogoImage"
          />
          <p className=" lx:w-full w-[60%] xl:text-start text-center ">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti blanditiis
            labore, nihil magnam
          </p>
          <div className=" flex justify-between items-center gap-x-[10px]">
            <FacebookIcon
              sx={{
                fontSize: 20,
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: 20,
              }}
            />
            <PinterestIcon
              sx={{
                fontSize: 20,
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: 20,
              }}
            />
          </div>
        </div>
        <div className="flex-grow  ">
          <div className="flex flex-wrap ">
            {/* Map over each column data */}
            {columnData.map((column, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 "
              >
                {/* Column content */}
                <div className=" p-4">
                  {/* Heading */}
                  <h2 className="text-sm font-bold mb-4">
                    {column.heading}
                  </h2>
                  {/* List of data */}
                  <ul>
                    {/* Map over items */}
                    {column.items.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="py-1 text-xs"
                        >
                          {item}
                        </li>
                      )
                    )}
                    {/* If items length is less than 3, include next element in the same column */}
                    {column.items.length < 3 &&
                      columnData[index + 1] && (
                        <>
                          <h2 className="text-sm font-bold mt-[20px]">
                            {
                              columnData[
                                index + 1
                              ].heading
                            }
                          </h2>
                          {columnData[
                            index + 1
                          ].items.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className="py-1 text-xs"
                              >
                                {item}
                              </li>
                            )
                          )}
                        </>
                      )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className=" border-[1px] border-gray-200 w-full my-[50px]   " />
      <div className=" flex items-center justify-between">
        <div className=" flex items-center sm:justify-between justify-between text-[12px] font-semibold">
          <CopyrightIcon
            sx={{
              fontSize: 13,
            }}
          />
          <p className=" ms-[8px]">
            2024 Dribbble. All rights reserved
          </p>
        </div>
        <p className=" text-[13px] ">
          {" "}
          <span className="font-bold mr-[6px]">
            2M
          </span>
          shots Dribbled
        </p>
      </div>
    </div>
  )
}
