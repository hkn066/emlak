import { ListGroup, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import BaseServices from "../Services/baseService";
import { useParams } from "react-router";
import { Label } from "reactstrap";
import { odaSayisi } from "./../helpers/constants";

export default function ILanDetay() {
  let { id, userid } = useParams();

  const [ilan, setILan] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    let ilanService = new BaseServices();
    ilanService.getByIlanId(id).then((result) => setILan(result.data));
    ilanService.getByUserId(userid).then((result) => setUser(result.data));
  }, [id, userid]);

  return (
    <div>
      <Card>
        <Card.Header>{ilan.baslik}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Label>İlan Sahibi : </Label> {user.ad + " " + user.soyad}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>İletişim Bilgileri :</Label> {user.cepNo}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>İlan Adres : </Label> {ilan.ilanAdres}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>İlan Türü : </Label> {ilan.ilanTuru}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>Oda Sayısı : </Label> {odaSayisi[ilan.odaSayisi]}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>Bulunduğu Kat : </Label> {ilan.binaKati}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>Kullanım Alanı : </Label> {ilan.kullanimAlani}
          </ListGroup.Item>
          <ListGroup.Item>
            <Label>Isınma Sistemi : </Label> {ilan.isinma}
          </ListGroup.Item>
          <Label>Açıklama : </Label>
          <ListGroup.Item>{ilan.aciklama}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
