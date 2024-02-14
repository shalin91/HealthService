import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext";
import { useContext } from "react";

const Form33 = (props) => {
  console.log(">>>>>>>>>>>>>", props.form33);
  const { setForm33, GetSpecificForm33, editForm33 } = useContext(SignContext);
  const [fit, setfit] = useState(null);
  const [form33, setform33] = useState({
    employyedOrPrpposed: "",
    hazardousProcess: "",
    dnagerousOperation: "",
    fitOrUnfit: "",
    unfitReason: "",
    referedTo: "",
  });
  const handleSubmitData = async (values) => {
    const data = { ...props, ...values };

    const response = await setForm33(data);

    console.log(response);
  };

  const validationSchema = Yup.object().shape({
    employed: Yup.string().required("company name  is required"),
    hazardous: Yup.string().required("Location is required"),
    dangerous: Yup.string().required("Category is required"),
    fitUnfit: Yup.string().required("Department is required"),
    reason: Yup.string().required("Department is required"),
    reffered: Yup.string().required("Department is required"),
  });
  const handleFit = (e) => {
    setfit(e.target.value);
  };

  const getform33 = async () => {
    if (props.form33) {
      const res = await GetSpecificForm33(props.form33);

      setform33(res.data);
      console.log("form3333res", res.data);
    }
  };

  // useEffect(() => {
  //   console.log("inside use effect fit-unfit", form33.fitOrUnfit);
  //   if (form33.fitOrUnfit === "Fit") {
  //     console.log("inside use effect fit-unfit", form33.fitOrUnfit);
  //     setForm33({
  //       ...form33,
  //       unfitReason: "",
  //     });
  //   }
  // }, [form33.fitOrUnfit]);

  useEffect(() => {
    getform33();
  }, [props.form33]);
  useEffect(() => {
    console.log(form33);
  }, [form33]);
  return (
    <>
      {props.form33 !== null ? (
        <Row>
          <Col lg={12}>
            <Formik
              initialValues={{
                form33,
              }}
              onSubmit={async (values, { resetForm }) => {
                const data = { ...props, ...form33 };
                // console.log(data);
                const res = await editForm33(props.form33, data);
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
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Worker is Employed/Proposed
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="employed/propose"
                                  name="employyedOrPrpposed"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setform33({
                                      ...form33,
                                      employyedOrPrpposed: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    form33
                                      ? form33.employyedOrPrpposed !== null &&
                                        form33.employyedOrPrpposed !== ""
                                        ? form33.employyedOrPrpposed
                                        : ""
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Hazardous Process
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="hazardous process"
                                  name="hazardousProcess"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setform33({
                                      ...form33,
                                      hazardousProcess: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    form33
                                      ? form33.hazardousProcess !== null &&
                                        form33.hazardousProcess !== ""
                                        ? form33.hazardousProcess
                                        : ""
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Dangerous operation
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="dangerous process"
                                  name="dnagerousOperation"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setform33({
                                      ...form33,
                                      dnagerousOperation: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    form33
                                      ? form33.dnagerousOperation !== null &&
                                        form33.dnagerousOperation !== ""
                                        ? form33.dnagerousOperation
                                        : ""
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                FIT/UNFIT
                              </label>
                              <div className="mb-3">
                                <select
                                  className="form-select"
                                  name="fitOrUnfit"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleFit(e);
                                    setform33({
                                      ...form33,
                                      fitOrUnfit: e.target.value,
                                    });
                                  }}
                                  onBlur={handleBlur}
                                  value={
                                    form33
                                      ? form33.fitOrUnfit !== null &&
                                        form33.fitOrUnfit !== ""
                                        ? form33.fitOrUnfit
                                        : ""
                                      : ""
                                  }
                                >
                                  <option value="" disabled>
                                    Select
                                  </option>
                                  <option value="Fit">Fit</option>
                                  <option value="Unfit">Unfit</option>
                                </select>
                              </div>
                            </div>
                          </Col>
                          {form33.fitOrUnfit === "Unfit" ? (
                            <Col lg={4} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Reason for Unfit
                                </label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="reason"
                                  name="unfitReason"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={(e) =>
                                    setform33({
                                      ...form33,
                                      unfitReason: e.target.value,
                                    })
                                  }
                                  onBlur={handleBlur}
                                  value={
                                    form33
                                      ? form33.unfitReason !== null &&
                                        form33.unfitReason !== ""
                                        ? form33.unfitReason
                                        : ""
                                      : ""
                                  }
                                />
                              </div>
                            </Col>
                          ) : (
                            <Col></Col>
                          )}
                        </Row>
                        <Row className="align-items-center g-3">
                          {form33.fitOrUnfit === "Unfit" ? (
                            <Col lg={4} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Reffered to
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="referred to"
                                    name="referedTo"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={(e) =>
                                      setform33({
                                        ...form33,
                                        referedTo: e.target.value,
                                      })
                                    }
                                    onBlur={handleBlur}
                                    value={
                                      form33
                                        ? form33.referedTo !== null &&
                                          form33.referedTo !== ""
                                          ? form33.referedTo
                                          : ""
                                        : ""
                                    }
                                  />
                                </div>
                              </div>
                            </Col>
                          ) : (
                            <Col></Col>
                          )}
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
      ) : (
        <Row>
          <Col lg={12}>
            <Formik
              initialValues={{
                employyedOrPrpposed: "",
                hazardousProcess: "",
                dnagerousOperation: "",
                fitOrUnfit: "",
                unfitReason: "",
                referedTo: "",
              }}
              onSubmit={(values, { resetForm }) => {
                handleSubmitData(values);
                // resetForm();
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
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Worker is Employed/Proposed
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="employed/propose"
                                  name="employyedOrPrpposed"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.employyedOrPrpposed}
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Hazardous Process
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="hazardous process"
                                  name="hazardousProcess"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.hazardousProcess}
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={6} md={8}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                Dangerous operation
                              </label>
                              <div className="mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="dangerous process"
                                  name="dnagerousOperation"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.dnagerousOperation}
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="align-items-center g-3">
                          <Col lg={3} md={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-orders-input"
                              >
                                FIT/UNFIT
                              </label>
                              <div className="mb-3">
                                <select
                                  className="form-select"
                                  name="fitOrUnfit"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleFit(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.fitOrUnfit}
                                >
                                  <option value="">Select</option>
                                  <option value="Fit">Fit</option>
                                  <option value="Unfit">Unfit</option>
                                </select>
                              </div>
                            </div>
                          </Col>
                          {fit === "Unfit" ? (
                            <Col lg={4} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Reason for Unfit
                                </label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="reason"
                                  name="unfitReason"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.unfitReason}
                                />
                              </div>
                            </Col>
                          ) : (
                            <Col></Col>
                          )}
                        </Row>
                        <Row className="align-items-center g-3">
                          {fit === "Unfit" ? (
                            <Col lg={4} md={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-orders-input"
                                >
                                  Reffered to
                                </label>
                                <div className="mb-3">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    placeholder="referred to"
                                    name="referedTo"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.referedTo}
                                  />
                                </div>
                              </div>
                            </Col>
                          ) : (
                            <Col></Col>
                          )}
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
      )}
    </>
  );
};

export default Form33;
