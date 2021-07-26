import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormControl,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { DocsCallout, Example } from 'src/reusable'

const Add = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Form Control" href="forms/form-control" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            <Example href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                  <CFormControl
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormControl
                    component="textarea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></CFormControl>
                </div>
              </CForm>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Add
