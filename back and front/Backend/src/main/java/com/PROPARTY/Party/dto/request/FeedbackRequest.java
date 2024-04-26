package com.PROPARTY.Party.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {
    private int id;
	private String firstname;
	private String emailid;
	private Long mobile;
	private String subject;
	private String query;
}
