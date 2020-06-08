import React from 'react'
import {Tabs, Paper} from '@material-ui/core'
import Tab from '@material-ui/core/Tab' 

const footer = ({muscles, category, onSelect}) => {
    // Category is undefined at first
    // findIndex returns the index base on the condition
    const index = category ? muscles.findIndex(group =>
        group === category) + 1 : 0 ;
        // console.log(category)   

    // this handles the onchange i.e when the index changes.
    // onSelect changes the category i.e sets the index. 
    // The onSelect accepts a category i.e one body part.
    const selectEachItemHandler = (event, index) => 
        onSelect(index ===  0 ? '' : muscles[index - 1]) ;
    return (
    <Paper>
        <Tabs value={index} indicatorColor="primary" textColor="primary" centered
            onChange = {selectEachItemHandler}>
            <Tab label = "All" />
            {muscles.map((muscle) => {
                return <Tab label={muscle} key = {muscle} />
            })}
        </Tabs>
    </Paper>
    )
}

export default footer ;