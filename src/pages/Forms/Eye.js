import { Form, Formik } from "formik";
import React from "react";
import { Card, CardHeader, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";

const Eye = () => {
  const validationSchema = Yup.object().shape({
    gallaryCategoryTitle: Yup.string().required("gallary category title"),
    gallaryCategoryTitle2: Yup.string().required("gallary category title"),
    gallaryCategoryTitle3: Yup.string().required("gallary category title"),
    gallaryCategoryTitle4: Yup.string().required("gallary category title"),
    gallaryCategoryTitle5: Yup.string().required("gallary category title"),
    gallaryCategoryTitle6: Yup.string().required("gallary category title"),
    gallaryCategoryTitle7: Yup.string().required("gallary category title"),
    gallaryCategoryTitle8: Yup.string().required("gallary category title"),
  });
  return (
    <>
      <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              gallaryCategoryTitle: "",
              gallaryCategoryTitle2: "",
              gallaryCategoryTitle3: "",
              gallaryCategoryTitle4: "",
              gallaryCategoryTitle5: "",
              gallaryCategoryTitle6: "",
              gallaryCategoryTitle7: "",
              gallaryCategoryTitle8: "",
              // gallaryCategoryTitle9: "",
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
                                    value={values.gallaryCategoryTitle}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle &&
                                      touched.gallaryCategoryTitle &&
                                      errors.gallaryCategoryTitle}
                                  </p>
                                </Col>
                                <Col className="col-lg-2 col-md-2 col-12 ">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder=""
                                    name="gallaryCategoryTitle2"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gallaryCategoryTitle2}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle2 &&
                                      touched.gallaryCategoryTitle2 &&
                                      errors.gallaryCategoryTitle2}
                                  </p>
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
                                    name="gallaryCategoryTitle3"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gallaryCategoryTitle3}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle3 &&
                                      touched.gallaryCategoryTitle3 &&
                                      errors.gallaryCategoryTitle3}
                                  </p>
                                </Col>
                                <Col className="col-lg-2 col-md-2 col-12 ">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder=""
                                    name="gallaryCategoryTitle4"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gallaryCategoryTitle4}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle4 &&
                                      touched.gallaryCategoryTitle4 &&
                                      errors.gallaryCategoryTitle4}
</p>
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
                                    name="gallaryCategoryTitle5"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gallaryCategoryTitle5}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle5 &&
                                      touched.gallaryCategoryTitle5 &&
                                      errors.gallaryCategoryTitle5}
                                  </p>
                                </Col>
                                <Col className="col-lg-2 col-md-2 col-12 ">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder=""
                                    name="gallaryCategoryTitle6"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}value={values.gallaryCategoryTitle6}
                                    />
                                    <p className="error text-danger">
                                      {errors.gallaryCategoryTitle6 &&
                                        touched.gallaryCategoryTitle6 &&
                                        errors.gallaryCategoryTitle6}
                                    </p>
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
                                      name="gallaryCategoryTitle7"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.gallaryCategoryTitle7}
                                    />
                                    <p className="error text-danger">
                                      {errors.gallaryCategoryTitle7 &&
                                        touched.gallaryCategoryTitle7 &&
                                        errors.gallaryCategoryTitle7}
                                    </p>
                                  </Col>
                                  <Col className="col-lg-2 col-md-2 col-12 ">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder=""
                                      name="gallaryCategoryTitle8"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gallaryCategoryTitle8}
                                  />
                                  <p className="error text-danger">
                                    {errors.gallaryCategoryTitle8 &&
                                      touched.gallaryCategoryTitle8 &&
                                      errors.gallaryCategoryTitle8}
                                  </p>
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
                                    type="text"
                                    rows="3"
                                    placeholder="Enter your message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    // value={values.gallaryCategoryTitle9}
                                  ></textarea>
                                  {/* <p className="error text-danger">
                                    {errors.gallaryCategoryTitle9 &&
                                      touched.gallaryCategoryTitle9 &&
                                      errors.gallaryCategoryTitle9}
                                  </p> */}
                                </Col>
                              </Row>
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

export default Eye;