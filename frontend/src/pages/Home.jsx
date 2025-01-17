import React from 'react'
import Hero from '../component/Hero.jsx';
import OurPolicy from '../component/OurPolicy.jsx';
import Gallary from '../component/Gallary.jsx';
import CourseList from '../component/CourseList.jsx';
import EventList from '../component/EventList.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Gallary />
      <OurPolicy />
      <CourseList />
      <EventList />
    </div>
  )
}

export default Home