package com.PROPARTY.Party.service;

import com.PROPARTY.Party.dto.request.AuthenticationRequest;
import com.PROPARTY.Party.dto.request.RegisterRequest;
import com.PROPARTY.Party.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);
    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
