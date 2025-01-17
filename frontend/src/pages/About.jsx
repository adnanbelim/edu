import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import OurPolicy from '../component/OurPolicy'
import Carausel from '../component/Carausel'
import Gallary from '../component/Gallary'

const About = () => {
  return (
    <div>

      <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t'>

        <Title text1={'ABOUT'} text2={'US'} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <div className="flex flex-col justify-start gap-6 md:w-2/4 text-gray-600">
            <b className="text-gray-800">Beginning</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga harum officiis eaque necessitatibus optio nulla, rerum accusantium vero reiciendis possimus. Nihil, veritatis velit, tempora totam voluptas saepe earum modi sed, error voluptatibus dolorem explicabo ullam laborum reprehenderit</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aut consectetur, nulla perspiciatis fuga nisi debitis consequatur porro sed dolorum est ipsum optio enim saepe deserunt ut officia cupiditate temporibus eligendi consequuntur veniam obcaecati modi at!</p>
            <b className="text-gray-800">Our Goals</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate minus sunt modi eos, nesciunt eaque ea officiis rerum natus fugiat voluptatum consequatur laboriosam debitis, nulla atque non distinctio iusto ullam at, harum dolor porro repellat. Totam, labore recusandae ipsa itaque molestias adipisci nulla quia sed alias eum nostrum quae!</p>
            <b className="text-gray-800">Our Story</b>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe non et itaque. Neque quia voluptatem dicta delectus distinctio libero qui ab debitis obcaecati, facere totam commodi earum quam officia, amet minus corporis, sed dolor possimus saepe accusantium nulla unde? Doloribus maiores iusto in quisquam facilis mollitia optio impedit numquam porro.</p>
          </div>
          <img src={assets.home_image2} alt="" className='w-full md:max-w-[480px]' />
        </div>

</div>


      <OurPolicy />

      <Carausel />

      <Gallary />


    </div>
  )
}

export default About