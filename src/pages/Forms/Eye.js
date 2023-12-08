import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import UiContent from "../../Components/Common/UiContent";

const Eye = () => {
  return (
    <>
     
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  gallaryCategoryTitle: "",
                  description: "",
                  imagePath: "",
                  active: true,
                }}
                //   validationSchema={validationSchema}
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
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Eye Examination</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Col className="col-lg-4 col-sm  col-2">
                              <div className="d-flex justify-content-sm-between">
                                <h5 className="">Acuity of Vision</h5>
                              </div>
                            </Col>

                            <Col className="col-lg-2 col-md-2 text-center">
                              Left Eye
                            </Col>
                            <Col className="col-lg-2 col-md-2 text-center">
                              Right Eye
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3 mt-2">
                            <Col className="col-sm">
                              <div>
                                <div>
                                  <Row className="mb-3">
                                    <Col className="col-lg-2 col-md-2">
                                      Distant vision
                                    </Col>
                                    <Col className="col-lg-2 col-md-2">
                                      <p>w/o glasses</p>
                                    </Col>

                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col className="col-sm">
                              <div>
                                <div>
                                  <Row className="mb-3">
                                    <Col className="col-lg-2 col-md-2"></Col>
                                    <Col className="col-lg-2 col-md-2">
                                      <p>with glasses</p>
                                    </Col>

                                    <Col className="col-lg-2 col-md-2 col-12">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>

                          <Row className="align-items-center g-3 mt-2">
                            <Col className="col-sm">
                              <div>
                                <div>
                                  <Row className="mb-3">
                                    <Col className="col-lg-2 col-md-2">
                                      Near vision
                                    </Col>
                                    <Col className="col-lg-2 col-md-2">
                                      <p>w/o glasses</p>
                                    </Col>

                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col className="col-sm">
                              <div>
                                <div>
                                  <Row className="mb-3">
                                    <Col className="col-lg-2 col-md-2"></Col>
                                    <Col className="col-lg-2 col-md-2">
                                      <p>with glasses</p>
                                    </Col>

                                    <Col className="col-lg-2 col-md-2 col-12">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                    <Col className="col-lg-2 col-md-2 col-12 ">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="product-orders-input"
                                        placeholder=""
                                        name="gallaryCategoryTitle"
                                        aria-label="orders"
                                        aria-describedby="product-orders-addon"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // value={values.gallaryCategoryTitle}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>

                          <Row className="align-items-center g-3 mt-2">
                            <Col className="col-sm">
                              <div>
                                <div>
                                  <Row className="mb-3">
                                    <Col className="col-lg-2 col-md-2">
                                      Colour vision
                                    </Col>
                                    <Col className="col-lg-2 col-md-2"></Col>

                                    <Col className="col-lg-4 col-md-4">
                                      <textarea
                                        className="form-control"
                                        id="meassageInput"
                                        rows="3"
                                        placeholder="Enter your message"
                                      ></textarea>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
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

export default Eye;
