package com.PROPARTY.Party.dto.response;

import com.PROPARTY.Party.model.User;
import com.PROPARTY.Party.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
	private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
    private User user;
}
