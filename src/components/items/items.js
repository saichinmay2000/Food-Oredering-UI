import './scss/items.css'
import React from 'react'
import Cards from '../cards/card'
import Mexican from '../assets/mexican-taco.jfif'
import Pizza from '../assets/pizza.jpg'
import Burger from '../assets/burger.jpg'
import Nachos from '../assets/nachos.jfif'
import Noodles from '../assets/noodles.webp'

class Items extends React.Component{
    
    
      
    render(){
        return(
            <div className="expert">
                <div className="main-cards">
                  <div className="cards">
                      <Cards
                      img={Mexican}
                      title="Mexican Taco"
                      />
                      <Cards
                      img={Pizza}
                      title="Farmhouse Pizza"
                      />
                      <Cards
                      img={Burger}
                      title="Chicken Burger"
                      />
                      <Cards
                      img={Nachos}
                      title="Loaded Nachos"
                      />
                      <Cards
                      img={Noodles}
                      title="Hakka Noodles"
                      />
                  </div>
                </div>
            </div>
        )
    }
}

export default Items