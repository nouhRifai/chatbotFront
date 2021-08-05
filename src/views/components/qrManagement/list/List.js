/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormControl,
  CFormLabel,
  CRow,
  CListGroup,
  CListGroupItem,
  CBadge,
  CCardTitle,
  CCardText,
} from '@coreui/react';
import axios from '../../../../axios';
import randomString from '../../../../randomString';
// import { DocsCallout, Example } from 'src/reusable'
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../../state/index';
import CIcon from '@coreui/icons-react';
import {Modify} from '../index';




const List = () => {



  //intentsList from the store
  const intentsList = useSelector((state) => state.intentsList);
  

  //dispatcher
  const dispatch = useDispatch();

  //Action creators
  const {setModalVisibility, setIntent, setQuestion, setResponse, setIntetnsList} = bindActionCreators(actionCreators, dispatch);



  const listIntents = async () => {
      //call to the backend and specify "in order" the path, the methode and params or empty object "{}" 
      const backendResponse = await axios("qr/list","GET",{});
      setIntetnsList(backendResponse.intents);
      console.log(backendResponse);
  };

  useEffect(() => {
    listIntents();
  },[]);

  
  const modifyQRSubmit = async (i) => {

    const backendResponse = await axios("qr/get","GET",i);
    setQuestion(backendResponse.questions);
    setResponse(backendResponse.responses);
    setIntent(i);
    setModalVisibility(true);
    
  };
  const deleteQRSubmit = (i) => {
    alert("del");
  };



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader component="h3"> Listing all Q/R</CCardHeader>
          <CCardBody>
            <CCardTitle component="h4"> Infos :</CCardTitle>
            <CCardText>
              This page permits access to all the Questions / Responses elements, with the possibility to modify and delete.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader component="h3">Q/R</CCardHeader>
          <CCardBody>
            <CListGroup>
                  {intentsList.map((i,x) => {
                      return(
                      <CListGroupItem key={x} className="d-flex justify-content-between align-items-center" >
                          <span style={{width:"95%"}} onClick={() => modifyQRSubmit(i)}>{i.intentDisplayName}</span>
                          <CIcon style={{width:"5%"}} className="sidebar-brand-narrow" name="cil-trash" height={15} onClick={() => deleteQRSubmit(i)}/>   
                      </CListGroupItem>
                      )
                    })}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <Modify/>
    </CRow>
  )
}

export default List
