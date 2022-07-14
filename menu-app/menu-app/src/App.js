import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from './components/Data'

const allCategory = ['all' ,...new Set(data.map((item) => item.category))] 
console.log(allCategory)

const App = () => {
    const [menuItem , setMenuItem] = useState(data)
    const [categories , setCategories] = useState(allCategory)
    // console.log(categories)


    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItem(data);
            return;
          }
        const newitems = data.filter((item) =>
            item.category === category)
        setMenuItem(newitems)    
    }


    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <Categories  categ={categories} filteri={filterItems}/>
                    <Menu mitem={menuItem}/>
                </div>
            </section>
        </main>
       
    )
}


export default App