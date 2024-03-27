package com.PROPARTY.Party.model;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Builder
@Data
@Table(name = "_booking")
public class Booking{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bid;

    @Column(length = 250,nullable = false)
    private String userName;

    @Column(length = 250,nullable = false)
    private String address;

    @Column(length = 250,nullable = false)
    private String email;

    @Column(length = 250,nullable = false)
    private String city;

    @Column(length = 250,nullable = false)
    private String state;

    @Column(length = 250,nullable = false)
    private String zipCode;

    @Column(length = 250,nullable = false)
    private String eventLocation;

    @Column(length = 250,nullable = false)
    private String eventTheme;

    @Column(length = 250,nullable = false)
    private int guests;

    @Column(length = 250,nullable = false)
    private String ageRange;

    @Column(length = 250,nullable = false)
    private Date dateOfBirth;

}
