// FILE: App.js
import React, { Component, Button } from "react";
import Modal from 'react-modal'
import ReactDOM from "react-dom";
import axios from 'axios';
import './css/MyCss.css'
import useState from 'usestate';
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  button
 } from "react-router-dom";

class DetailData extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {

    // axios.get('http://34.226.154.250:3000/engineers/user/7131ffd7-b702-51d8-b6d0-a91af1b9e87f')
    // .then(res =>{
    //     console.log('joijoimkimoi' + res.data.values);
        
    //     this.setState({ data: res.data[1].values })
    // })
    // .catch(err => {
    //     alert('errorr')
    // })
    let response = await fetch(`http://34.226.154.250:3000/engineers/user/7131ffd7-b702-51d8-b6d0-a91af1b9e87f`);
      
    // }
    
    
    const json = await response.json();
    console.log(this.setState({ data: json.values }));
  }
  render() {
    const [show, setShow] = useState(false);

    return (
      <>
      <main>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
      </>
    );
  }
}
export default DetailData;
