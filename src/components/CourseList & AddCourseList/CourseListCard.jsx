import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";

// January 29, 2024 - Cedrick

const CourseListCard = () => {
  const [courses, setCourses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    // Add your form fields here
    title: "",
    description: "",
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const result = await axios.get("http://localhost:8080/getCourse");
      setCourses(result.data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add your form submission logic here
      // Example: send data to the server using axios
      await axios.post("http://localhost:8080/createCourse", formData);

      // Reload courses and close the popup after form submission
      loadCourses();
      closePopup();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
                <BsThreeDotsVertical className="lg:text-[2rem] text-black " />
                <BsThreeDotsVertical className="" />
              </button>
            </div>
            <div className="w-[86%] bg-[#5e665b] h-[.3vh] m-auto items-center mb-10 lg:rounded-lg pl-0"></div>
            <div className="mb-10 cursor-pointer">
              {/* January 30, 2024 - Cedrick*/}
            <div className="ml-40 bg-[#ffffff] border-dashed border-2 text-white lg:font-bold h-[10vh] lg:h-[279px] lg:w-[279px] w-[279px] flex items-center justify-center rounded-l-sm lg:rounded-l-md rounded-r-sm lg:rounded-r-md">
            <button onClick={openPopup}>
            <IoAdd className="lg:text-[4rem] text-gray-300" />
          </button>
        </div>
      </div>
      </div>

{/* Popup Form */}
{showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded h-[70%] w-[60%] shadow-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Course Title"
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Course Description"
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button
              onClick={closePopup}
              className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
          </div>
          <footer className="flex justify-center py-20">
            <div>
              <p className="text-[#4D9349] font-medium mt-10">
                All Rights Reserved | Copyright 2024
              </p>
            </div>
          </footer>
        </div>
    </>
  );
};

export default CourseListCard;
