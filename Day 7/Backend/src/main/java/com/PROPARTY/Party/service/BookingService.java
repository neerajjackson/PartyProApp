package com.PROPARTY.Party.service;

import java.util.List;

import com.PROPARTY.Party.dto.request.BookingRequest;
import com.PROPARTY.Party.dto.response.BookingResponse;

public interface BookingService {
    public List<BookingResponse> getAllBookings();

    public BookingResponse getBookingById(Long id);

    public BookingResponse createBooking(BookingRequest request);

    public BookingResponse updateBooking(Long id, BookingRequest request);

    public boolean deleteBooking(Long id);
}
