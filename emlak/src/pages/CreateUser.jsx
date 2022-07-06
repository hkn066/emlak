import React from "react";
import BaseServices from "../Services/baseService";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { FormGroup, Button, Alert } from "react-bootstrap";

const initialValues = {
  ad: "",
  soyad: "",
  cepNo: "",
  email: "",
  adres: "",
};

const schema = yup.object({
  ad: yup.string().required("Bu alan zorunludur!"),
  soyad: yup.string().required("Bu alan zorunludur!"),
  cepNo: yup.number().required("Bu alan zorunludur!"),
  email: yup
    .string()
    .email("E-mail formatına uygun adres giriniz!")
    .required("Bu alan zorunludur!"),
  adres: yup.string().required("Bu alan zorunludur!"),
});

export default function CreateUser() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        let createUserService = new BaseServices();
        createUserService.createUsers(values);
        setTimeout(() => {
          resetForm();
        }, 100);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form-group">
          <FormGroup className=" mb-3  ">
            <Field
              className="form-control"
              name="ad"
              placeholder="Adınızı Giriniz!"
            />
            {errors.ad && touched.ad && (
              <Alert variant="danger">{errors.ad}</Alert>
            )}
          </FormGroup>
          <FormGroup className=" mb-3">
            <Field
              className="form-control"
              name="soyad"
              placeholder="Soyadınızı Giriniz!"
            />
            {errors.soyad && touched.soyad && (
              <Alert variant="danger">{errors.soyad}</Alert>
            )}
          </FormGroup>
          <FormGroup className=" mb-3  ">
            <Field
              className="form-control"
              name="cepNo"
              placeholder="Telefon Numaranızı Giriniz"
            />
            {errors.cepNo && touched.cepNo && (
              <Alert variant="danger">{errors.cepNo}</Alert>
            )}
          </FormGroup>
          <FormGroup className=" mb-3  ">
            <Field
              className="form-control"
              name="email"
              placeholder="E-Mail Adresinizi Giriniz!"
            />
            {errors.email && touched.email && (
              <Alert variant="danger">{errors.email}</Alert>
            )}
          </FormGroup>
          <FormGroup className=" mb-3  ">
            <Field
              className="form-control"
              name="adres"
              placeholder="Adresinizi Giriniz!"
            />
            {errors.adres && touched.adres && (
              <Alert variant="danger">{errors.adres}</Alert>
            )}
          </FormGroup>

          <Button variant="primary" type="submit">
            KAYDET
          </Button>
        </Form>
      )}
    </Formik>
  );
}
