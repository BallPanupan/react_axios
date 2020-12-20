import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/users'
})


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }

    axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then((data) => {
      this.setState({ courses: data})
      console.log("state_courses :",this.state.courses)
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
      <button onClick={this.createCourse}>createCourse</button>
      <button onClick={this.createPost}>createPost</button>
        <div>
          <ul>
            {this.state.courses.map(course =>(
              <li key={course.id}>
              Name: {course.name}
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
