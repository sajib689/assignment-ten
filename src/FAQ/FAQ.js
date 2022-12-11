import React from 'react';

const FAQ = () => {
    return (
        <div>
            <ul className='p-5'>
                <h5>what is cors?</h5>
                <li>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that 
                    allows a server to indicate any origins 
                    (domain, scheme, or port) other than its own 
                    from which a browser should permit loading resources</li>
            <h5> Why are you using firebase?</h5>
            <li>
            Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Accelerate Development. For Mobile or Web Apps.

            </li>
            <h5>What other options do you have to implement authentication?</h5>
            <li>
            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints
            </li>
            <h5>
            How does the private route work?
            </h5>
            <li>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </li>
            <h5>
            What is Node? How does Node work?
            </h5>
            <li>
            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </li>
            </ul>
        </div>
    );
};

export default FAQ;