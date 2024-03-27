package com.PROPARTY.Party.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PROPARTY.Party.model.Event;

public interface EventRepo extends JpaRepository<Event,Long> {
    
}
