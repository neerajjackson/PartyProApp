package com.PROPARTY.Party.constant;

import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String DEFAULT = "http://localhost:8080";
    public static final String AUTH = "/auth";
    public static final String USER = "/user";
    public static final String ADMIN = "/admin";
    public static final String EVENT = "/event";
    public static final String ACCOMFOOD = "/accomandfood";
    public static final String BOOKING = "/booking";
    public static final String FEEDBACK = "/feedback";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:5173");
}