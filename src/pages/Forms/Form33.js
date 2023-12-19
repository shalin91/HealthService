import { Form, Formik } from "formik";
import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext"
import  { useContext } from "react";

const Form33 = ( props ) => {
  

  const { setForm33 } = useContext(SignContext);


  const handleSubmitData = async( values ) => {
      
    const data = { ...props , ...values };

    const response = await setForm33(data);
    
    console.log(response);

  }



  const validationSchema = Yup.object().shape({
    employed: Yup.string().required("company name  is required"),
    hazardous: Yup.string().required("Location is required"),
    dangerous: Yup.string().required("Category is required"),
    fitUnfit: Yup.string().required("Department is required"),
    reason: Yup.string().required("Department is required"),
    reffered: Yup.string().required("Department is required"),
  });

  return (
    <>
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
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              //  alert(JSON.stringify(values));
               handleSubmitData( values );
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
                        <Col sm={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                              Employed/Propose
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="employed/propose"
                                name="employed"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.employed}
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
                              Hazardous Process
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="hazardous process"
                                name="hazardous"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hazardous}
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
                              Dangerous operation
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="hazardous process"
                                name="dangerous"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dangerous}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center g-3">
                        <Col sm={3}>
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
                                name="fitUnfit"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fitUnfit}
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
                              Reason for Unfit
                            </label>
                            <Input
                              type="text"
                              className="form-control"
                              id="product-orders-input"
                              placeholder="reason"
                              name="reason"
                              aria-label="orders"
                              aria-describedby="product-orders-addon"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.reason}
                            />
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
                              Reffered to
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="referred to"
                                name="reffered"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.reffered}
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

export default Form33;
