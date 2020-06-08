import React from 'react' ;
import {Grid, Paper, Typography, List} from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { muscles } from '../store';

const exercisess = ({exercises, category, onSelect, exercise: {
  id,
  title = 'Welcome',
  description = ' Please select an exercise from the left'

}}) => {
    const styles = {
      paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 350,
        overflowY: 'auto'
      }
    }

    return (
      <Grid container spacing={1}>
          <Grid item xs={6}> 
             <Paper style = {styles.paper}>
              {exercises.map(([groups, exercises], index) => {               
                return ( 
                  !category || category === groups ? 
                   <div key={index}>
                    <Typography variant = "h6" style = {{textTransform: 'capitalize'}} key ={groups}>
                    {groups}
                    </Typography>
                    {exercises.map(( {id, title} ) => {
                      return (
                        <List component="ul" aria-label="secondary mailbox folders" key = {title}>
                          <ListItem onClick = {() => onSelect(id)}>
                            <ListItemText primary={title} 
                            style = {{margin:-5}}
                            />
                          </ListItem>
                        </List>
                      )
                    })}
                  </div>
                  : 
                  null
                ) 
                })}  
              </Paper>
          </Grid>

          <Grid item xs={6}> 
            <Paper style= {styles.paper}>
              <Typography variant= 'h4'>
                {title}
              </Typography>
              <Typography style= {{marginTop: 20}}>
                {description}
              </Typography>
            </Paper>
          </Grid>
      </Grid>
    )
}

export default exercisess