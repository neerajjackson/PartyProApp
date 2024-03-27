package com.PROPARTY.Party.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccomFoodResponse {
    private Long id;
    private String name;
    private String price;
    private String category;
    private String Accomadation;
}
