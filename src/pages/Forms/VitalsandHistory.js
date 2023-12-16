import { Form, Formik } from "formik";
import React from "react";
import { Card, CardHeader, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext, useEffect, useState } from "react";

const VitalsandHistory = (props) => {
  const { setVitalAndHistory } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setVitalAndHistory(data);

    console.log(response);
  };

  const validationSchema = Yup.object().shape({
    height: Yup.string().required("height  is required"),

    weight: Yup.string().required("weight is required"),
    bmi: Yup.string().required("bmi is required"),
    pulse: Yup.string().required("pulse is required"),
    bp: Yup.string().required("bp is required"),
    temp: Yup.string().required("temp is required"),

    complaints: Yup.string().required("complaints is required"),
    pastHistory: Yup.string().required("pastHistory is required"),
    personalHistory: Yup.string().required("personalHistory is required"),
    familyHistory: Yup.string().required("familyHistory is required"),
  });

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    return isNaN(bmi) ? "" : bmi.toFixed(2);
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              height: "",
              weight: "",
              bmi: "",
              pulse: "",
              bp: "",
              temperature: "",
              complaints: "",
              pastHistory: "",
              personalHistory: "",
              familyHistory: "",
            }}
            // validationSchema={validationSchema}

            onSubmit={async (values, { resetForm }) => {
              // await handleSavedcat(values);
              handleSubmitData(values);
              resetForm();
              // togglemodal();
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
                            <strong>Vitals</strong>
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
                              Height
                            </label>
                            <div className="mb-3">
                              <Input
                                type="number"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="height"
                                name="height"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) => {
                                  handleChange(e);
                                  const bmi = calculateBMI(
                                    e.target.value,
                                    values.weight
                                  );
                                  handleChange({
                                    target: { name: "bmi", value: bmi },
                                  });
                                }}
                                onBlur={handleBlur}
                                value={values.height}
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
                              Weight
                            </label>
                            <div className="mb-3">
                              <Input
                                type="number"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="weight"
                                name="weight"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={(e) => {
                                  handleChange(e);
                                  const bmi = calculateBMI(
                                    values.height,
                                    e.target.value
                                  );
                                  handleChange({
                                    target: { name: "bmi", value: bmi },
                                  });
                                }}
                                onBlur={handleBlur}
                                value={values.weight}
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
                              BMI
                            </label>
                            <div className="mb-3">
                              <Input
                                type="number"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="bmi"
                                name="bmi"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bmi}
                              />
                              <p className="error text-danger">
                                {errors.bmi && touched.bmi && errors.bmi}
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
                              Pulse
                            </label>
                            <div className="mb-3">
                              <Input
                                type="number"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="pulse"
                                name="pulse"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pulse}
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
                              BP
                            </label>
                            <div className="mb-3">
                              <Input
                                type="number"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="bp"
                                name="bp"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bp}
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
                              Tempreature
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="tempreature"
                                name="temperature"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.temperature}
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
                                <strong>Medical History</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <Row className=" m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Complaints
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="complaints"
                                name="complaints"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.complaints}
                              />

                              <p className="error text-danger">
                                {errors.complaints &&
                                  touched.complaints &&
                                  errors.complaints}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Past History
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="past history"
                                name="pastHistory"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pastHistory}
                              />

                              <p className="error text-danger">
                                {errors.pastHistory &&
                                  touched.pastHistory &&
                                  errors.pastHistory}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Personal History
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="personal history"
                                name="personalHistory"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.personalHistory}
                              />

                              <p className="error text-danger">
                                {errors.personalHistory &&
                                  touched.personalHistory &&
                                  errors.personalHistory}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Family History
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="family history"
                                name="familyHistory"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.familyHistory}
                              />

                              <p className="error text-danger">
                                {errors.familyHistory &&
                                  touched.familyHistory &&
                                  errors.familyHistory}
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

export default VitalsandHistory;
