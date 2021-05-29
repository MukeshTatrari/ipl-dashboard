import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import {useParams } from 'react-router-dom';

export const MatchPage = () => {
  const [team, setTeam] = useState({matches:[]});
  const {teamName} = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}`
      );
      const data = await response.json();
      setTeam(data);
    };
    fetchTeam();
  },[teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div>
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName}  match = {team.matches[0]}/>
      {team.matches.slice(1).map(match=><MatchSmallCard key={match.id} match={match} teamName={team.teamName} />)}
    </div>
  );
};

export default MatchPage;
