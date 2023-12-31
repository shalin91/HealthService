import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";
import * as Yup from "yup";

const OtherDetails = (props) => {
  const { setForm32 } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setForm32(data);

    console.log(response);
  };

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
              permanatOrTemporary: "",
              periodOfTemporaryUnfit: "",
              department: "",
              exposureTo: "",
              natureOfTests: "",
              dateOFPosting: "",
              dateOfLeaving: "",
              reasons: "",
              signs: "",
              dateOfDeclaringUnfit: "",
              dateOfissuingFitness: "",
            }}
            // validationSchema={validationSchema}
            onSubmit={(values , { resetForm }) => {
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
                  <div className="card-body">
                    <div className="live-preview">
                      <Row className="align-items-center g-3">
                        <Col sm={3}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Permanent / Temporary
                            </label>
                            <div className="mb-3">
                              <select
                                className="form-select"
                                name="permanatOrTemporary"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.permanatOrTemporary}
                              >

                                <option>--select--</option>
                                <option value="permanent">parmanent</option>

                                <option value="temporary">temporary</option>
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
                                name="periodOfTemporaryUnfit"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.periodOfTemporaryUnfit}
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
                                placeholder="exposureTo"
                                name="exposureTo"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.exposureTo}
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
                                name="dateOFPosting"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOFPosting}
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
                              Date of Leaving/Transfer
                            </label>
                            <div className="mb-3">
                              <Input
                                type="date"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="period of temporary unfit"
                                name="dateOfLeaving"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfLeaving}
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
                                placeholder="reasons for discharge"
                                name="reasons"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.reasons}
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
                                placeholder="signs&sympton"
                                name="signs"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.signs}
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
                                placeholder="nature of tests"
                                name="natureOfTests"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.natureOfTests}
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
                                name="dateOfDeclaringUnfit"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfDeclaringUnfit}
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
                                name="dateOfissuingFitness"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateOfissuingFitness}
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
