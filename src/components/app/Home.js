// FILE: App.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import './css/MyCss.css'
import './css/Modal.css'
import { 
  
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
 } from "react-router-dom";
 import useState from 'usestate';

    //let sort = useParams();
    //let split = sort.split("&")
    let a="desc";
    let response ='';
    let keysort = {};

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    let sort= this.props.match.params.id?this.props.match.params.id:'&&&';
    keysort = sort.split("&");
    let sortType = keysort[0] ? keysort[0]:'desc';
    let sortBy = keysort[1] ? keysort[1]:'date_updated';
    let limit = keysort[2] ? keysort[2]:12;
    let page = keysort[3] ? keysort[3]:1;
    console.log('ssss' + keysort[1])
   
    // if(sortType === '-' && sortBy === '-' && limit === '-' && page ==='-' ){
    //   let keysort = sort.split("&");
    //   response = await fetch(`http://34.226.154.250:3000/engineers/users?sort=&sortBy=&page=`);
    // }
    // else
    // {
      //keysort = sort.split("&");
      response = await fetch(`http://34.226.154.250:3000/engineers/users?sort=${sortType}&sortBy=${sortBy}&limit=${limit}&page=${page}`);
      
    // }
    
    
    const json = await response.json();
    this.setState({ data: json.data });
  }
  render() {
    return (
        <>
        <div className="container container-fluid">
        <div className="row">

          {this.state.data.map(el => (
            
            <div className="col-md-3">
                {/*Book  */}
            <div class="card booking-card">
            {/* Card image */}
            <div className="view overlay">
              <img
                className="card-img-top"
                src={process.env.PUBLIC_URL + `/images/${el.showcase}`}
                
                media="screen and (max-width: 600px)"
              />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title font-weight-bold">
                    <a>{el.name}</a>
              </h4>
              {/* Data */}
              <ul className="list-unstyled list-inline rating mb-0">
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"> </i>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star-half-alt amber-text" />
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">4.5 (413)</p>
                </li>
              </ul>
             <p className="mb-2"><b>$</b> • 6000 - {el.skill}</p>
             <p className="mb-2 emailfont"><i className="fas fa-paper-plane" />  {el.email}</p>
             
              <hr className="my-4" />
 
                {/* Text */}
                <p className="card-text">
                    { //Some quick example text to build on the card title and make up the bulk of
                    //the card's content. 
                    el.description.split('', 55)
                    }
                </p>
              {/* Button 
              <a href="#" className="btn btn-flat deep-purple-text p-1 mx-0 mb-0">
                Button
              </a>*/}
              <div className="chip mr-0 waves-effect waves-effect"><a className='ahrefchip' href={`/detail/${el.id}`}>Detail</a></div>
            </div>
            {/* Card */}
          </div>

          </div>

          ))}

          </div>

          </div>

                  

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
