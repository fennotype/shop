import React, { Component } from 'react'
import Item from './item'

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      error: null,
    };
  }
  
// http://localhost:5000

  async componentDidMount() {
    try {
      const res = await fetch('/api/items', { headers: { Accept: 'application/json' } });

      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('application/json')) {
        const text = await res.text();
        console.error('Ответ не JSON, content-type=', ct, 'body=', text);
        throw new Error(`Неверный формат ответа: ${ct}`);
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.setState({ items: data, loading: false });
    } catch (error) {
      console.error('Error fetching items:', error);
      this.setState({ loading: false, error: error.message || 'Ошибка загрузки' });
    }
  }
  render() {
    const { items, loading, error } = this.state;

    if (loading) return <div>Загрузка данных...</div>;
    if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;

    return (
      <main>
        {items.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </main>
    );
  }
}
export default Items