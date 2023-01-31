import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handlePClick = this.handlePClick.bind(this); para substituir essa linha basta passar uma arrow function para o método
  //   this.state = {
  //     name: "Alessandra Murat",
  //     counter: 0,
  //   };
  // }
  //para eliminar o constructor podemos utilizar o class field que permite criar atributos na classe sem depender do constructor

  state = {
    name: "Alessandra Murat",
    counter: 0,
  };

  handlePClick = () => {
    this.setState({ name: "Alessandra Gabriele" });
  };

  handleLinkClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    // const name = this.state.name;
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleLinkClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o Link
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
