import React, { Component } from 'react';
import { Box } from 'reactbulma';
import { Button } from 'reactbulma';



class Tweet extends Component {

  render() {
    let tweet = this.props.tweet;
    return (
      <Box>
        {tweet.text}
        <br/>
        <br/>
        <Button info small onClick={() => this.props.handleLike(tweet)}>{tweet.liked ? 'Unlike' : 'Like'} Post</Button>
        <Button danger small style={{marginLeft: 10}} onClick={() => this.props.handleDelete(tweet)}>Delete Post</Button>
      </Box>
    )
  }
}

export default Tweet;
