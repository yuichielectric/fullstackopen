import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);

  const initialPoints = new Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(initialPoints);

  const nextAnecdote = () => {
    const number = Math.floor(Math.random() * anecdotes.length);
    setSelected(number);
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const getMostVoted = () => points.reduce((a, b) => Math.max(a, b));
  const getMostVotedAnecdote = () => anecdotes[points.indexOf(getMostVoted())];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <p>
        <button onClick={() => vote()}>vote</button>
        <button onClick={() => nextAnecdote()}>next anecdote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <p>{getMostVotedAnecdote()}</p>
      <p>has {getMostVoted()} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
