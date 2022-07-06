import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import BaseServices from "../Services/baseService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new BaseServices();
    userService.getUser().then((result) => setUsers(result.data));
  }, []);

  return (
    <div>
      <Table size="sm" hover>
        <thead>
          <tr>
            <th>Ad-Soyad</th>
            <th>Telefon</th>
            <th>Mail Adresi</th>
            <th>Adres</th>
            <th>Güncelle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.ad + " " + user.soyad}</td>
              <td>{user.cepNo}</td>
              <td>{user.email}</td>
              <td>{user.adres}</td>
              <td>
                <Button size="sm" type="submit">
                  Güncelle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
