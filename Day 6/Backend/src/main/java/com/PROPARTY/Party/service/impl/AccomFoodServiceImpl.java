package com.PROPARTY.Party.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PROPARTY.Party.dto.request.AccomFoodRequest;
import com.PROPARTY.Party.dto.response.AccomFoodResponse;
import com.PROPARTY.Party.model.AccomFood;
import com.PROPARTY.Party.repo.AccomFoodRepo;
import com.PROPARTY.Party.service.AccomFoodService;

@Service
public class AccomFoodServiceImpl implements AccomFoodService {

    @Autowired
    private AccomFoodRepo accomfoodRepository;

    @Override
    public List<AccomFoodResponse> getAllAccomFood() {
        List<AccomFood> accomfood = accomfoodRepository.findAll();
        return accomfood.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public AccomFoodResponse getAccomFood(Long fid) {
        AccomFood accomfood = accomfoodRepository.findById(fid)
                .orElseThrow(() -> new RuntimeException("Accomadation and Food not found with id: " + fid));
        return convertToResponse(accomfood);
    }

    @Override
    public AccomFoodResponse createAccomFood(AccomFoodRequest request) {    
        AccomFood accomfood = new AccomFood();
        BeanUtils.copyProperties(request, accomfood);
        AccomFood savedAccomFood = accomfoodRepository.save(accomfood);
        return convertToResponse(savedAccomFood);
    }
    

    @Override
    public AccomFoodResponse updateAccomFood(AccomFoodRequest request, Long fid) {
        AccomFood accomfood = accomfoodRepository.findById(fid)
                .orElseThrow(() -> new RuntimeException("Food and Accomadation not found with id: " + fid));
        BeanUtils.copyProperties(request, accomfood);
        AccomFood updatedAccomFood = accomfoodRepository.save(accomfood);
        return convertToResponse(updatedAccomFood);
    }

    @Override
    public boolean deleteAccomFood(Long fid) {
        if (accomfoodRepository.existsById(fid)) {
            accomfoodRepository.deleteById(fid);
            return true;
        }
        return false;
    }

    private AccomFoodResponse convertToResponse(AccomFood accomfood) {
        AccomFoodResponse response = new AccomFoodResponse();
        BeanUtils.copyProperties(accomfood, response);
        return response;
    }
}
