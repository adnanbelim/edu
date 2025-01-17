import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Courses = () => {
  const { search, filteredCourses, setFilteredCourses, courses, loading } = useContext(ShopContext);
  const [sortType, setSortType] = useState('relevant');
  const [selectedCourse, setSelectedCourse] = useState(null); // For storing the selected course for the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // For managing popup visibility

  useEffect(() => {
    // Filter courses based on the search value
    if (courses.length > 0) {
      const filtered = courses.filter((course) =>
        course.stream.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCourses(filtered);
      // console.log(filtered);
    }
  }, [search, courses]); // Depend on both `search` and `courses`

  useEffect(() => {
    // Sort courses based on the selected sort type
    if (filteredCourses.length > 0) {
      let sortedCourses = [...filteredCourses];
      if (sortType === 'A-Z') {
        sortedCourses.sort((a, b) => a.stream.localeCompare(b.stream));
      }
      setFilteredCourses(sortedCourses);
    }
  }, [sortType]); // Remove `filteredCourses` from the dependency array


  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t">
      <div>
        <div className="mb-4 flex justify-between items-center">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm p-2"
          >
            <option value="relevant">Sort by: Relevance</option>
            <option value="A-Z">Sort by: Alphabetical Order</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            // Show loader while fetching courses
            <div className="flex justify-center items-center">
              <div className="text-center">
                <img src={assets.loader} alt="Loading" className="w-32 mx-auto mb-4" />
                <p className="text-lg">Loading Courses...</p>
              </div>
            </div>
          ) : filteredCourses.length === 0 ? (
            // Show message if no courses are found
            <p>No courses found...</p>
          ) : (
            // Render courses if available
            filteredCourses.map((course) => (
              <div key={course._id} className="border p-4 cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={course.image[0]}
                    alt={course.stream}
                    className="w-full h-48 object-cover rounded-md bg-gray-200 hover:opacity-75"
                  />
                </div>
                <p className="text-sm mt-3">{course.stream}</p>
                <button
                  onClick={() => handleViewDetails(course)}
                  className="text-gray-500 bg-transparent hover:text-blue-600 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  View Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popup Window */}
      {isPopupOpen && selectedCourse && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-[#0096c7] p-6 rounded-lg max-w-lg w-full">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-[#0096c7] hover:text-black text-3xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">{selectedCourse.stream}</h2>
            <p className="mb-4 text-white">{selectedCourse.description}</p>
            {selectedCourse.list && selectedCourse.list.length > 0 && (
              <ul className="list-disc pl-6 text-white">
                {selectedCourse.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
