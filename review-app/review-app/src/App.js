import React, { useState } from "react";
import Review from './components/Review'
import {FaGithubSquare} from 'react-icons/fa'

const App = () =>{
    return(
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviews</h2>
                    <div className="underline">
                        
                    </div>
                </div>
                <Review> </Review>
            </section>
        </main>
    )
}

export default App