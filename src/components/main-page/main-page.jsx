import React, { PureComponent } from "react";
import {ItemCard} from '../item-card/item-card.jsx'
import {connect} from 'react-redux'
const MainPage =(props)=> {
 
const {cards}= props
    return(
      <React.Fragment>
        <div className="main-container">
          <h1 className="main-title">Ты сегодня покормил кота?</h1>
          <section className="main-card--container">
            <ul className="product-list">
              {cards.map((item)=>{
               return <ItemCard key={item.id} card={item} />
              })}
              
            </ul>
          </section>
        </div>
      </React.Fragment>
    );
  
}
const mapStateToProps=(state)=>{
  return{
    cards:state.cards
  }
}

export default connect(mapStateToProps)(MainPage)