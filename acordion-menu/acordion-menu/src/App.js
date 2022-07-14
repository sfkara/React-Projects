import React, {useState} from "react";
import Question from "./components/Question";
import data from './components/Data'


const App = ()=>{
    const [question,setQuestion] = useState(data)
   
    return(
       <main>
            <div className="container">
                <h3>Questions and Answers</h3>
                <section className="info">
                    {question.map((firat)=>{
                        return <Question key={firat.id} {...firat}/>
                    })}
                </section>
            </div>
       </main>
    )
}

export default App