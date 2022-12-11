import React from 'react';
import { Link } from 'react-router-dom';

const Homes = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-5 ms-5 rounded">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">First Learn!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/home'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    );
};

export default Homes;