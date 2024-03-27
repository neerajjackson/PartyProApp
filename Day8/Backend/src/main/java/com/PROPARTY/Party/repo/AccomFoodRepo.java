package com.PROPARTY.Party.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PROPARTY.Party.model.AccomFood;

@Repository
public interface AccomFoodRepo extends JpaRepository<AccomFood, Long>{
    
}
