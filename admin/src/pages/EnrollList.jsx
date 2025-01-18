import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App.jsx';
import { toast } from 'react-toastify';

function EnrollList({ token }) {
  //State
  const [list, setList] = useState([]);
  //fetchList a async fn
  // Fetch enrollment data
  const fetchEnrollData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/user/enrollment`, { headers: { token } });
      console.log('Enrollment Data:', response); // Add this for debugging
      setList(response.data.enrollment.reverse());
    } catch (error) {
      console.error('Error fetching data:', error); // Log error
      toast.error("Failed to fetch enrollments. Please try again.");
    }
  };


  useEffect(() => {
    fetchEnrollData();
  }, []);

  const removeEnroll = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/user/remove', { id }, { headers: { token } });
      // console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchEnrollData();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <>
      <p className="mb-2">All Enroll Details</p>
      <div className="flex flex-col gap-2">
        {/* --------------- List Table Title ------------------ */}
        <div className="flex justify-between md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b className='hidden md:block'>Enroll Id</b>
          <b>Name</b>
          <b className='hidden md:block'>Phone</b>
          <b>Stream</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ----------------- Product List ------------------------ */}
        {list.length > 0 ? (
          list
            .filter((item) => item.enrollment.fill) // Filter items where enrollment.fill is true
            .map((item, index) => (
              <div
                className="flex justify-between md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm"
                key={index}
              >
                <p className="hidden md:block">{item._id}</p>
                <p>{item.name}</p>
                <p className="hidden md:block">{item.enrollment.phone}</p>
                <p>{item.enrollment.stream}</p>
                <p
                  onClick={() => removeEnroll(item._id)}
                  className="text-right md:text-center cursor-pointer text-lg"
                >
                  X
                </p>
              </div>
            ))
        ) : (
          <p>No enrollments found.</p>
        )}


      </div>
    </>
  )
}

export default EnrollList