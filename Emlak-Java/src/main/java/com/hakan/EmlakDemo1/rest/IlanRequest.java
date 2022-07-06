package com.hakan.EmlakDemo1.rest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IlanRequest implements Serializable {

    private String ilanTuru;
    private String odaSayisi;
    private String kullanimAlani;
    private String binaKati;
    private String isinma;
    private Integer userId;
    private String baslik;
    private String ilanAdres;
    private String aciklama;


}
