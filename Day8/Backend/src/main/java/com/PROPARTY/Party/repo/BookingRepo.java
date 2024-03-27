package com.PROPARTY.Party.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PROPARTY.Party.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long>{
    
}