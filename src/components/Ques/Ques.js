import React from 'react';
import './Ques.css'

const Ques = () => {
    return (
      
            <div className='container' >
              <h1>Q/A</h1>
              <div className='qItem'>
                {/* ques-01 */}
            <div >
              <h2 >
                <button className="ques" type="button" >
                How does a React application work?
                
                </button>
              </h2>
                <div className="answer">A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.</div>
             
            </div>
             {/* ques-02 */}
             <div >
              <h2 >
                <button className="ques" type="button" >
                What are the differences between props and state?
                </button>
              </h2>
                <div className="answer">Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</div>
             
            </div>
            {/* ques-03*/}
            <div >
              <h2 >
                <button className="ques" type="button" >
                What does useEffect do?
                </button>
              </h2>
                <div className="answer">The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</div>
             
            </div>
               </div>
        </div>

    );
};

export default Ques;