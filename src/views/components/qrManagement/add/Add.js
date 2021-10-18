/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
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




const Add = () => {
  //state input title, question and response
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [title, setTitle] = useState(randomString(10));


  //questionList and responseList from the store
  const questionList = useSelector((state) => state.questionList);
  const responseList = useSelector((state) => state.responseList);

  //dispatcher
  const dispatch = useDispatch();

  //Action creators
  const {addQuestion, deleteQuestion,addResponse, deleteResponse} = bindActionCreators(actionCreators, dispatch);


  //change the input of title
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };


  //handeling questions
  //change the input of question
  const changeQuestion = (e) => {
    setQuestion(e.target.value);
  };
  //addquestion to the store and reset input
  const addQuestionSubmit = () => {
    addQuestion(question);
    setQuestion("");
  };
  //remove question from the store
  const deleteQuestionSubmit = (i) => {
    deleteQuestion(i);
  };

  //handeling responses
  //change the input of response
  const changeResponse = (e) => {
    setResponse(e.target.value);
  };
  //add response to the store and reset input
  const addResponseSubmit = () => {
    addResponse(response);
    setResponse("");
  };
  //remove response from the store
  const deleteResponseSubmit = (i) => {
    deleteResponse(i);
  };



  const saveQR = async () => {
      //call to the backend and specify "in order" the path, the methode and params or empty object "{}" 
      const backendResponse = await axios("qr/add","GET",{title : title, question : questionList, response: responseList,});
      console.log(backendResponse);
  };


  



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader component="h3"> Adding a Q/R</CCardHeader>
          <CCardBody>
            <CCardTitle component="h4"> Infos :</CCardTitle>
            <CCardText>
              <b>Question section</b> permits to add differents ways to ask a specific question.<br/>
              <b>Response section</b> permits to add differents responses to the specified question.
            </CCardText>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton className="me-md-2" href="#" onClick={saveQR}>Save Q/R</CButton>
            </div>
            
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Title</strong>
          </CCardHeader>
          <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="title">Title <small style={{color: "#9da5b1"}}>(or keep generated title)</small></CFormLabel>
                  <CFormControl
                    type="text"
                    id="title"
                    placeholder="Title"
                    onChange={changeTitle}
                    value={title}
                  />
                </div>
              </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Question</strong>
          </CCardHeader>
          <CCardBody>

              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="question">Question</CFormLabel>
                  <CFormControl
                    type="text"
                    id="question"
                    placeholder="Question"
                    onChange={changeQuestion}
                    value={question}
                  />
                </div>
                <div className="col-auto">
                  <CButton type="button" className="mb-3" onClick={addQuestionSubmit}>
                    Add Question
                  </CButton>
                </div>

                <CListGroup>
                {questionList.map((q,i) => {
                    return(
                    <CListGroupItem key={i} className="d-flex justify-content-between align-items-center">
                        {q}
                        <CIcon className="sidebar-brand-narrow" name="cil-trash" height={15} onClick={() => deleteQuestionSubmit(i)}/>
                          
                    </CListGroupItem>
                    )
                  })}
                  
                  
                </CListGroup>
                  
              </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Response</strong>
          </CCardHeader>
          <CCardBody>
            
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="response">Response</CFormLabel>
                  <CFormControl
                    component="textarea"
                    id="response"
                    placeholder="Response"
                    rows="3"
                    value={response}
                    onChange={changeResponse}
                  ></CFormControl>
                </div>
                <div className="col-auto">
                  <CButton type="submit" className="mb-3" onClick={addResponseSubmit}>
                    Add Response
                  </CButton>
                </div>
                <CListGroup>
                {responseList.map((r,i) => {
                    return(
                    <CListGroupItem key={i} className="d-flex justify-content-between align-items-center">
                        {r}
                        <CIcon className="sidebar-brand-narrow" name="cil-trash" height={15} onClick={() => deleteResponseSubmit(i)}/>
                    </CListGroupItem>
                    )
                  })}
                </CListGroup>
              </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>




    </CRow>
  )
}

export default Add
