import React from "react";
import { Form, Formik } from "formik";

import { Card, CardHeader, Col, Input, Row } from "reactstrap";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BloodInvestigation = (props) => {
  const { setBloodDetails } = useContext(SignContext);

  const handleSubmitData = async (values) => {

    toast.success('Data submitted successfully!', {
      position: 'top-right',
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    const data = { ...props, ...values };

    const response = await setBloodDetails(data);

    console.log(response);
  };

  return (
    <>
     <ToastContainer />
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              hb: "",
              rbc: "",
              wbc: "",
              differentialCount: "",
              plateletCount: "",
              esr: "",
              blGroup: "",
              blSugarFastingOrRandom: "",
              blSugarPP2BS: "",
              blUrea: "",
              bun: "",
              sCreatinine: "",
              sgpt: "",
              sgot: "",
              sBilirubinTotal: "",
              sBilirubinDirect: "",
              sBilirubinIndirect: "",
              alklinePhosphatase: "",
              sProteins: "",
              albumin: "",
              globulin: "",
              sodium: "",
              potassuim: "",
              chloride: "",

              proein: "",
              glucose: "",
              ketone: "",
              bileSalts: "",
              bilePigments: "",
              pusCells: "",
              redCells: "",
              epiCells: "",
              cast: "",
              crystals: "",
            }}
            // validationSchema={validationSchema}

            onSubmit={(values,{ resetForm }) => {
              handleSubmitData(values);
              resetForm();
            }}
          >
            {({
              isSubmitting,
              handleChange,
              handleSubmit,
              errors,
              touched,
              values,
              handleBlur,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <Row className="g-1 m-1">
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-between">
                          <h2 className="card-title mb-0 justify-content-sm-start">
                            <strong>Blood Investigation</strong>
                          </h2>
                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className="align-items-center g-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Hb
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Hb"
                                name="hb"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hb}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              RBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="RBC"
                                name="rbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.rbc}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              WBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="WBC"
                                name="wbc"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.wbc}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Differential Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Differential Count"
                                name="differentialCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.differentialCount}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Platelet Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="plateletCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.plateletCount}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              ESR
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ESR"
                                name="esr"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.esr}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Group
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Group"
                                name="blGroup"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blGroup}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              BloodSugar Fasting
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BloodSugar Fasting"
                                name="blSugarFastingOrRandom"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blSugarFastingOrRandom}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Sugar PP2BS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Sugar PP2BS"
                                name="blSugarPP2BS"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blSugarPP2BS}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Blood Urea
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="blUrea"
                                name="blUrea"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blUrea}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              BUN
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BUN"
                                name="bun"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bun}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S Creatine
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S Creatine"
                                name="sCreatinine"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sCreatinine}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGPT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGPT"
                                name="sgpt"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sgpt}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              SGOT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGOT"
                                name="sgot"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sgot}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.BilirubinTotal
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinTotal"
                                name="sBilirubinTotal"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinTotal}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin Direct
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinDirect"
                                name="sBilirubinDirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinDirect}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.Bilirubin InDirect
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="sBilirubinIndirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sBilirubinIndirect}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Alkaline Phosphatase
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Alkaline Phosphatase"
                                name="alklinePhosphatase"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.alklinePhosphatase}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              S.protiens
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sprotiens"
                                name="sProteins"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sProteins}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Albumin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Albumin"
                                name="albumin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.albumin}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Globulin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Globulin"
                                name="globulin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.globulin}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Sodium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sodium"
                                name="sodium"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sodium}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Potassium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Potassium"
                                name="potassuim"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.potassuim}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Chloride
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Chloride"
                                name="chloride"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.chloride}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Urine R&M</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <Row className="align-items-center g-3 mt-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Proein
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Proein"
                                name="proein"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.proein}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Glucose
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Glucose"
                                name="glucose"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.glucose}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Ketone
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ketone"
                                name="ketone"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ketone}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Bile Salts
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Bile Salts"
                                name="bileSalts"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bileSalts}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Bile Pigments
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Bile Pigments"
                                name="bilePigments"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bilePigments}
                              />
                              <p className="error text-danger">
                                {errors.bp && touched.bp && errors.bp}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Pus Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Pus Cells"
                                name="pusCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pusCells}
                              />
                              <p className="error text-danger">
                                {errors.temp && touched.temp && errors.temp}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Red Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Red Cells"
                                name="redCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.redCells}
                              />
                              <p className="error text-danger">
                                {errors.height &&
                                  touched.height &&
                                  errors.height}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Epi Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Epi Cells"
                                name="epiCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.epiCells}
                              />
                              <p className="error text-danger">
                                {errors.weight &&
                                  touched.weight &&
                                  errors.weight}
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Cast
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Cast"
                                name="cast"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cast}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Crystals
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Crystals"
                                name="crystals"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.crystals}
                              />
                              <p className="error text-danger">
                                {errors.pulse && touched.pulse && errors.pulse}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="text-end mb-3 me-3">
                    <button className="btn btn-success w-sm" type="submit">
                      Submit
                    </button>
                  </div>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default BloodInvestigation;
