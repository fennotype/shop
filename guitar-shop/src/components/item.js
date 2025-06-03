import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class item extends Component {
  render() {
    return (
      
      <div className='item' >
        <Link to={`/product/${this.props.item.id}`}>
        <img src={"/img/"+this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-card'>buy</div>
        </Link>
      </div>
    

    )
  }
}

export default item