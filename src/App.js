import React, { Component } from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// connection.connect();

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/users'
})


class App extends Component{

  //const [name, setName] = useState("");
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
    this.setState({user: event.target.value});
  }

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      user: this.state = { username: '' },
      phone:"1234"
    }

    axios.get('http://localhost:8080/user')
    .then(response => response.data)
    .then((data) => {
      this.setState({ courses: data})
      console.log("state_courses :",this.state.courses)
    })

  }

  create_ = async () => {
    axios.post('http://localhost:8080/create',{
      name: this.state.user,
      phone: this.state.phone
    })

  }

    createPost = async () => {
      var data = [
        {
          firstName: 'Panupan',
          Email: 'Ball08573@hotmail.com'
        },
        {
          firstName: 'Ball',
          Email: 'Null'
        }
      ]

      // axios.post('/', data)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      console.log(data);
    }


  createCourse = async () => {
    let res = await api.post('/',
      {
        name:"Panupan",
        Email:"Ball08573@hotmail.com"
      }
    )
    console.log(res);
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
      <h1>Hello {this.state.username} Email: {this.state.phone}</h1>
      Enter your name:
      <input type='text' onChange={this.myChangeHandler}/>
      <button onClick={this.create_}>CREATE</button>
      <br/>


      <button onClick={this.createCourse}>createCourse</button>
      <button onClick={this.createPost}>createPost</button>
        <div>
          <ul>
            {this.state.courses.map(course =>(
              <li key={course.id}>
              Name: {course.name} | Phone: {course.phone}
              </li>
            ))}
          </ul>
        </div>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

}



export default App;
