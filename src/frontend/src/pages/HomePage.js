import React, { Component } from "react";
import "./HomePage.scss";
import { TeamTile } from "../components/TeamTile";
import axios from 'axios';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
  fetcTeams = () => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/teams`;
    axios
      .get(url)
      .then((response) => {
        this.setState({ teams: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetcTeams();
  }
  render() {
    const { teams } = this.state;
    return (
      <div className="HomePage">
        <div className="header-section">
          <h1 className="app-name">IPL Dashboard</h1>
        </div>
        <div className="team-grid">
          {teams.map((team) => (
            <TeamTile key={team.id} teamName={team.teamName} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
