package com.PROPARTY.Party.service;

import java.util.List;

import com.PROPARTY.Party.dto.request.UserRequest;
import com.PROPARTY.Party.dto.response.UserResponse;
import com.PROPARTY.Party.model.enumerate.Role;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

    public List<UserResponse> getAdminUsers();

    public List<UserResponse> getCustomerUsers();

    public Role getUserRole(Long uid);

}

