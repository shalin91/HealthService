import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import UiContent from "../../Components/Common/UiContent";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";
const Eye = (props) => {
  const { setEyeDetails } = useContext(SignContext);

  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setEyeDetails(data);

    console.log(response);
  };

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
              distandVisionWithRightEye: "",
              distandVisionWithoutRightEye: "",
              distandVisionWithLeftEye: "",
              distandVisionWithoutLeftEye: "",
              nearVisionWithRightEye: "",
              nearVisionWithoutRightEye: "",
              nearVisionWithLeftEye: "",
              nearVisionWithoutLeftEye: "",
              colourVision: "",
              remark: "",
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
                              <Row >
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
                                    name="distandVisionWithoutLeftEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.distandVisionWithoutLeftEye}
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
                                    name="distandVisionWithoutRightEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.distandVisionWithoutRightEye}
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
                              <Row>
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
                                    name="distandVisionWithLeftEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.distandVisionWithLeftEye}
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
                                    name="distandVisionWithRightEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.distandVisionWithRightEye}
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

                      <Row className="align-items-center g-3 ">
                        <Col className="col-sm">
                          <div>
                            <div>
                              <Row>
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
                                    name="nearVisionWithoutLeftEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nearVisionWithoutLeftEye}
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
                                    name="nearVisionWithoutRightEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nearVisionWithoutRightEye}
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
                              <Row>
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
                                    name="nearVisionWithLeftEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nearVisionWithLeftEye}
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
                                    name="nearVisionWithRightEye"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nearVisionWithRightEye}
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
                    </div>

                    <Row className="align-items-center g-3">
                      <Col className="col-sm">
                        <div>
                          <div>
                            <Row className="mb-3">
                              <Col className="col-lg-2 col-md-2"></Col>
                              <Col className="col-lg-2 col-md-2">
                                <p>Colour Vision</p>
                              </Col>

                              <Col className="col-lg-4 col-md-4">
                                <textarea
                                  className="form-control"
                                  id="meassageInput"
                                  type="text"
                                  rows="3"
                                  name="colourVision"
                                  placeholder="colourvision"  
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.colourVision}
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

                    <Row className="align-items-center g-3">
                      <Col className="col-sm">
                        <div>
                          <div>
                            <Row className="mb-3">
                              <Col className="col-lg-2 col-md-2"></Col>
                              <Col className="col-lg-2 col-md-2">
                                <p>Remarks</p>
                              </Col>

                              <Col className="col-lg-4 col-md-4">
                                <textarea
                                  className="form-control"
                                  id="meassageInput"
                                  type="text"
                                  rows="3"
                                  name="remark"
                                  placeholder="remarks"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.remark}
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

                  <div className="text-end mb-1 me-3">
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
