package com.PROPARTY.Party.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.PROPARTY.Party.dto.request.UserRequest;
import com.PROPARTY.Party.dto.response.UserResponse;
import com.PROPARTY.Party.model.User;
import com.PROPARTY.Party.model.enumerate.Role;
import com.PROPARTY.Party.repo.UserRepository;
import com.PROPARTY.Party.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

   private final UserRepository userRepository;
   @Override
   public List<UserResponse> getAllUsers() {
       List<User> userList = userRepository.findAll();
       return userList.stream()
               .map(this::mapUserToUserResponse)
               .collect(Collectors.toList());
   }
   @Override
   public Role getUserRole(Long uid) {
    Optional<User> userOptional = userRepository.findById(uid);

    if (userOptional.isPresent()) {
        User user = userOptional.get();
        Role role = user.getRole();

        if (role != null) {
            return role;
        }
    }

    return null; 
}

   @Override
    public List<UserResponse> getAdminUsers() {
        if (hasAdminRole()) {
            List<User> adminUsers = userRepository.findByRole(Role.ADMIN);
            return adminUsers.stream()
                    .map(this::mapUserToUserResponse)
                    .collect(Collectors.toList());
        }
        return new ArrayList<>(); 
    }
    private boolean hasAdminRole() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("ADMIN"));
    }

	@Override
	public List<UserResponse> getCustomerUsers() {
        if (hasStudentRole()) {
            List<User> studentUsers = userRepository.findByRole(Role.CUSTOMER);
            return studentUsers.stream()
                    .map(this::mapUserToUserResponse)
                    .collect(Collectors.toList());
        }
        return new ArrayList<>(); 
    }
	private boolean hasStudentRole() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("CUSTOMER"));
    }


	    @Override
	    public UserResponse getUser(Long uid) {
	        User user = userRepository.findByUid(uid);
	        if (user != null) {
	            return mapUserToUserResponse(user);
	        } else {
	            return null;
	        }
	    }

	    @Override
	    public UserResponse updateUser(UserRequest request, Long uid) {
	    	 User user = userRepository.findByUid(uid);
	    	    if (user != null) {
	    	        user.setName(request.getName());
	    	        user.setEmail(request.getEmail());
	    	        
	    	        userRepository.save(user);
	    	        return mapUserToUserResponse(user);
	    	    } else {
	    	        return null;
	    	    }
	    }

	    @Override
	    public boolean deleteUser(Long uid) {
	        User user = userRepository.findByUid(uid);

	        if (user != null) {
	            userRepository.delete(user); // Use delete instead of deleteByUid
	            return true;
	        } else {
	            return false; // Handle user not found
	        }
	    }

	    private UserResponse mapUserToUserResponse(User user) {
	        return UserResponse.builder()
	                .uid(user.getUid())
	                .name(user.getName())
	                .password(user.getPassword())
	                .email(user.getEmail())
	                .role(user.getRole())
	                .isEnabled(user.getIsEnabled())
	                .build();
	    }


}