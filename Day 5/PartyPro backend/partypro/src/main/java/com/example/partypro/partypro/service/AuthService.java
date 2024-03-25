package com.example.partypro.partypro.service;

import com.example.partypro.partypro.dto.request.RegisterRequest;
import com.example.partypro.partypro.dto.request.UserRequest;
import com.example.partypro.partypro.dto.response.UserResponse;

public interface AuthService {
      boolean userRegistration(RegisterRequest request);

    UserResponse userAuthentication(UserRequest request);

    
}