import React from 'react'
import { Route, Link } from 'react-router-dom';



const Flashcards = () => {
    return (
        <>
            <Route path="/addcard">
                <AddCard />
            </Route>

        </>
    )
}

export default Flashcards;
