/*January 10, 2024*/
import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

import { Link } from "react-router-dom";

//import mock data
import data from "../../mockData/CourselistCard.json";

const CourseListCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  const [courses, setCourses] = useState([]);

  /* january 172024*/
  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getCourse");
    setCourses(result.data);
  };

  const { courselist } = data;
       
          <div className=" xl:w-[1244px] w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[50%] lg:m-auto lg:mt-5 items-center gap-5">
            {/*January 15 2024, API connection of frontend to backend can fetch data from the backend*/}
            <Link to ="/courseoverview">
            <div className="text-black lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center m-5">
              <p className="lg:font-bold">Course List</p>
            </div>
            {courselist.map((course, idx) => {
              return (
    <>
      <div className="w-full">
        <div className="">
          <div className="xl:w-[1244px] w-[90%] mt-10 flex flex-col lg:w-[50%] lg:mt-5 items-start gap-5">
            <Link to="/courseoverview">
              <div className="text-black lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[1.2rem] w-full flex justify-start">
                <p className=" ml-5 lg:font-bold text-[34px] text-left">Course List</p>
              </div>
            </Link>

            <Link to="/AddNewCourse">
              <div
                className=" h-[10vh] mb-10 flex w-[50%] justify-center lg:w-[30vw] cursor-pointer"
              >
                <div className="bg-[#87D275] w-[20%]  flex items-center justify-center h-[5vh] lg:h-[8vh] rounded-l-sm lg:rounded-l-md">
                  <span>
                    <IoAdd className="lg:text-[2rem] text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <footer className="flex justify-center py-20">
            <div>
              <p className="text-[#4D9349] font-medium">
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
// /*January 10, 2024*/