import React, { useEffect, useState } from "react";
import {
  FormGroup,
  Row,
  FormControl,
  FormLabel,
  Button,
  Col,
  FormSelect,
} from "react-bootstrap";
import { Formik, Form } from "formik";
import BaseServices from "./../Services/baseService";
import * as Yup from "yup";
import { Alert } from "react-bootstrap";
const initialValues = {
  userId: "",
  ilanTuru: "",
  odaSayisi: "",
  kullanimAlani: "",
  binaKati: "",
  isinma: "",
  aciklama: "",
  ilanAdres: "",
  baslik: "",
};

const validationSchema = Yup.object({
  userId: Yup.string().required("Bir Kullanıcı Seçiniz!"),
  ilanTuru: Yup.string().required("Bu Alan Zorunludur"),
  odaSayisi: Yup.string().required("Bu Alan Zorunludur"),
  kullanimAlani: Yup.number("Lütfen Rakam Kullanınız!").required(
    "Bu Alan Zorunludur"
  ),
  binaKati: Yup.number("Lütfen Rakam Kullanınız!").required(
    "Bu Alan Zorunludur"
  ),
  isinma: Yup.string().required("Bu Alan Zorunludur"),
  aciklama: Yup.string().required("Bu Alan Zorunludur"),
  ilanAdres: Yup.string().required("Bu Alan Zorunludur"),
  baslik: Yup.string().required("Bu Alan Zorunludur"),
});

export default function CreateILan() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new BaseServices();
    userService.getUser().then((result) => setUsers(result.data));
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          let createIlanService = new BaseServices();

          const data = {
            ...values,
            userId: +values.userId,
          };
          createIlanService.createIlan(data);
          setTimeout(() => {
            resetForm();
          }, 100);
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form className="form-group" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>İlan Sahibi</FormLabel>
                <FormSelect
                  name="userId"
                  value={values.userId}
                  onChange={handleChange}
                >
                  <option>Satıcı Seçiniz</option>
                  {users.map((user) => (
                    <option
                      key={user.id}
                      value={user.id}
                      label={user.ad + "  " + user.soyad}
                    />
                  ))}
                </FormSelect>
                {errors.userId && touched.userId && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.userId}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>İlan Baslığı</FormLabel>
                <FormControl
                  name="baslik"
                  value={values.baslik}
                  onChange={handleChange}
                />
                {errors.baslik && touched.baslik && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.baslik}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>İlan Adresi</FormLabel>
                <FormControl
                  name="ilanAdres"
                  value={values.ilanAdres}
                  onChange={handleChange}
                />
                {errors.ilanAdres && touched.ilanAdres && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.ilanAdres}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>

            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>Kullanım Alanı</FormLabel>
                <FormControl
                  name="kullanimAlani"
                  placeholder="Kullanım Alanını Belirtiniz"
                  value={values.kullanimAlani}
                  onChange={handleChange}
                />
                {errors.kullanimAlani && touched.kullanimAlani && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.kullanimAlani}</Alert>
                  </div>
                )}
              </FormGroup>

              <FormGroup as={Col}>
                <FormLabel>Bulunduğu Kat</FormLabel>
                <FormControl
                  name="binaKati"
                  placeholder="Bulunduğu Kat"
                  value={values.binaKati}
                  onChange={handleChange}
                />
                {errors.binaKati && touched.binaKati && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.binaKati}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>

            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>İlan Türü</FormLabel>
                <FormSelect
                  name="ilanTuru"
                  defaultValue="Seçiniz.."
                  value={values.ilanTuru}
                  onChange={handleChange}
                >
                  <option>Seçiniz..</option>
                  <option value="SATILIK" label="Satılık" />
                  <option value="KIRALIK" label="Kiralık" />
                </FormSelect>
                {errors.ilanTuru && touched.ilanTuru && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.ilanTuru}</Alert>
                  </div>
                )}
              </FormGroup>

              <FormGroup as={Col}>
                <FormLabel>Isıtma Sistemi</FormLabel>
                <FormSelect
                  name="isinma"
                  defaultValue="Seçiniz.."
                  value={values.isinma}
                  onChange={handleChange}
                >
                  <option>Seçiniz..</option>
                  <option value="Merkezi Sistem" label="Merkezi" />
                  <option value="Doğalgaz" label="Doğalgaz" />
                  <option value="Sobalı" label="Sobalı" />
                </FormSelect>
                {errors.isinma && touched.isinma && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.isinma}</Alert>
                  </div>
                )}
              </FormGroup>

              <FormGroup as={Col}>
                <FormLabel>Oda Sayısı</FormLabel>
                <FormSelect
                  name="odaSayisi"
                  defaultValue="Seçiniz.."
                  value={values.odaSayisi}
                  onChange={handleChange}
                >
                  <option>Seçiniz..</option>
                  <option value="2+1" label="2+1" />
                  <option value="3+1" label="3+1" />
                  <option value="4+1" label="4+1" />
                  <option value="5+2" label="5+2" />
                  <option value="10++" label="10 ve üzeri" />
                </FormSelect>
                {errors.odaSayisi && touched.odaSayisi && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.odaSayisi}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>
            <Row className="mb-3">
              <FormGroup as={Col}>
                <FormLabel>Açıklama</FormLabel>
                <FormControl
                  as="textarea"
                  name="aciklama"
                  value={values.aciklama}
                  onChange={handleChange}
                />
                {errors.aciklama && touched.aciklama && (
                  <div className="input-feedback">
                    <Alert variant="danger">{errors.aciklama}</Alert>
                  </div>
                )}
              </FormGroup>
            </Row>

            <Button variant="primary" type="submit">
              KAYDET
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
