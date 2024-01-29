/* January 10, 2024 */
import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import data from "../../mockData/CourselistCard.json";
import { BsThreeDotsVertical } from "react-icons/bs";

const CourseListCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getCourse");
    setCourses(result.data);
  };

  const { courselist } = data;

  return (
    <>
      <div className="w-full">
        <div className="">
          <div className="2xl:w-[100%] xl:w-[1244px] w-[90%] mt-10 flex flex-col lg:w-[100%] lg:mt-5 items-start">
            <div
              to="/courseoverview"
              className=" m-auto w-[90%] flex justify-between"
            >
              <div className="text-black lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[1.2rem] flex items-center">
                <p className="ml-5 lg:font-bold text-[34px] text-left">
                  Course List
                </p>
              </div>
              <button className="flex items-center ml-40 ">
                <IoAdd className="lg:text-[2rem] text-black " />
                <BsThreeDotsVertical className="" />
              </button>
            </div>
            <div className="w-[86%] bg-[#5e665b] h-[.3vh] m-auto items-center mb-10 lg:rounded-lg pl-0"></div>
            <div className="mb-10 cursor-pointer">
              <div className="ml-40 bg-[#ffffff] border-dashed border-2 text-white lg:font-bold h-[5vh] lg:h-[279px] lg:w-[279px] w-[279px] flex items-center justify-center rounded-l-sm lg:rounded-l-md rounded-r-sm lg:rounded-r-md">
                <span>
                  <IoAdd className="lg:text-[4rem] text-gray-300" />
                </span>
              </div>
            </div>
          </div>
          <footer className="flex justify-center py-20">
            <div>
              <p className="text-[#4D9349] font-medium mt-10">
                All Rights Reserved | Copyright 2024
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CourseListCard;
