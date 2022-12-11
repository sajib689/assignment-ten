import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopSummaryCard from './../../Shared/ShopSummaryCard/ShopSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    
    return (
        <div className='ms-5 mt-5'>

            {
                categoryNews.map( shop => <ShopSummaryCard
                key={shop.id}
                shop={shop}
                
                ></ShopSummaryCard>)
            }
        </div>
    );
};

export default Category;