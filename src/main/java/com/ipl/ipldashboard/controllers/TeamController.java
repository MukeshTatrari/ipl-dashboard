package com.ipl.ipldashboard.controllers;

import java.time.LocalDate;
import java.util.List;

import com.ipl.ipldashboard.model.Match;
import com.ipl.ipldashboard.model.Team;
import com.ipl.ipldashboard.service.TeamService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TeamController {

    private final TeamService teamService;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        return teamService.getTeam(teamName);
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {

        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return teamService.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }

    @GetMapping("/teams")
    public Iterable<Team> getTeams() {
        return teamService.getTeams();
    }
}
