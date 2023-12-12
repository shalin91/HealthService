import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";

const Investigation = () => {
  const validationSchema = Yup.object().shape({
    labReports: Yup.string().required("lab reports  is required"),
    xRayReports: Yup.string().required("x ray reports is required"),
    ecgReports: Yup.string().required("ecgReports is required"),
    spirometry: Yup.string().required("spirometry is required"),
    autometry: Yup.string().required("autometry is required"),
    remarks: Yup.string().required("remarks is required"),
  });

  return (
    <>
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              labReports: "",
              xRayReports: "",
              ecgReports: "",
              spirometry: "",
              autometry: "",
              remarks: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
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
                                name="labReports"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.labReports}
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
                                name="xRayReports"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.xRayReports}
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
                              ECG Reports
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ECG reports"
                                name="ecgReports"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ecgReports}
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
                              Spirometry
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="spirometry"
                                name="spirometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.spirometry}
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
                              Autometry
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="autometry"
                                name="autometry"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.autometry}
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
                              Remarks
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="remarks"
                                name="remarks"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.remarks}
                              />
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
