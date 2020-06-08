import React from 'react';
import './App.css';
import {Header, Footer} from './Components/Layouts'
import Exercises from './Components/Exercises/Exercises'
import {muscles, exercises} from './Components/store'

// const my = [
//   {song: 'marima'} ,
//   {live: true}
//   ] 
// const x = my.find(ex => ex.song === 'marima') ;
// console.log(x)


function App() {

  const [state, setState] = React.useState({category: ''}) ;
  const [newState, setnewState] = React.useState({
    exercises, 
    exercise:{}
  }) ;
  

  // We have to convert to an array over this so we can map over it.
  const getExercisesByMuscles = () => {
    return Object.entries(exercises.reduce((exercises, exercise) => {
      //destructure muscles and save it into muscle variable
      const {muscles} = exercise ;
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    }, [])
    )
  }
  
  // We passed in 'category' as an argument here because we have different catrgories
  // category rep each of the muscles to be selected
  // i.e different muscle parts. The category stand for each body part.
  // This setStates allows us set the category based on which body part is selected.
  const selectItemHandler = (category) => {
    setState({category})
  }

  const handleList = id => {
    setnewState((prevState) => ({ 
    ...newState,
    exercise: prevState.exercises.find(ex => ex.id === id)
    }))
  }

  const myexercises = getExercisesByMuscles(), {category} = state,
  {exercise} = newState
  
  // console.log(myexercises)
 


  return (
    <div className="App">
      <Header />
      <Exercises exercises = {myexercises}
        category = {category}
        onSelect = {handleList}
        exercise = {exercise} 
      />
      <Footer muscles = {muscles} category = {category} 
        onSelect = {selectItemHandler}
      />
    </div>
  );
}

export default App;
