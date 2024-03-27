package com.PROPARTY.Party.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PROPARTY.Party.constant.Api;
import com.PROPARTY.Party.dto.request.AccomFoodRequest;
import com.PROPARTY.Party.dto.response.AccomFoodResponse;
import com.PROPARTY.Party.service.AccomFoodService;

@RestController
@RequestMapping(Api.ACCOMFOOD)
public class AcommFoodController {

    @Autowired
    private AccomFoodService accomfoodService;

    @GetMapping("/all")
    public ResponseEntity<List<AccomFoodResponse>> getAllAccomFood() {
        List<AccomFoodResponse> accomfood = accomfoodService.getAllAccomFood();
        return ResponseEntity.ok(accomfood);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccomFoodResponse> getAccomFood(@PathVariable Long fid) {
        AccomFoodResponse accomfood = accomfoodService.getAccomFood(fid);
        return ResponseEntity.ok(accomfood);
    }

    @PostMapping("/add")
    public ResponseEntity<AccomFoodResponse> createAccomFood(@RequestBody AccomFoodRequest request) {
        AccomFoodResponse createdAccomFood = accomfoodService.createAccomFood(request);
        return new ResponseEntity<>(createdAccomFood, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccomFoodResponse> updateAccomFood(@RequestBody AccomFoodRequest request, @PathVariable Long fid) {
        AccomFoodResponse updatedAccomFood = accomfoodService.updateAccomFood(request, fid);
        return ResponseEntity.ok(updatedAccomFood);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAccomFood(@PathVariable Long fid) {
        boolean deleted = accomfoodService.deleteAccomFood(fid);
        return deleted ? ResponseEntity.ok().body("Successfully deleted "+fid):ResponseEntity.notFound().build();
    }
}
