import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import Form from './CharacterForm';
import ComplexCards from '../UI/Cards/ComplexCards';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Characters extends Component {
  render() {
    const { classes } = this.props;
        return (
            <div className={classes.root}>
            <Grid container spacing={24}>
                
                    {Object.keys(this.props.characters)
                                    .map((k,index) => {
                                        // return <li key={index}>{props.characters[k].name}</li>
                                        return <Grid item xs={6} sm={3} key={index}> <ComplexCards name = {this.props.characters[k].name}
                                        charClass={this.props.characters[k].class}
                                        level={this.props.characters[k].level} 
                                        
                                        />
                                        </Grid>
                                    })
                                }
            </Grid>
            </div>
        );
    }
}

Characters.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return { characters: state.characters };
}

export default compose(connect(mapStateToProps), withStyles(styles))(Characters)