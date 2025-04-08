import React, { Component } from 'react'
import Item from './item'

export class items extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }
  
  componentDidMount() {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data, loading: false });
      })
      .catch(error => console.error('Error fetching items:', error));
  }

  render() {
    const { items, loading } = this.state;

   
    if (loading) {
      return <div>Загрузка данных...</div>;
    }

    return (
      <main>
        {items.map((el) => (
          <Item key={el.id} item={el} /> 
        ))}
      </main>
    );
  }
}
export default items