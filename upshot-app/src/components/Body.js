import React, { Component } from 'react';
import imageOne from './../images/shoe.jpg';
import imageTwo from './../images/bike.jpg';
import imageThree from './../images/watch.jpg';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    image: imageOne,
                    title: 'Title with Two Very Very Long Long Lines',
                    description: 'And a very long description to boot, Why bother describing something with so many words?'
                },
                {
                    id: 2,
                    image: imageThree,
                    title: 'One Short Title',
                    description: 'And a very long description to boot, Why bother describing something with so many words?'
                },
                {
                    id: 3,
                    image: imageOne,
                    title: 'One Short Title',
                    description: 'With a short description.'
                },
                {
                    id: 4,
                    image: imageTwo,
                    title: 'Title with Two Very Very Long Long Lines',
                    description: 'With a short description.'
                },
                {
                    id: 4,
                    image: imageOne,
                    title: 'Title with Two Very Very Long Long Lines',
                    description: 'And a very long description to boot, Why bother describing something with so many words?'
                },
                {
                    id: 5,
                    image: imageThree,
                    title: 'Title with Two Very Very Long Long Lines',
                    description: 'And a very long description to boot, Why bother describing something with so many words?'
                }
            ]
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         products:
    //     })
   // }

    render() {

        return(
            <div className="app-Body">
                <div className="app-Container">
                    <aside className="app-Aside">
                        <ul>
                            <li>
                                <a href="#">
                                    Footwear 
                                </a>
                            
                            </li>
                            <li>
                                <a href="#">
                                Water Fountains 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Garage Door Openers 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Smart Home Tech 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Beverages 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Education 
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <main className="app-Main">
                    {this.state.products.map((product, key) =>
                        <div className="card">
                        <img className="card-image" src={product.image} alt={product.title}/>
                        <div className="card-copy">                      
                            <div className="card-title">{product.title}</div>
                            <div className="card-description">{product.description} </div>
                        </div>
                        <button className="buy-button">buy now</button>
                    </div>
                    )}
                        
                    </main>
                </div>
                
            </div>
        )
        
    }
}

export default Body;
