package com.PROPARTY.Party.service;

import com.PROPARTY.Party.dto.request.FeedbackRequest;
import com.PROPARTY.Party.dto.response.FeedbackResponse;


public interface FeedbackService {
    FeedbackResponse saveFeedback(FeedbackRequest request);

}
