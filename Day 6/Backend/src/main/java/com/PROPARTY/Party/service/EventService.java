package com.PROPARTY.Party.service;

import java.util.List;

import com.PROPARTY.Party.dto.request.EventRequest;
import com.PROPARTY.Party.dto.response.EventResponse;

public interface EventService {

    List<EventResponse> getAllEvents();

    EventResponse getEvent(Long tid);

    EventResponse createEvent(EventRequest request);

    EventResponse updateEvent(EventRequest request, Long tid);

    boolean deleteEvent(Long tid);

}
