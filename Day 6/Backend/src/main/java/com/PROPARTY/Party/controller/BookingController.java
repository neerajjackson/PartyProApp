package com.PROPARTY.Party.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PROPARTY.Party.constant.Api;
import com.PROPARTY.Party.dto.request.BookingRequest;
import com.PROPARTY.Party.dto.response.BookingResponse;
import com.PROPARTY.Party.service.BookingService;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(Api.BOOKING)
public class BookingController {
    
    @Autowired
    private BookingService bookingService;

    @GetMapping("/all")
    public ResponseEntity<List<BookingResponse>> getAllBooking()
    {
        List<BookingResponse> booking=bookingService.getAllBookings();
        return ResponseEntity.ok(booking);
    }
    

    @PostMapping("/saveBooking")
    public ResponseEntity<BookingResponse> createBooking(@RequestBody BookingRequest request) {
        BookingResponse response = bookingService.createBooking(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/getAll/{id}")
    public ResponseEntity<BookingResponse> getBookingById(@PathVariable Long id) {
        BookingResponse response = bookingService.getBookingById(id);
        return ResponseEntity.ok().body(response);
    }

    @PutMapping("/putById/{id}")
    public ResponseEntity<BookingResponse> updateBooking(@PathVariable Long id, @RequestBody BookingRequest request) {
        BookingResponse response = bookingService.updateBooking(id, request);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        boolean isDeleted= bookingService.deleteBooking(id);
        // return ResponseEntity.noContent().build();
        return isDeleted?ResponseEntity.ok().body("Successfully Deleted "+id):ResponseEntity.notFound().build();
    }
}
