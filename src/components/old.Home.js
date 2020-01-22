// FILE: App.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
  }
  render() {
    return (
        <>
          {this.state.data.map(el => (
            <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/AlfatihTimur.jpg'} alt="logo.svg" />
            <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Go somewhere
                    </a>
                </div>
            </div>
          ))}
        </>
    );
  }
}
export default Home;

    /*
    
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    
    
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/AlfatihTimur.jpg'} alt="logo.svg" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
        </div>
    );*/

//export default Home
