package com.PROPARTY.Party.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccomFoodRequest {
    private String name;
    private String price;
    private String category;
    private String Accomadation;
}
