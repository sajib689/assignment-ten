import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Terms and Condition</h3>
        <p>Go back Register: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;