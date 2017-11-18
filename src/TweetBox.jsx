import React, { Component } from 'react';
import { Textarea } from 'reactbulma';
import { Button } from 'reactbulma';
import { Box } from 'reactbulma';

class TweetBox extends Component {

constructor(props) {
  super(props);
  this.state = {
    text: "",
    charsRemaining: 140
  }
}

  handleChange(text){
    this.setState(
      { text: text ,
      charsRemaining: 140 - text.length
    })
  }

  render() {
    return (
      <div>
        <Textarea
          placeholder={this.props.prompt}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <Box>
          { this.state.charsRemaining} Characters Remaining
        </Box>
        <Button primary
          onClick={() => this.props.onTweet(this.state.text)}
          disabled={ this.state.charsRemaining < 0 }
          style={{ marginBottom: 25 }}
        >
          Tweet{" "}
        </Button>
      </div>
    );
  }
}

export default TweetBox;
