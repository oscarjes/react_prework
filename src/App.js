import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tweets: [
        {
          text: "What a wonderful",
          liked: true
        },
        {
          text: "World",
          liked: false
        }
      ]
    }
  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false
    }

    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });

    this.setState({
      tweets
    })
    
  }

  handleDelete(tweet) {
    let tweets = this.state.tweets.filter( (t) => {
      return (t.text !== tweet.text);
    })

    this.setState({
      tweets
    })
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoderSchool Prework</h1>
        </header>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 25,
          }}>
          <div style={{ width: 500 }}>
            <TweetBox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
          </div>
          <div style={{ width: 500 }}>
            { this.state.tweets.map( tweet => 
              <Tweet 
                tweet={tweet}
                handleLike={this.handleLike.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
