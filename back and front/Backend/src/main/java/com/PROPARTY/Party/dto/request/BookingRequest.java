package com.PROPARTY.Party.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String userName;
    private String address;
    private String email;
    private String city;
    private String state;
    private String zipCode;
    private String eventLocation;
    private String eventTheme;
    private int guests;
    private String ageRange;
    private Date dateOfBirth;
}

