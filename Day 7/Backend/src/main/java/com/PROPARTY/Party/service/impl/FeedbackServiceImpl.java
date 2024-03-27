package com.PROPARTY.Party.service.impl;

import org.springframework.stereotype.Service;

import com.PROPARTY.Party.dto.request.FeedbackRequest;
import com.PROPARTY.Party.dto.response.FeedbackResponse;
import com.PROPARTY.Party.model.Feedback;
import com.PROPARTY.Party.repo.FeedbackRepo;
import com.PROPARTY.Party.service.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepo feedbackRepository;

    public FeedbackServiceImpl(FeedbackRepo feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    public FeedbackResponse saveFeedback(FeedbackRequest request) {
        FeedbackResponse feedback1 = new FeedbackResponse();
        feedback1.setFirstname(request.getFirstname());
        feedback1.setEmailid(request.getEmailid());
        feedback1.setMobile(request.getMobile());
        feedback1.setSubject(request.getSubject());
        feedback1.setQuery(request.getQuery());
        
        feedback1 = feedbackRepository.save(feedback1);

        FeedbackResponse response = new FeedbackResponse();
        response.setId(feedback1.getId());
        response.setFirstname(feedback1.getFirstname());
        response.setEmailid(feedback1.getEmailid());
        response.setMobile(feedback1.getMobile());
        response.setSubject(feedback1.getSubject());
        response.setQuery(feedback1.getQuery());

        return response;
    }
}