import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";

const Investigation = () => {
  const validationSchema = Yup.object().shape({
    familyHistory: Yup.string().required("family history  is required"),
    weight: Yup.string().required("weight is required"),
    bmi: Yup.string().required("bmi is required"),
    pulse: Yup.string().required("pulse is required"),
    bp: Yup.string().required("bp is required"),
    temp: Yup.string().required("temp is required"),
  });

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
              temp: "",
              complaints: "",
              pastHistory: "",
              personalHistory: "",
              familyHistory: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              // await handleSavedcat(values);
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
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className=" m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Lab Reports
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="lab reports"
                                name="complaints"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.complaints}
                              />
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
                              X-Ray Reports
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="X-Ray reports"
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
                              ECG Reports
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ECG reports"
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
                              Spirometry
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="spirometry"
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
                      <Row className="m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Autometry
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="autometry"
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
                      <Row className="m-1">
                        <Col sm={4}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Remarks
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="remarks"
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

export default Investigation;
