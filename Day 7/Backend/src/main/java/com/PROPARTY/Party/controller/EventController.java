package com.PROPARTY.Party.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PROPARTY.Party.constant.Api;
import com.PROPARTY.Party.dto.request.EventRequest;
import com.PROPARTY.Party.dto.response.EventResponse;
import com.PROPARTY.Party.service.EventService;

import java.util.List;

@RestController
@RequestMapping(Api.EVENT)
public class EventController {

    private EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<EventResponse>> getAllevents() {
        List<EventResponse> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/{eid}")
    public ResponseEntity<EventResponse> getEvent(@PathVariable Long tid) {
        EventResponse event = eventService.getEvent(tid);
        return ResponseEntity.ok(event);
    }

    @PostMapping("/add")
    public ResponseEntity<EventResponse> createEvent(@RequestBody EventRequest request) {
        EventResponse createdEvent = eventService.createEvent(request);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @PutMapping("/{eid}")
    public ResponseEntity<EventResponse> updateEvent(@RequestBody EventRequest request, @PathVariable Long tid) {
        EventResponse updatedEvent = eventService.updateEvent(request, tid);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{eid}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long tid) {
        boolean deleted = eventService.deleteEvent(tid);
        return deleted ? ResponseEntity.ok().body("Successfully deleted "+tid):ResponseEntity.notFound().build();
    }
}
