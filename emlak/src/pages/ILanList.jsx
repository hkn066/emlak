import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import BaseServices from "../Services/baseService";
import { odaSayisi } from "./../helpers/constants";

export default function ILanList() {
  const [ilans, setILans] = useState([]);

  useEffect(() => {
    let ilanService = new BaseServices();
    ilanService.getILan().then((result) => setILans(result.data));
  }, []);

  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        {
          <tbody>
            {ilans.map((ilan) => (
              <tr key={ilan.id}>
                <td>
                  {" "}
                  <Link to={`/ilanlist/${ilan.id}/user/${ilan.user.id}`}>
                    {ilan.baslik}
                  </Link>
                </td>
                <td>{odaSayisi[ilan.odaSayisi]}</td>
                <td>{ilan.ilanTuru}</td>
                <td>{ilan.kullanimAlani} m²</td>
                <td>{ilan.binaKati}. kat</td>
                <td>{ilan.isinma}</td>
              </tr>
            ))}
          </tbody>
        }
      </Table>
    </div>
  );
}
