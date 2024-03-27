package com.PROPARTY.Party.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PROPARTY.Party.dto.request.EventRequest;
import com.PROPARTY.Party.dto.response.EventResponse;
import com.PROPARTY.Party.model.Event;
import com.PROPARTY.Party.repo.EventRepo;
import com.PROPARTY.Party.service.EventService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventServiceImpl implements EventService {

    private EventRepo eventRepository;

    @Autowired
    public EventServiceImpl(EventRepo eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public List<EventResponse> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public EventResponse getEvent(Long tid) {
        Event event = eventRepository.findById(tid)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + tid));
        return convertToResponse(event);
    }

    @Override
    public EventResponse createEvent(EventRequest request) {
        Event event = new Event();
        BeanUtils.copyProperties(request, event);
        Event savedEvent = eventRepository.save(event);
        return convertToResponse(savedEvent);
    }

    @Override
    public EventResponse updateEvent(EventRequest request, Long tid) {
        Event event = eventRepository.findById(tid)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + tid));
        BeanUtils.copyProperties(request, event);
        Event updatedEvent = eventRepository.save(event);
        return convertToResponse(updatedEvent);
    }

    @Override
    public boolean deleteEvent(Long tid) {
        if (eventRepository.existsById(tid)) {
            eventRepository.deleteById(tid);
            return true;
        }
        return false;
    }

    private EventResponse convertToResponse(Event event) {
        EventResponse response = new EventResponse();
        BeanUtils.copyProperties(event, response);
        return response;
    }

}
