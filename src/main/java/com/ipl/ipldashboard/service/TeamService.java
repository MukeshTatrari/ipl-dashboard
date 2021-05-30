package com.ipl.ipldashboard.service;

import java.time.LocalDate;
import java.util.List;

import com.ipl.ipldashboard.model.Match;
import com.ipl.ipldashboard.model.Team;
import com.ipl.ipldashboard.repository.MatchRepository;
import com.ipl.ipldashboard.repository.TeamRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;

    public Team getTeam(String teamName) {

        Team team = teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    public List<Match> getMatches(String teamName,LocalDate date1, LocalDate date2){
        return matchRepository.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(teamName, date1, date2,teamName, date1, date2);
    }

    public List<Match> getMatchesByTeamBetweenDates(String teamName,LocalDate dateStart, LocalDate dateEnd){
        return matchRepository.getMatchesByTeamBetweenDates(teamName, dateStart, dateEnd);
    }
}
