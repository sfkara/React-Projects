import React,{useState} from "react";
import Data from "./components/Data";
import List from './components/List'



const App = () => {
    const [people , setPeople] = useState(Data)
    return(
        <main>
                <section className="container">
                    <h3> {people.length} birthday</h3>
                    <List peop={people} />
                    <button type="button" onClick={() => setPeople([])}>Clear All</button>
                </section>
        </main>
    )

}


export default App;