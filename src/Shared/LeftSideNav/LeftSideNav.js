import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('https://assignment-ten-server-flame.vercel.app/shop-categories')
        .then (res => res.json())
        .then (data => setCategories(data))
    },[])

    return (
        <div>
            
        <div className='mt-5 bg-slate-500 h-100 rounded-md justify-center align-middle'>
           {
             categories.map(category => <p key='category.id'>
             <Link className='className="
             text-white
             inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"' style={{textDecoration: 'none' }} to={`/category/${category.id}`}>{category.name}</Link>
             
             </p>)
           }
        </div>
        </div>
    );
};

export default LeftSideNav;