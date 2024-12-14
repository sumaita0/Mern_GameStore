import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad } from 'lucide-react'; 
import CategoryItem from '../components/CategoryItem';

const categories=[
  { href:"/Classics",name:"Classics",imageUrl:"img/chess/2.jpg"},
  { href:"/Puzzels",name:"Puzzels",imageUrl:"/img/puzzles/1.jpg"},
  { href:"/BattleRoyals",name:"BattleRoyals",imageUrl:"/img/Call of duty/cod.jpg"},
  { href:"/Racing",name:"Racing",imageUrl:"/img/nfs/1.avif"},
  { href:"/Adventure",name:"Adventure",imageUrl:"/img/adventure/1.jpg"},
  { href:"/Action",name:"Action",imageUrl:"/img/action/1.webp"},
]
const accessories =[
  { href:"/Accessories",name:"Gaming Accessories",imageUrl:"/img/accessories/1.avif"},

]
const Homepage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-gray-900"
      style={
      {
        backgroundImage: 'url(/img/1bf.gif)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    }
    >
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to the GameStore</h1>
        <p className="mt-4 text-xl">Get your game on with the latest releases and deals!</p>

      </motion.div>
      
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 1 }}
      >
        <p className="text-xl text-gray-300">Experience the best in Games. Buy now!</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </motion.div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
          
           
				</div>
       
        
    </div>
    
  );
};

export default Homepage;

