import React from 'react'
import styled from "styled-components";
function Form() {
const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

  return (
    <div>
      <FormGroup>
    <Label htmlFor="label">Label</Label>
    <Input id="label" />
    <Message>ticket price</Message>
  </FormGroup>
  <FormGroup>
    <Label>Movie name</Label>
    <Input />
   
    <Button type="submit">submit</Button> 
  </FormGroup>
  
  </div>
  )
}

export default Form