import {useEffect, useState} from "react"
import './App.css';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeSignIn from './HomeSignIn';
import Nav from './Nav';
import Game from './Game';
import Item from './Item';
import Comment from './Comment';
import Ticket from './Ticket';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  // const [data, setData] = useState(new Date());
  const [data, setData] = useState([]);
  const [allGameComments, setAllGameComments] = useState([]);
  const [games, setGames] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetch("/authorize_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

useEffect(fetchComments, [])

function fetchComments (){
  fetch(`/comments`)
  .then((res) => res.json())
  .then(data => setCommentData(data))
}

// useEffect(() => {
//   fetch(`/games`)
//     .then((res) => res.json())
//     .then(data => setGames(data));
// }, []);

const user_id = user.id

const addComment = (formData) => {
  fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(newComment => {
      setCommentData(commentData.concat(newComment))
    });
}

// const updateComment = (id, formData) => {
//   fetch(`/comments/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(res => res.json())
//     .then(updatedComment => {
//       setCommentData(commentData.map((comment) => (comment.id === parseInt(id) ? updatedComment : comment)));
//     });
// }


  if (!isAuthenticated)
    return (
      <Router>
      <HomeSignIn
        to="/login"
        error={"please login"}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
   </Router>
    ); else {

  return (
    <div className="Home">
      <header className="App-header">
        <Router>
        <Nav setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} name={user.name}/>
        <Routes>
          <Route exact path="/" element={<Home setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route exact path="/signin" element={<HomeSignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
          <Route exact path="/games" element={<Game setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} allGameComments={allGameComments} games={games} commentData={commentData} setCommentData={setCommentData} addComment={addComment}/>} />
          <Route path="/items" element={<Item setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path="/comments" element={<Comment user_id={user_id} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} commentData={commentData} setCommentData={setCommentData} addComment={addComment}/>} />
          <Route path="/tickets" element={<Ticket setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path="/calendar" element={<Calendar onChange={setData} value={data} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />       
        </Routes>
        </Router>
      </header>
    </div>
  );
}}

export default App;
