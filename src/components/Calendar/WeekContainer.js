import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Day from './Day';
import List from '@material-ui/core/List';

const ExpansionPanel = withStyles({
  root: {
    borderRadius: 4,
    margin: '10px auto',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    flexGrow: '0 !important',
    width: '100%',

    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      flexGrow: 0,
      width: '290px'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: '6px 16px 0px 16px'
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#070707'
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  logo: {
    width: '100%',
    marginRight: '0',
    marginBottom: '2%',
    marginTop: '1%',

    '& img': {
      width: '80%',
      marginRight: '0',
      marginBottom: '2%',
      marginTop: '1%'
    }
  }
}));

const WeekContainer = (props) => {
  const classes = useStyles();
  const calendar = props.calendar;
  const workouts = props.workoutList;
  const week = calendar.slice(0, 7);
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <main>
          <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary aria-controls='panel1d-content' id='panel1d-header'>
              <Typography>Week 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography component='div'>
                <List className={classes.root}>
                  {week.map((day) => (
                    <Day key={day.id} calendar={calendar} day={day} workouts={workouts} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary aria-controls='panel2d-content' id='panel2d-header'>
              <Typography>Week 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {week.map((day) => (
                    <Day key={day.id} calendar={calendar} day={day} workouts={workouts} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary aria-controls='pane3d-content' id='panel3d-header'>
              <Typography>Week 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {week.map((day) => (
                    <Day key={day.id} calendar={calendar} day={day} workouts={workouts} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary aria-controls='pane3d-content' id='panel3d-header'>
              <Typography>Week 4</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <List className={classes.root}>
                  {week.map((day) => (
                    <Day key={day.id} calendar={calendar} day={day} workouts={workouts} />
                  ))}
                </List>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default WeekContainer;
