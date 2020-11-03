import React from 'react'
import { Route } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>

            <Route exact path="/">
                <h1>Our Beautiful Study App</h1>  
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
        </>
    )
}

export default LandingPage;
