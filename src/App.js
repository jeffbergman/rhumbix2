
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    term: '',
    pic: '',
  }

  handleChange = evt => {
    this.setState({term: evt.target.value});
    console.log('term', this.state.term);
  }

  handleSubmit = async evt => {

    evt.preventDefault();
    console.log('here');
    try {
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`;
      console.log('url', url);
      const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`);
      console.log('res', res.data.data[0].images.original.url);
      this.setState({ pic: res.data.data[0].images.original.url });
    } catch (error) {
      console.log(error);
    }

  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            placeholder="Search for..."
            onChange={this.handleChange}
          />
        </form>
        <img src={this.state.pic} alt="pic"/>
      </>
    );

  }

}

export default App;
