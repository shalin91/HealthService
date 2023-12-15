import { Form, Formik } from "formik";
import React from "react";
import { Card, CardHeader, Col, Input, Row } from "reactstrap";

const BloodInvestigation = ( props ) => {

  // const handleSubmitData = async( values ) => {
      
  //   const data = { ...props , ...values };

  //   const response = await setVitalAndHistory(data);
    
  //   console.log(response);

  // }


  return (

    <>
        <Row>
        <Col lg={12}>
          <Formik
            initialValues={{
              Hb: "",
              RBC: "",
              WBC: "",
              differentialCount: "",
              plateletCount: "",
              ESR: "",
              bloodGroup:"",
              bloodSugarFasting:"",
              bloodSugarPP2BS : "",
              blUrea : "",
              BUN:"",
              SCreatine:"",
              SGPT : "",
              SGOT:"",
              SBilirubinTotal  :"",
              SBilirubinDirect  :"",
              SBilirubinInDirect  :"",
              AlkalinePhosphatase  :"",
              Sprotiens  :"",
              Albumin  :"",
              globulin :"",
              sodium :"",
              potassium :"",
              chloride :"",
              proein  :"",
              glucose  :"",
              ketone  :"",
              bileSalts  :"",
              bilePigments  :"",
              pusCells  :"",
              redCells  :"",
              epiCells :"",
              cast :"",
              crystals :"",
            }}
            // validationSchema={validationSchema}

            onSubmit={async (values, { resetForm }) => {
              // await handleSavedcat(values);
              // handleSubmitData(values);
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
                            <strong>Blood Investigation</strong>
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
                              Hb
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Hb"
                                name="Hb"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Hb}
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
                              RBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="RBC"
                                name="RBC"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.RBC}
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
                              WBC
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="WBC"
                                name="WBC"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.WBC}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                              Differential Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Differential Count"
                                name="differentialCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.differentialCount}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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
                              Platelet Count
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="plateletCount"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.plateletCount}
                              />
                              <p className="error text-danger">

                                {errors.bp &&
                                  touched.bp &&
                                  errors.bp}

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
                              ESR
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ESR"
                                name="ESR"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ESR}
                              />
                              <p className="error text-danger">

                                {errors.temp &&
                                  touched.temp &&
                                  errors.temp}

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
                              Blood Group
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Group"
                                name="bloodGroup"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bloodGroup}
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
                              BloodSugar Fasting
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BloodSugar Fasting"
                                name="bloodSugarFasting"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bloodSugarFasting}
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
                              Blood Sugar PP2BS
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Blood Sugar PP2BS"
                                name="bloodSugarPP2BS"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bloodSugarPP2BS}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                               Blood Urea
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="blUrea"
                                name="blUrea"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.blUrea}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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
                              BUN
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="BUN"
                                name="BUN"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.BUN}
                              />
                              <p className="error text-danger">

                                {errors.bp &&
                                  touched.bp &&
                                  errors.bp}

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
                              S Creatine
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S Creatine"
                                name="SCreatine"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SCreatine}
                              />
                              <p className="error text-danger">

                                {errors.temp &&
                                  touched.temp &&
                                  errors.temp}

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
                              SGPT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGPT"
                                name="SGPT"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SGPT}
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
                              SGOT
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="SGOT"
                                name="SGOT"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SGOT}
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
                              S.BilirubinTotal
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinTotal"
                                name="SBilirubinTotal"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SBilirubinTotal}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                              S.Bilirubin Direct
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="S.BilirubinDirect"
                                name="SBilirubinDirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SBilirubinDirect}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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
                              S.Bilirubin InDirect
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="platelet Count"
                                name="SBilirubinInDirect"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.SBilirubinInDirect}
                              />
                              <p className="error text-danger">

                                {errors.bp &&
                                  touched.bp &&
                                  errors.bp}

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
                              Alkaline Phosphatase
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Alkaline Phosphatase"
                                name="AlkalinePhosphatase"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.AlkalinePhosphatase}
                              />
                              <p className="error text-danger">

                                {errors.temp &&
                                  touched.temp &&
                                  errors.temp}

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
                              S.protiens
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sprotiens"
                                name="Sprotiens"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Sprotiens}
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
                              Albumin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Albumin"
                                name="Albumin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Albumin}
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
                              Globulin
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Globulin"
                                name="globulin"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.globulin}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                              Sodium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Sodium"
                                name="sodium"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sodium}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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
                              Potassium
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Potassium"
                                name="potassium"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.potassium}
                              />
                              <p className="error text-danger">

                                {errors.bp &&
                                  touched.bp &&
                                  errors.bp}

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
                              Chloride
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Chloride"
                                name="chloride"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.chloride}
                              />
                              <p className="error text-danger">

                                {errors.temp &&
                                  touched.temp &&
                                  errors.temp}

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
                            <strong>Urine R&M</strong>
                          </h2>

                        </div>
                      </Col>
                    </Row>
                  </CardHeader>
                      <Row className="align-items-center g-3 mt-3">
                        <Col sm={2}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="product-orders-input"
                            >
                             Proein
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Proein"
                                name="proein"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.proein}
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
                              Glucose
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Glucose"
                                name="glucose"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.glucose}
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
                              Ketone
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="ketone"
                                name="ketone"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ketone}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                              Bile Salts
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Bile Salts"
                                name="bileSalts"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bileSalts}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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
                              Bile Pigments
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Bile Pigments"
                                name="bilePigments"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.bilePigments}
                              />
                              <p className="error text-danger">

                                {errors.bp &&
                                  touched.bp &&
                                  errors.bp}

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
                              Pus Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Pus Cells"
                                name="pusCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pusCells}
                              />
                              <p className="error text-danger">

                                {errors.temp &&
                                  touched.temp &&
                                  errors.temp}

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
                             Red Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Red Cells"
                                name="redCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.redCells}
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
                              Epi Cells
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Epi Cells"
                                name="epiCells"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.epiCells}
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
                              Cast
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Cast"
                                name="cast"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.cast}
                              />
                              <p className="error text-danger">

                                {errors.bmi &&
                                  touched.bmi &&
                                  errors.bmi}

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
                              Crystals
                            </label>
                            <div className="mb-3">
                              <Input
                                type="text"
                                className="form-control"
                                id="product-orders-input"
                                placeholder="Crystals"
                                name="crystals"
                                aria-label="orders"
                                aria-describedby="product-orders-addon"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.crystals}
                              />
                              <p className="error text-danger">

                                {errors.pulse &&
                                  touched.pulse &&
                                  errors.pulse}

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

  )
}

export default BloodInvestigation