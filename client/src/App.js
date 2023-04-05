import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "hello" };
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}
export default App;
