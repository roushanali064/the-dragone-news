import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInghits from './EditorInghits';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button className='bg-danger' variant="primary"><FaArrowLeft></FaArrowLeft>   All News From This Category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorInghits></EditorInghits>
        </div>
    );
};

export default News;