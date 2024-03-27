package com.PROPARTY.Party.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PROPARTY.Party.dto.request.BookingRequest;
import com.PROPARTY.Party.dto.response.BookingResponse;
import com.PROPARTY.Party.model.Booking;
import com.PROPARTY.Party.repo.BookingRepo;
import com.PROPARTY.Party.service.BookingService;

@Service
public class BookingServiceImpl implements  BookingService {

    @Autowired
    private BookingRepo bookingRepository;

    @Override
    public List<BookingResponse> getAllBookings() {
        List<Booking> booking = bookingRepository.findAll();
        return booking.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    private BookingResponse convertToResponse(Booking booking) {
        BookingResponse response = new BookingResponse();
        BeanUtils.copyProperties(booking, response);
        return response;
    }

    public BookingResponse createBooking(BookingRequest request) {
        Booking booking = mapToBookingEntity(request);
        booking = bookingRepository.save(booking);
        return mapToBookingResponse(booking);
    }

   
    public BookingResponse getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
        return mapToBookingResponse(booking);
    }

   
    public BookingResponse updateBooking(Long id, BookingRequest request) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
        booking = mapToBookingEntity(request);
        booking.setBid(id);
        booking = bookingRepository.save(booking);
        return mapToBookingResponse(booking);
    }

    
    public boolean deleteBooking(Long id) {
        if(bookingRepository.existsById(id))
        {
            bookingRepository.deleteById(id);
            return true;
        }
        return false;
    }

    private Booking mapToBookingEntity(BookingRequest request) {
        return Booking.builder()
                .userName(request.getUserName())
                .address(request.getAddress())
                .email(request.getEmail())
                .city(request.getCity())
                .state(request.getState())
                .zipCode(request.getZipCode())
                .eventLocation(request.getEventLocation())
                .eventTheme(request.getEventTheme())
                .guests(request.getGuests())
                .ageRange(request.getAgeRange())
                .dateOfBirth(request.getDateOfBirth())
                .build();
    }

    private BookingResponse mapToBookingResponse(Booking booking) {
        return BookingResponse.builder()
                .bid(booking.getBid())
                .userName(booking.getUserName())
                .address(booking.getAddress())
                .email(booking.getEmail())
                .city(booking.getCity())
                .state(booking.getState())
                .zipCode(booking.getZipCode())
                .eventLocation(booking.getEventLocation())
                .eventTheme(booking.getEventTheme())
                .guests(booking.getGuests())
                .ageRange(booking.getAgeRange())
                .dateOfBirth(booking.getDateOfBirth())
                .build();
    }
}
