import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchSmallCard extends Component {
  constructor(props) {
    super(props);
    const { match } = props;
    console.log(match.id);
  }
  render() {
    const { match, teamName } = this.props;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamsRoute = `/teams/${otherTeam}`;
    return (
      <div>
        <Link to={otherTeamsRoute}>
          <p> vs {otherTeam}</p>
        </Link>
        <p>
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </p>
      </div>
    );
  }
}

export default MatchSmallCard;
