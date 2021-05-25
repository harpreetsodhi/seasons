import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  state = { lat: null, errMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    else {
      if (this.state.errMessage) {
        return <div>{this.state.errMessage}</div>;
      }
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return <div style={{ border: '2px solid red' }}>
      {this.renderContent()}
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)