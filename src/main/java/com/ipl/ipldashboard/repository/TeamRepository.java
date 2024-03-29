package com.ipl.ipldashboard.repository;

import com.ipl.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
