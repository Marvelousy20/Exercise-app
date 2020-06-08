import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

function header() {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant = "h5">
            Exercises App
          </Typography>
        </Toolbar>
      </AppBar>
    )}

export default header ;