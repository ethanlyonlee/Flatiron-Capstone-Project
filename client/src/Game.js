import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "./GameCard";

function Game() {
  const [{ data: game, error, status }, setGame] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/games/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((game) =>
          setGame({ data: game, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setGame({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section className="container-single">
      <div class="con-card-single">

            <img class="card-image" src={game.image} alt={game.name} />
            <h2 class="title-single">{game.name} </h2>
            
          <div class="con-single">
            <p>Date: {game.date}</p>
            <p>Time: {game.time}</p>
            <p>Venue: {game.venue}</p>
            <p>Comment: {game.comments}</p>
          </div>
           
        </div>
    </section>
  );
}

export default Game;
