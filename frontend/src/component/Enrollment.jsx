import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import dayjs from 'dayjs';
import jsPDF from 'jspdf';

function Enrollment() {
    const { userId } = useParams();
    const { backendUrl } = useContext(ShopContext);

    // State for enrollment data
    const [enrollData, setEnrollData] = useState(null);

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        email: '',
        phone: '',
        stream: 'BCA',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const enrollmentData = {
            ...formData,
            enrollment: {
                fill: true,
                date: new Date(),
            },
        };

        try {
            const response = await axios.post(
                `${backendUrl}/api/user/enrollment/${userId}`,
                enrollmentData
            );
            if (response.status === 200 || response.status === 201) {
                toast.success('Enrollment submitted successfully!');
                fetchEnrollData(); // Fetch updated enrollment data
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!');
        }
    };

    // Fetch enrollment data
    const fetchEnrollData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/user/enrollment/get/${userId}`);
            setEnrollData(response.data.enrollment);
        } catch (error) {
            toast.success('Enroll now!!');
        }
    };

    useEffect(() => {
        fetchEnrollData();
    }, []);

    // Render enrollment details
    const renderEnrollmentDetails = () => {

        const handleDownloadPDF = () => {
            const doc = new jsPDF();

            // Title
            doc.setFontSize(18);
            doc.text('Enrollment Details', 10, 10);

            // Add enrollment details to the PDF
            const details = [
                `Enrollment ID: ${enrollData._id}`,
                `Name: ${enrollData.name}`,
                `Father's Name: ${enrollData.fatherName}`,
                `Email: ${enrollData.email}`,
                `Phone: ${enrollData.phone}`,
                `Stream: ${enrollData.stream || 'N/A'}`,
                `Street: ${enrollData.address.street}`,
                `City: ${enrollData.address.city}`,
                `State: ${enrollData.address.state}`,
                `Country: ${enrollData.address.country}`,
                `ZIP Code: ${enrollData.address.zipcode}`,
                `Enrollment Date: ${dayjs(enrollData.date).format('MMMM DD, YYYY [at] hh:mm A')}`,
            ];

            // Set font size for details
            doc.setFontSize(12);

            // Add each detail line with some vertical spacing
            details.forEach((line, index) => {
                doc.text(line, 10, 20 + index * 10);
            });

            // Save the PDF
            doc.save('enrollment-details.pdf');
        };

        return (
            <div className='min-h-screen w-full flex items-center justify-center'>
                <div className="w-full max-w-4xl bg-gray-50 shadow-lg rounded-lg p-6 mt-20 sm:p-10">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Enrollment Details</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Enrollment ID</label>
                            <span className="text-lg text-gray-800">{enrollData._id}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Name</label>
                            <span className="text-lg text-gray-800">{enrollData.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Father's Name</label>
                            <span className="text-lg text-gray-800">{enrollData.fatherName}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Email</label>
                            <span className="text-lg text-gray-800">{enrollData.email}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Phone</label>
                            <span className="text-lg text-gray-800">{enrollData.phone}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Stream</label>
                            <span className="text-lg text-gray-800">{enrollData.stream || 'N/A'}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Street</label>
                            <span className="text-lg text-gray-800">{enrollData.address.street}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">City</label>
                            <span className="text-lg text-gray-800">{enrollData.address.city}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">State</label>
                            <span className="text-lg text-gray-800">{enrollData.address.state}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">Country</label>
                            <span className="text-lg text-gray-800">{enrollData.address.country}</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">ZIP Code</label>
                            <span className="text-lg text-gray-800">{enrollData.address.zipcode}</span>
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label className="text-sm font-medium text-gray-600">Enrollment Date</label>
                        <span className="text-lg text-gray-800">
                            {dayjs(enrollData.date).format('MMMM DD, YYYY [at] hh:mm A')}
                        </span>
                    </div>
                    <button
                        onClick={handleDownloadPDF}
                        className="mt-4 w-full sm:w-auto bg-[#0d6efd] text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                    >
                        Download Details
                    </button>
                </div>
                </div>
        );
    };
    return (
        <div className="border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            {enrollData && enrollData.fill ? (
                renderEnrollmentDetails() // Show details if fill is true
            ) : (
                <form className="border-b border-gray-900/10 pb-12" onSubmit={handleSubmit} >
                    <Title text1={'ENROLL'} text2={'NOW'} />
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="name"
                                className="block text-sm/6 font-medium text-gray-900">
                                Full name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="fatherName"
                                className="block text-sm/6 font-medium text-gray-900">
                                Father's name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="fatherName"
                                    id="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="phone"
                                className="block text-sm/6 font-medium text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="stream"
                                className="block text-sm/6 font-medium text-gray-900">
                                Stream
                            </label>
                            <div className="mt-2">
                                <select
                                    id="stream"
                                    name="stream"
                                    value={formData.stream}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>BCA</option>
                                    <option>BBA</option>
                                    <option>BSc</option>
                                    <option>BCom</option>
                                    <option>BA</option>
                                    <option>BEd</option>
                                    <option>MCA</option>
                                    <option>MSc</option>
                                    <option>MBA</option>
                                    <option>MCom</option>
                                </select>
                            </div>
                        </div>

                        <div className='block'>
                            <h3 className="text-2xl my-5">Address</h3>
                        </div>

                        <div class="col-span-full">
                            <label for="street" class="block text-sm/6 font-medium text-gray-900">Street</label>
                            <div class="mt-2">
                                <input
                                    value={formData.street}
                                    onChange={handleChange}
                                    type="text" name="street" id="street" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2 sm:col-start-1">
                            <label for="city" class="block text-sm/6 font-medium text-gray-900">City</label>
                            <div class="mt-2">
                                <input
                                    value={formData.city}
                                    onChange={handleChange}
                                    type="text" name="city" id="city" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="state" class="block text-sm/6 font-medium text-gray-900">State</label>
                            <div class="mt-2">
                                <input
                                    value={formData.state}
                                    onChange={handleChange}
                                    type="text" name="state" id="state" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="zipcode" class="block text-sm/6 font-medium text-gray-900">ZIP code</label>
                            <div class="mt-2">
                                <input
                                    value={formData.zipcode}
                                    onChange={handleChange}
                                    type="number" name="zipcode" id="zipcode" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
                            <div class="mt-2">
                                <input
                                    value={formData.country}
                                    onChange={handleChange}
                                    type="text" name="country" id="country" autocomplete="off" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <button
                        className="mt-10 w-40 bg-black text-white p-4 rounded-lg hover:bg-white hover:text-black transition-all duration-500 border hover:border-black"
                        type="submit">Submit
                    </button>
                </form>
            )}
        </div>
    );
}

export default Enrollment;
