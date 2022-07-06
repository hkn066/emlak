package com.hakan.EmlakDemo1.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","ilans"})
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "ad", nullable = true)
    private String ad;

    @Column(name = "soyad", nullable = true)
    private String soyad;

    @Column(name = "cepno", nullable = true)
    private String cepNo;

    @Column(name = "email", nullable = true)
    private String email;

    @Column(name="password")
    private String password;

    @Column(name = "adres")
    private String adres;

  //@OneToMany( mappedBy = "user")
   // private Set<Ilan> ilans;

    @Column(name = "isletmeAdi")
    private String isletmeAdi;

    @Column(name = "isletmeAdres")
    private String isletmeAdres;

    @Column(name = "fax")
    private String fax;

    @Column(name = "isletmeTelefon")
    private String isletmeTelefon;

}




