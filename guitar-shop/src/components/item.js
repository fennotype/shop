import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class item extends Component {
  handleImgError = (e) => {
    if (!e.target.dataset.fallback) {
      e.target.src = '/img/no-image.png';
      e.target.dataset.fallback = "true";
    }
  };

  render() {
    const { id, img, title, description, price } = this.props.item;
    return (
      <div className='item' >
        <Link to={`/product/${id}`}>
          <img
            src={img ? `/img/${img}` : '/img/no-image.png'}
            alt={title}
            onError={this.handleImgError}
          />
          <h2>{title}</h2>
          <p>{description}</p>
          <b>{price}$</b>
          <div className='add-to-card'>buy</div>
        </Link>
      </div>
    )
  }
}

export default item