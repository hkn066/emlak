import React from "react";
import ILanList from "../pages/ILanList";
import { Container } from "reactstrap";

import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import CreateILan from "../pages/CreateILan";
import UserList from "../pages/UserList";
import ILanDetails from "../pages/ILanDetails";

export default function AllRoutes() {
  return (
    <div>
      <Container>
        <Routes>
          <Route exact path="/" element={<ILanList />} />
          <Route exact path="/ilanlist" element={<ILanList />} />
          <Route
            exact
            path="/ilanlist/:id/user/:userid"
            element={<ILanDetails />}
          />
          <Route exact path="/userlist" element={<UserList />} />
          <Route exact path="/ilan" element={<CreateILan />} />
          <Route exact path="/user" element={[<CreateUser />]} />
        </Routes>
      </Container>
    </div>
  );
}
