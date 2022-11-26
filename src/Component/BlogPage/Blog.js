import React from 'react';

const Blog = () => {
    return (
        <div className='w-[60%] mx-auto pb-20'>
            <h1 className='text-3xl text-black text-center py-10 font-bold'>Some Question</h1>
            <div>
                <h1 className='text-2xl font-semibold'>1 What are the different ways to manage a state in a React application?</h1>
                <p className='my-3 text-lg'>Ans : The Four Kinds of React State to Manage .
                    There are four main types of state you need to properly manage in your React apps:
                </p>
                <span className='mr-5'>1 .  Local state</span>
                <span className='mr-5'> 2. Global state</span>
                <span className='mr-5'> 3. Server state</span>
                <span className='mr-5'>4. URL state</span>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-8'>2 . How does prototypical inheritance work?</h1>
                <p className='my-2 text-lg'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-8'>3 . What is a unit test? Why should we write unit tests?</h1>
                <p className='my-2 text-lg'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-8'>4 . React vs. Angular vs. Vue?</h1>
                <p className='my-2 text-lg'> <span>Angular :</span>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>
                <p className='my-2 text-lg'> <span>React :</span>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow</p>
                <p className='my-2 text-lg'> <span>Vue :</span>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );


};

export default Blog;