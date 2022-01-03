import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/teams';

import './Teams.css';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div className="teams">
      <h1>Teams</h1>
      {teams.map((team) => (
        <Link key={team.id} to={`/teams/${team.id}`}>
          {team.name}
        </Link>
      ))}
    </div>
  );
}
