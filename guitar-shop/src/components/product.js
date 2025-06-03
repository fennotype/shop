import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      error: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(error => {
        console.error('Ошибка при получении данных о товаре:', error);
        this.setState({ error: 'Не удалось загрузить информацию о товаре' });
      });
  }

  render() {
    const { product, error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    if (!product) {
      return <div>Загрузка...</div>;
    }

    return (
      <div className='product-detail'>
        <img src={`/img/${product.img}`} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <b>{product.price}$</b>
        <Link to="/">Назад к списку товаров</Link>
      </div>
    );
  }
}

export default ProductDetail;