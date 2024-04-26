package com.PROPARTY.Party.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PROPARTY.Party.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

    
}
