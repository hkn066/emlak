package com.hakan.EmlakDemo1.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hakan.EmlakDemo1.enumeration.EnumIlanTuru;
import com.hakan.EmlakDemo1.enumeration.EnumIsinma;
import com.hakan.EmlakDemo1.enumeration.EnumOdaSayisi;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;



@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ilan")
@Builder
public class Ilan implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "user_id" )

    private User user;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "ilanTuru", nullable = false)
    private EnumIlanTuru ilanTuru;


    @Enumerated(EnumType.ORDINAL)
    @Column(name = "odaSayisi", nullable = false)
    private EnumOdaSayisi odaSayisi;

    @Column(name = "kullanimAlani", nullable = false)
    private Integer kullanimAlani;

    @Column(name = "binaKati", nullable = false)
    private Integer binaKati;

    @Column(name = "aciklama", nullable = false)
    private String aciklama;

    @Column(name = "ilanAdres", nullable = false)
    private String ilanAdres;

    @Column(name = "baslik", nullable = false)
    private String baslik;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "isinma", nullable = false)
    private EnumIsinma isinma;


}
