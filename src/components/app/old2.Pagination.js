import React, {Component} from 'react'
import './css/MypgnCss.css'


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

let response ='';

class Pagination extends React.Component {
    constructor() {
      super();
      this.state = { data: [] };
    }
    async componentDidMount() {
        let p = this.props.match.params.type;
        //let getPage = page.split("&");

        response = await fetch(`http://34.226.154.250:3000/engineers/users?sort=&sortBy=`);
      
      
      const json = await response.json();
      this.setState({ data: json.data });
    }
    render() {
        let numpage = this.state.data.length;
        
        return (
        <>
        <div className="container container-fluid">
        <div className="row">

          {this.state.data.map(el =>(
                                <div className="container">
                                <div className="row">
                                  <div className="pgncss col">
                                    {/* Declare the pagination class */}
                                    <ul className=" pagination">
                                      {/* Specify the disabled class to style this item disabled */}
                                      <li className="page-item disabled">
                                        {/* Specify tabindex to make the link non navigatable */}
                                        <a className="page-link" href="#" tabIndex={-1}>
                                          Previous/{numpage}
                                        </a>
                                      </li>
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
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          Next
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
          )
          
          )}
          </div>
          </div>
        </>
     );
    }
}

export default Pagination
