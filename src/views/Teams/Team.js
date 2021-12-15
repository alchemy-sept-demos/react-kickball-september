import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeamById } from '../../services/teams';

export default function Team(props) {
  const [team, setTeam] = useState({ players: [] });
  console.log(props);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(props.match.params.id);
      setTeam(data[0]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>Players</h2>
      {team.players.map((player) => (
        <Link to={`/players/${player.id}`} key={player.id}>
          {player.name}
        </Link>
      ))}
    </div>
  );
}
