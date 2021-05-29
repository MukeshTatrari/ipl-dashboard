package com.ipl.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.ipl.ipldashboard.model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends CrudRepository<Match,Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);
    
    default List<Match> findLatestMatchesByTeam(String teamName,int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName,teamName, PageRequest.of(0, count));
    }

    List<Match> getByTeam1OrTeam2AndDateBetweenOrderByDateDesc(String teamName1,String teamName2,LocalDate date1, LocalDate date2);
}
