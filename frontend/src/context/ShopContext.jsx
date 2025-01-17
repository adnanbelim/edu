import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets.js"; //=> local products
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Create Context 
export const ShopContext = createContext();
// give value to context using Provider
const ShopContextProvider = (props) => {

    // We can change variable value that effect on entire page (creation of global variable)

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // console.log('backendUrl ', backendUrl);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    // state variable for token
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Now login page will not open on click or reload of page if token is available
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            setUserId(localStorage.getItem('userId'));
        }
    }, [])

    // Fetch courses from the API
    const fetchCourses = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${backendUrl}/api/course/list`);
            if (response.data.success) {
                // console.log(response.data.course);
                setCourses(response.data.course); // Set fetched courses to state
            } else {
                toast.error('Failed to fetch courses: ' + response.data.message);
            }
        } catch (error) {
            toast.error('Error fetching courses: ' + error.message);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [backendUrl]);

    // Fetch courses from the API
    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/event/list`);
            if (response.data.success) {
                // console.log(response.data.event);
                setEvents(response.data.event); // Set fetched Events to state
            } else {
                toast.error('Failed to fetch Events: ' + response.data.message);
            }
        } catch (error) {
            toast.error('Error fetching Events: ' + error.message);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [backendUrl]);

    // We can access the any variable of value obj using the context API
    const value = {
        search, setSearch, showSearch, setShowSearch, navigate, backendUrl, token, setToken, userId, setUserId, events, filteredCourses, setFilteredCourses, courses, loading
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// Step 1 : Create Context
// Step 2 : Give value to provider
// Step 3 : access value globally with the help of useContext
// Step 4 : wrap the Main.jsx by Provider Component 