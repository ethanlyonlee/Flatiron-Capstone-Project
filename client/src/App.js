import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import './App.css';
import Nav from "./Nav"
import Home from "./Home"
import Login from "./Login"
import Locations from "./Locations"
import Teams from "./Teams"
import Games from "./Games"
import TeamPage from './TeamPage';
import LocationPage from './LocationPage';
import SignUp from "./SignUp";
import Tickets from "./Tickets";
import Profile from "./Profile";
import Comments from "./Comments";
import CommentEditForm from "./CommentEditForm";

function App() {

  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [games, setGames] = useState([])
  const [commentData, setCommentData] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetch('/authorized_user')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(user => {
              setIsAuthenticated(true)
              setUser(user)
            })
        }
      })

    fetch('/games')
      .then(res => res.json())
      .then(gameData => setGames(gameData))
  }, []);

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("/teams")
      .then((r) => r.json())
      .then((team) => {
        setTeams(team);
      });
  }, []);

  useEffect(() => {
    fetch('/comments')
      .then(res => res.json())
      .then((data) => setCommentData(data))
  }, [])

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

  const updateComment = (id, formData) => {
    fetch(`/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedComment => {
        setCommentData(commentData.map((comment) => (comment.id === parseInt(id) ? updatedComment : comment)));
        console.log(history)
      });
  }

  return (
    <Router>
      <div className="App">
        <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Games">
            <Games games={games} user={user} />
          </Route>
          <Route exact path="/Locations">
            <Locations />
          </Route>
          <Route path="/Locations/:id">
            <LocationPage />
          </Route>
          <Route exact path="/Teams">
            <Teams teams={teams} />
          </Route>
          <Route path="/Teams/:id">
            <TeamPage />
          </Route>
          <Route path="/Tickets">
            <Tickets user={user} />
          </Route>
          <Route path="/Login">
            <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/Profile">
            <Profile user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route exact path="/Comments">
            <Comments commentData={commentData} setCommentData={setCommentData} addComment={addComment} userId={user ? user.id : null} />
          </Route>
          <Route path="/comments/:id/edit"
                render={({ match }) => (
                    <CommentEditForm
                    comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}
                    updateComment={updateComment}
                  />
                )}
              /> 
        </Switch> 
        <div id='footer'>
        </div>
      </div>
    </Router>
  );
}

export default App;
