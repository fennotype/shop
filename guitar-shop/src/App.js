import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items: [
      {
        id: 1,
        title: 'Fender Stratocaster Black',
        img: 'fender-strat-black.jpeg',
        desc: 'A legendary guitar delivering unmatched versatility and rich tones.',
        category: 'Electric Guitars',
        price: '1200.00'
      },
      {
        id: 2,
        title: 'Gibson Les Paul Sunburst',
        img: 'gibson-les-paul-sunburst.jpeg',
        desc: 'An iconic classic renowned for its warm and resonant sound.',
        category: 'Electric Guitars',
        price: '2500.00'
      },
      {
        id: 3,
        title: 'Yamaha FG800 Natural',
        img: 'yamaha-fg800-natural.jpeg',
        desc: 'An ideal acoustic guitar for beginners with quality craftsmanship.',
        category: 'Acoustic Guitars',
        price: '199.99'
      },
      {
        id: 4,
        title: 'Ibanez RG550 Blue',
        img: 'ibanez-rg550-blue.jpeg',
        desc: 'Designed for metal enthusiasts, featuring speed and precision.',
        category: 'Electric Guitars',
        price: '899.99'
      },
      {
        id: 5,
        title: 'Taylor 214ce Deluxe',
        img: 'taylor-214ce-deluxe.jpeg',
        desc: 'A beautifully crafted acoustic-electric guitar with elegant playability.',
        category: 'Acoustic Guitars',
        price: '999.99'
      },
      {
        id: 6,
        title: 'Epiphone SG Cherry Red',
        img: 'epiphone-sg-cherry-red.jpeg',
        desc: 'An affordable version of the classic SG, perfect for rocking out.',
        category: 'Electric Guitars',
        price: '499.99'
      },
      {
        id: 7,
        title: 'Martin D-28 Natural',
        img: 'martin-d28-natural.jpeg',
        desc: 'A professional’s choice for legendary acoustic sound and projection.',
        category: 'Acoustic Guitars',
        price: '2999.99'
      },
      {
        id: 8,
        title: 'PRS Custom 24 Purple',
        img: 'prs-custom24-purple.jpeg',
        desc: 'A fusion of artistry and innovation for diverse musical styles.',
        category: 'Electric Guitars',
        price: '3500.00'
      },
      {
        id: 9,
        title: 'Seagull S6 Original',
        img: 'seagull-s6-original.jpeg',
        desc: 'Combines premium quality and affordability for acoustic enthusiasts.',
        category: 'Acoustic Guitars',
        price: '499.99'
      },
      {
        id: 10,
        title: 'Jackson Soloist Black',
        img: 'jackson-soloist-black.jpeg',
        desc: 'Built for speed and precision, ideal for intricate solos.',
        category: 'Electric Guitars',
    price: '499.99'
    },
    {
      id: 11,
      title: 'Gretsch G2622 Orange',
      img: 'gretsch-g2622-orange.jpeg',
      desc: 'A semi-hollow guitar with vintage charm and dynamic tone.',
      category: 'Semi-Hollow Guitars',
      price: '799.99'
    },
    {
      id: 12,
      title: 'Cort CR100 Black',
      img: 'cort-cr100-black.jpeg',
      desc: 'A great entry-level electric guitar with solid performance.',
      category: 'Electric Guitars',
      price: '199.99'
    },
    {
      id: 13,
      title: 'Takamine GD93CE Natural',
      img: 'takamine-gd93ce-natural.jpeg',
      desc: 'A stylish acoustic-electric guitar perfect for the stage.',
      category: 'Acoustic Guitars',
      price: '699.99'
    },
    {
      id: 14,
      title: 'ESP LTD EC-1000 Violet',
      img: 'esp-ltd-ec1000-violet.jpeg',
      desc: 'A striking guitar crafted for rock and metal performances.',
      category: 'Electric Guitars',
      price: '999.99'
    },
    {
      id: 15,
      title: 'Fender Telecaster Butterscotch',
      img: 'fender-tele-butterscotch.jpeg',
      desc: 'Classic tones in a timeless butterscotch finish.',
      category: 'Electric Guitars',
      price: '1100.00'
    },
    {
      id: 16,
      title: 'Gibson J-45 Sunburst',
      img: 'gibson-j45-sunburst.jpeg',
      desc: 'An acoustic guitar prized for its balanced and warm tone.',
      category: 'Acoustic Guitars',
      price: '2499.99'
    },
    {
      id: 17,
      title: 'Ibanez Artcore Red',
      img: 'ibanez-artcore-red.jpeg',
      desc: 'A semi-hollow beauty tailored for jazz and blues players.',
      category: 'Semi-Hollow Guitars',
      price: '599.99'
    },
    {
      id: 18,
      title: 'Taylor GS Mini Mahogany',
      img: 'taylor-gsmini-mahogany.jpeg',
      desc: 'A compact acoustic with a warm and rich sound.',
      category: 'Acoustic Guitars',
      price: '499.99'
    },
    {
      id: 19,
      title: 'Epiphone Les Paul Classic',
      img: 'epiphone-lespaul-classic.jpeg',
      desc: 'A cost-effective tribute to the timeless Les Paul design.',
      category: 'Electric Guitars',
      price: '599.99'
    },
    {
      id: 20,
      title: 'Yamaha Pacifica White',
      img: 'yamaha-pacifica-white.jpeg',
      desc: 'A versatile electric guitar perfect for beginner and intermediate players.',
      category: 'Electric Guitars',
      price: '299.99'
    },
    {
      id: 21,
      title: 'Fender Jazzmaster Ocean Turquoise',
      img: 'fender-jazzmaster-turquoise.jpeg',
      desc: 'A unique instrument with distinctive sound and character.',
      category: 'Electric Guitars',
      price: '1499.99'
    },
    {
      id: 22,
      title: 'Gibson ES-335 Cherry Red',
      img: 'gibson-es335-cherry-red.jpeg',
      desc: 'A semi-hollow legend with unmatched versatility and sustain.',
      category: 'Semi-Hollow Guitars',
      price: '2999.99'
    },
    {
      id: 23,
      title: 'Martin LX1E Little Martin',
      img: 'martin-lx1e-little.jpeg',
      desc: 'A compact acoustic-electric guitar ideal for travel and practice.',
      category: 'Acoustic Guitars',
      price: '399.99'
    },
    {
      id: 24,
      title: 'PRS SE Custom 24 Blue',
      img: 'prs-se-custom24-blue.jpeg',
      desc: 'A budget-friendly version of the iconic PRS with premium feel.',
      category: 'Electric Guitars',
      price: '899.99'
    },
    {
      id: 25,
      title: 'Gretsch White Falcon',
      img: 'gretsch-white-falcon.jpeg',
      desc: 'An extravagant guitar combining luxury and vintage tone.',
      category: 'Semi-Hollow Guitars',
      price: '4999.99'
    },
    {
      id: 26,
      title: 'Ibanez AZ2402 Prestige',
      img: 'ibanez-az2402-prestige.jpeg',
      desc: 'A premium-grade guitar for professional performance.',
      category: 'Electric Guitars',
      price: '1999.99'
    },
    {
      id: 27,
      title: 'Ibanez AZ2204N',
      img: 'ibanez-az2204n.jpeg',
      desc: 'An AZ series guitar offering sleek style and versatility.',
      category: 'Electric Guitars',
      price: '1799.99'
    },
    {
      id: 28,
      title: 'Ibanez AZS2209QM',
      img: 'ibanez-azs2209qm.jpeg',
      desc: 'A semi-hollow masterpiece with exceptional tonal range.',
      category: 'Semi-Hollow Guitars',
      price: '1899.99'
    },
    {
      id: 29,
      title: 'Ibanez JCRG01',
      img: 'ibanez-jcrg01.jpeg',
      desc: 'A J Custom guitar with precision and artisanal sound quality.',
      category: 'Electric Guitars',
      price: '3499.99'
    },
    {
      id: 30,
      title: 'Ibanez JCRG02',
      img: 'ibanez-jcrg02.jpeg',
      desc: 'Premium craftsmanship for players who demand excellence.',
      category: 'Electric Guitars',
      price: '3799.99'
    },
    {
      id: 31,
      title: 'Ibanez AZ224BC',
      img: 'ibanez-az224bc.jpeg',
      desc: 'Lightweight design meets versatile sound in this AZ series guitar.',
      category: 'Electric Guitars',
      price: '1599.99'
    },
    {
      id: 32,
      title: 'Ibanez AZ2204F',
      img: 'ibanez-az2204f.jpeg',
      desc: 'Enhanced electronics and superior playability in a modern design.',
      category: 'Electric Guitars',
      price: '1699.99'
    },
    {
      id: 33,
      title: 'Ibanez JCRG03',
      img: 'ibanez-jcrg03.jpeg',
      desc: 'A high-performance J Custom guitar with meticulous detailing.',
      category: 'Electric Guitars',
      price: '3599.99'
    },
    {
      id: 34,
      title: 'Ibanez AZ2402F',
      img: 'ibanez-az2402f.jpeg',
      desc: 'Designed for exceptional clarity and technical skill.',
      category: 'Electric Guitars',
      price: '1999.99'
    },
    {
      id: 35,
      title: 'Ibanez AZ2204B',
      img: 'ibanez-az2204b.jpeg',
      desc: 'A visually stunning guitar with dynamic sound capabilities.',
      category: 'Electric Guitars',
      price: '1799.99'
    },
    {
      id: 36,
      title: 'Ibanez JCRG04',
      img: 'ibanez-jcrg04.jpeg',
      desc: 'Crafted to provide unparalleled tone and playability.',
      category: 'Electric Guitars',
      price: '3699.99'
    },
    {
      id: 37,
      title: 'Ibanez AZ224F',
      img: 'ibanez-az224f.jpeg',
      desc: 'Equipped with upgraded electronics and sleek aesthetics.',
      category: 'Electric Guitars',
      price: '1599.99'
    },
    {
      id: 38,
      title: 'Ibanez AZ2204W',
      img: 'ibanez-az2204w.jpeg',
      desc: 'Blends cutting-edge design with perfect tonal balance.',
      category: 'Electric Guitars',
      price: '1799.99'
    },
    {
      id: 39,
      title: 'Ibanez JCRG05',
      img: 'ibanez-jcrg05.jpeg',
      desc: 'A J Custom gem with exquisite sound and a luxurious finish.',
      category: 'Electric Guitars',
      price: '3499.99'
    }
    ],
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
