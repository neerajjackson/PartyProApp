package com.PROPARTY.Party.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PROPARTY.Party.constant.Api;
import com.PROPARTY.Party.dto.request.FeedbackRequest;
import com.PROPARTY.Party.dto.response.FeedbackResponse;
import com.PROPARTY.Party.service.impl.FeedbackServiceImpl;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

    // UserContactController.java
@RestController
@RequestMapping(Api.FEEDBACK)
public class FeedbackController {

    private final FeedbackServiceImpl feedbackService;

    public FeedbackController(FeedbackServiceImpl feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/submit")
    public ResponseEntity<FeedbackResponse> submitContactForm(@RequestBody FeedbackRequest request) {
        FeedbackResponse response = feedbackService.saveFeedback(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}

