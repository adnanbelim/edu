import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App.jsx';
import { toast } from 'react-toastify';

function List({ token }) {
  const [list, setList] = useState([]);

  // Fetch list of courses
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/course/list');
      if (response.data.success) {
        setList(response.data.course.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove a course
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/course/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        setList((prevList) => prevList.filter(course => course._id !== id));  // Remove course locally
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Fetch course list on mount
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Courses</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Stream</b>
          <b className='text-center'>Action</b>
        </div>

        {list.map((item) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={item._id}>
            <img className='w-12' src={item.image[0]} alt={item.stream} />
            <p>{item.stream}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
