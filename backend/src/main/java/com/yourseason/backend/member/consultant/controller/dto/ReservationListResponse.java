package com.yourseason.backend.member.consultant.controller.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReservationListResponse {

    private Long reservationId;
    private LocalDate reservationDate;
    private LocalTime reservationTime;
    private String request;
}
