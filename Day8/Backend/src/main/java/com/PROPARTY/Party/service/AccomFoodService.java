package com.PROPARTY.Party.service;

import java.util.List;

import com.PROPARTY.Party.dto.request.AccomFoodRequest;
import com.PROPARTY.Party.dto.response.AccomFoodResponse;

public interface AccomFoodService {

    List<AccomFoodResponse> getAllAccomFood();

    AccomFoodResponse getAccomFood(Long fid);

    AccomFoodResponse createAccomFood(AccomFoodRequest request);

    AccomFoodResponse updateAccomFood(AccomFoodRequest request, Long fid);

    boolean deleteAccomFood(Long fid);
}
