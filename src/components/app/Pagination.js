// FILE: App.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import './css/MyCss.css'
import { 
  
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
 } from "react-router-dom";

    //let sort = useParams();
    //let split = sort.split("&")
    let a="desc";
    let response ='';
    let keysort ={};
    let sortType='';
    let sortBy='';
    let limit='';
    let page ='';

class Pagination extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    let sort= this.props.match.params.id?this.props.match.params.id:'&&&';
    keysort = sort.split("&");
     sortType = keysort[0] ? keysort[0]:'desc';
     sortBy = keysort[1] ? keysort[1]:'date_updated';
     limit = keysort[2] ? keysort[2]:12;
     page = keysort[3] ? keysort[3]:'';
    if(page!=null)
    {
      response = await fetch(`http://34.226.154.250:3000/engineers/users`);
    }
    
    // if(sort){
    //     keysort = sort.split("&");
    //   response = await fetch(`http://34.226.154.250:3000/engineers/users?sort=${keysort[0]}&sortBy=${keysort[1]}&limit=1000`);
    // }
    // else
    // {
    //   response = await fetch(`http://34.226.154.250:3000/engineers/users?sort=&sortBy=&limit=1000`);
    // }
    
    const json = await response.json();
    this.setState({ data: json.data });
  }
 
  render() {

    //let sort= this.props.match.params.id? this.props.match.params.id : '' ;
    //let keysort = sort.split("&") ? sort.split("&"):'';
 
    //let numpage = this.state.data.length;
    //let divpage = numpage/3;
    let countpage = {};
    if(page)
    {
      countpage = Math.ceil(this.state.data.length/keysort[2]);
    }
    else
    {
      countpage=6;
    }
    let data2=[];
    for (let i = 0; i < countpage; i++) {
      data2[i]= i +1;
    }

    return (
    <>

    <div className="container">
        <div className="row">
            <div className="pgncss col">
            {/* Declare the pagination class */}
            <ul className=" pagination">
                {/* Specify the disabled class to style this item disabled */}
                <li className="page-item disabled">
                {/* Specify tabindex to make the link non navigatable */}
                <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                </a>
                </li>
        {/* {this.state.data.map(el =>(

                <li className="page-item">
                <a className="page-link" href="#">
                    1
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    2
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">
                    3
                </a>
                </li>
                )
        
        )}  */} {    
            
                    data2.map(el => ( 
                    <>
                        <li className="page-item">
                        <a className="page-link" href={sortType+`&`+sortBy+`&`+limit+`&${el}`}>
                            {el}
                        </a>
                        </li>
                    </>

        ))}

        {

        }
        <li className="page-item">
        <a className="page-link" href="#">
                    Next
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>

    </>
 );
}

}
export default Pagination;

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
