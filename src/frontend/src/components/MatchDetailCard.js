import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MatchDetailCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {match,teamName} = this.props;
        const otherTeam = match.team1===teamName?match.team2:match.team1;
        const otherTeamsRoute = `/teams/${otherTeam}`;
        if(!match){
            return null;
        }
        return (
            <div>
                <h3>Latest Matches</h3>
                <h1> <Link to={otherTeamsRoute}>vs {otherTeam}</Link></h1>
                <h2>{match.date}</h2>
                <h3>at {match.venue}</h3>
                <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
        );
    }
}

export default MatchDetailCard;