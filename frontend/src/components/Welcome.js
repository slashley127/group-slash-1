import React, {Component} from 'react';

class Welcome extends Component {
  state = {
    user: []
  };

  async componentDidMount() {
    const response = await fetch("/newUser");
    const body = await response.json();
    this.setState({user: body});
  }

  render() {
    const {user} = this.state;

    return(
      <div className='App'>
        <header className='App-header'>
          <div className='App-intro'>
            {user.map(user =>
            <h2 key={user.id}> Welcome {user.username}</h2>
            )}
          </div>
        </header>
      </div>
    )
  }

}

export default Welcome;