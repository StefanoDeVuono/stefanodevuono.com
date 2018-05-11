import React from 'react';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardContent } from 'material-ui/Card';

import { GithubCircle, TwitterCircle, Linkedin } from 'mdi-material-ui';




export default () => (
  <div className="page">
    <Card elevation={0} >
      <CardContent>
        <Avatar
          src="//static.tumblr.com/ga2ilek/ipUo1bxbk/stefano.jpg"
        />
        <p>
          I'm a San Francisco-based software engineer. I've often straddled the line between art and technology, design and code. I wrote my first university essay on emacs on my new Linux install. I ran a dance company and taught myself JavaScript to make a more interactive website. I've dabbled in design (print and UX). I've worked on back-ends and front-ends. I've worked as a web (and sometimes embedded hardware) developer a digital art startup, where I <a href="http://patft.uspto.gov/netacgi/nph-Parser?patentnumber=9137415"> patented a digital image security system</a> I designed. I currently consult, contribute to open source, and travel.
        </p>
      </CardContent>
    </Card>
    <List subheader="Contact info">
      <a href="//github.com/StefanoDeVuono">
        <ListItem>
          <ListItemIcon>
            <GithubCircle />
          </ListItemIcon>
          <ListItemText primary="StefanoDeVuono" />
        </ListItem>
      </a>
      <a href="//twitter.com/StefanoDeVuono">
        <ListItem>
          <ListItemIcon>
            <TwitterCircle />
          </ListItemIcon>
          <ListItemText primary="@StefanoDeVuono" />
        </ListItem>
      </a>
      <a href="//www.linkedin.com/in/stefanodevuono">
        <ListItem>
          <ListItemIcon>
            <Linkedin />
          </ListItemIcon>
          <ListItemText primary="stefanodevuono" />
        </ListItem>
      </a>
    </List>
  </div>
)
