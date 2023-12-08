import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";

const OtherDetails = () => {
  const validationSchema = Yup.object().shape({
    parmanentTemporary: Yup.string().required("company name  is required"),
    temporaryUnfit: Yup.string().required("Location is required"),
    exposure: Yup.string().required("Category is required"),
    department: Yup.string().required("Department is required"),
    leavinfTransfer: Yup.string().required("Department is required"),
    discharge: Yup.string().required("Department is required"),
    symptoms: Yup.string().required("Department is required"),
    Nature: Yup.string().required("Department is required"),
    date: Yup.string().required("Department is required"),
    fitness: Yup.string().required("Department is required"),
    dateOfPosting: Yup.string().required("Department is required"),
  });

  return (
    <>
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              parmanentTemporary: "",
              temporaryUnfit: "",
              department: "",
              exposure: "",
              leavinfTransfer: "",
              discharge: "",
              symptoms: "",
              Nature: "",
              date: "",
              fitness: "",
              dateOfPosting: "",
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
                      <Row className="align-items-center g-3">
                        <Col sm={3}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Parmanent / Temporary
                            </label>
                            <div className="mb-3">
                              <select
                                className="form-select"
                                name="parmanentTemporary"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.parmanentTemporary}
                              >
                                <option value="">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col sm={3}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Period of temporary unfit
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="period of temporary unfit"
                                name="temporaryUnfit"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.temporaryUnfit}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Department
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="department"
                                name="department"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.department}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Exposure to
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="department"
                                name="exposure"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.exposure}
                              />
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
                              Date of Posting
                            </label>
                            <div className="mb-3">
                              <Input
                                type="date"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="DD/MM/YYYY"
                                name="dateOfPosting"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfPosting}
                              />
                            </div>
                          </div>
                        </Col>
                        <Col sm={3}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Date of Leavinf/Transfer
                            </label>
                            <div className="mb-3">
                              <Input
                                type="date"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="period of temporary unfit"
                                name="leavinfTransfer"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.leavinfTransfer}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Reasons for Discharge leave or transfer
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="department"
                                name="discharge"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.discharge}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Signs and Symptoms
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="department"
                                name="symptoms"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.symptoms}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Nature of Tests
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="department"
                                name="Nature"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Nature}
                              />
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
                              Date for declaring unfit
                            </label>
                            <div className="mb-3">
                              <Input
                                type="date"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="DD/MM/YYYY"
                                name="date"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                              />
                            </div>
                          </div>
                        </Col>
                        <Col sm={3}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Date of issuing fitness
                            </label>
                            <div className="mb-3">
                              <Input
                                type="date"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="period of temporary unfit"
                                name="fitness"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fitness}
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

export default OtherDetails;
