import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='mb-20'>
            <div className='text-center mt-20'>
            <h1 className='font-bold'>Question 1:  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p><span className='text-orange-300'>Answare1 </span>:  Access token: Credential used to access protected resources, issued after login.  </p>
            <p>Refresh token: Credential used to obtain new access token, has longer validity.</p>
            <p>Storage: It is recommended to store access and refresh tokens securely on the client-side, using techniques like HTTP-only cookies or browser local storage, to prevent unauthorized access.</p>
            </div>
            <div className='text-center mt-20'>
            <h1 className='font-bold'>Question 2:  Compare SQL and NoSQL databases?</h1>
            <p><span className='text-orange-300'>Answare2 </span>:  <span className='font-bold'>SQL databases: </span>: SQL databases use a structured schema that defines the tables, columns, and relationships between them, adhering to a predefined data model.  </p>
            <p></p>
            <p><span className='font-bold'>NoSQL databases:</span> NoSQL databases have a flexible schema or no schema at all, allowing for dynamic and evolving data structures. They are designed to handle unstructured or semi-structured data. </p>
            </div>

            <div className='text-center mt-20'>
            <h1 className='font-bold'>Question 3:  What is express js? What is Nest JS ?</h1>
            <p><span className='text-orange-300'>Answare3 </span>:  <span className='font-bold'> What is express js?: </span>: Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and serving static files. It allows developers to create robust and scalable server-side applications using JavaScript.  </p>
            <p></p>
            <p><span className='font-bold'>What is Nest JS ?: </span>NestJS is a progressive and modular framework for building scalable and maintainable server-side applications in Node.js. It is built with TypeScript and takes advantage of its features such as strong typing and decorators. NestJS follows the architectural patterns of Angular, making it familiar for developers with experience in Angular or other similar frameworks. </p>
            </div>

            <div className='text-center mt-20'>
            <h1 className='font-bold'>Question 4:  What is MongoDB aggregate and how does it work?</h1>
            <p><span className='text-orange-300'>Answare4 </span>:  <span className='font-bold'>What is MongoDB: </span>: MongoDB aggregate is a powerful framework used for processing and transforming data within a MongoDB database. It allows you to perform complex data analysis operations, such as filtering, grouping, sorting, and computing aggregations on the data stored in your MongoDB collections. </p>
            <p></p>
            <p><span className='font-bold'>how does it work?:</span> The MongoDB aggregate framework works by executing a sequence of stages on the documents in a collection to perform data processing and transformation operations. </p>
            </div>
        </div>
    );
};

export default Blog;