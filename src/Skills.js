import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';

import {
  Nodejs, LanguageJavascript as Javascript, React as Reactjs, Git, Docker,
  Dns, AccountOutline as UserExperience, CellphoneLink as UserInterface
} from 'mdi-material-ui';

import {
  Mithril, Postgres, HtmlCss, Mongo, Inkscape, Sketch, Rails, Linux
} from './Icons';

const Skill = (props) => (
  <ListItem>
    <ListItemIcon>
      {props.children}
    </ListItemIcon>
    <ListItemText>
      <div>
        {props.name}
      </div>
      <LinearProgress variant="buffer" value={props.level} valueBuffer={100} />
    </ListItemText>

  </ListItem>
)

const FrontEnd = () => (
  <Grid item className="width-240px">
    <Typography variant="body2">
      Front End
    </Typography>
    <Paper>
      <List disablePadding>
        <Skill name="HTML/CSS" level={70}><HtmlCss /></Skill>
        <Skill name="JavaScript" level={80}><Javascript /></Skill>
        <Skill name="Mithril.js" level={80}><Mithril /></Skill>
        <Skill name="React.js" level={60}><Reactjs /></Skill>
      </List>
    </Paper>
  </Grid>
)

const BackEnd = () => (
  <Grid item className="width-240px">
    <Typography variant="body2">
      Back End
    </Typography>
    <Paper>
      <List disablePadding>
        <Skill name="Node.js" level={80}><Nodejs /></Skill>
        <Skill name="Ruby on Rails" level={70}><Rails /></Skill>
      </List>
    </Paper>
  </Grid>
)

const Databases = () => (
  <Grid item className="width-240px">
    <Typography variant="body2">
      Databases
    </Typography>
    <Paper>
    <List disablePadding>
      <Skill name="PostgreSQL/MySQL" level={60}><Postgres /></Skill>
      <Skill name="MongoDB" level={80}><Mongo /></Skill>
    </List>
  </Paper>
  </Grid>
)

const SystemsOps = () => (
  <Grid item className="width-240px">
    <Typography variant="body2">
      Systems/Ops
    </Typography>
    <Paper>
      <List disablePadding>
        <Skill name="Git" level={50}><Git /></Skill>
        <Skill name="Linux" level={80}><Linux /></Skill>
        <Skill name="Docker" level={40}><Docker /></Skill>
        <Skill name="DNS" level={50}><Dns /></Skill>
      </List>
    </Paper>
  </Grid>
)

const Design = () => (
  <Grid item className="width-240px">
    <Typography variant="body2">
      Design
    </Typography>
    <Paper>
    <List disablePadding>
      <Skill name="User Testing/Research" level={10}><UserExperience /></Skill>
      <Skill name="User Interface" level={10}><UserInterface /></Skill>
      <Skill name="Sketch" level={20}><Sketch /></Skill>
      <Skill name="Inkscape" level={20}><Inkscape /></Skill>
    </List>
  </Paper>
  </Grid>
)

export default () => (
  <Grid container>
    <Grid item xs={12}>
      <Grid container justify="center"  alignItems="center" spacing={16}>
        <FrontEnd />
        <BackEnd />
        <Databases />
      </Grid>
      <Grid container justify="center"  alignItems="center" spacing={16}>
        <SystemsOps />
        <Design />
      </Grid>
    </Grid>
  </Grid>
)
