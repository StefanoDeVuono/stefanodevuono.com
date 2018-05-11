import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import moment from 'moment';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount(){
    const url = 'https://api.tumblr.com/v2/blog/stefanodevuono.tumblr.com/posts/',
          params = {api_key: "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"};

    axios(url, { params }).then( ({data: { response: { posts } } }) =>{
      this.setState({ posts });
    })
  }

  render(){
    const { posts } = this.state;
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item xs={10}>
          {posts.map( (post, index) => {
            const __html = post.body
            return (
              <Card key={index}>
                {(post.type === 'photo') && (
                  <img className="width-100"
                    src={post.photos[post.photos.length - 1].url}
                    srcSet={post.photos[0].alt_sizes.map( photo => (
                      `${photo.url} ${photo.width}w`
                    )).join(', ')}
                    alt="Contemplative Reptile"
                  />
                )}
                <CardContent>
                  <Typography variant="headline">{post.title}</Typography>
                  <Typography component="p"  dangerouslySetInnerHTML={{ __html }} />
                </CardContent>
                <CardActions>
                  <Typography component="p">
                    {moment(post.date, "YYYY-MM-DD HH:mm:ss Z").format('D MMMM YYYY')}
                  </Typography>
                </CardActions>
              </Card>
            )
          })}
        </Grid>
      </Grid>
    )
  }
}
