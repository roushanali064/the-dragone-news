
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const  [data, setData]=useState([]);
    useEffect(() => {
        fetch('https://the-news-dragone-server-roushanali064.vercel.app/categories')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            {
                data.map(category=><p
                key={category.id}
                >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftNav;