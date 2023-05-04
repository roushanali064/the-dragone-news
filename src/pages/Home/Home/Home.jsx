import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const totalNews = useLoaderData();
    return (
        <div>
            <h4>Total News {totalNews.length}</h4>
            
            {
                totalNews.map(news=><NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
            
        </div>
    );
};

export default Home;