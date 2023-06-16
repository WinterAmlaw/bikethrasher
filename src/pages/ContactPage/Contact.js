import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

const Contact = () => {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false) // Added state

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
          console.log(result.text)
          setName('')
          setEmail('')
          setMessage('')
          setPhone('')
          setShowConfirmation(true) // Set state to show confirmation message
        setTimeout(() => setShowConfirmation(false), 5000) // Hide confirmation message after 5 seconds
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <>
      {!showConfirmation ? (
        <StyledForm onSubmit={sendEmail}>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <StyledLabel>Phone Number</StyledLabel>
          <StyledInput type="text" name="user_phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <StyledLabel>Message</StyledLabel>
          <StyledTextarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
      ) : (
        <StyledConfirmation>Your message has been delivered! <br></br> We will get back to you shortly.</StyledConfirmation>
      )}
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80%;
  margin: 0 auto;
`

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #EDB935;
`

const StyledInput = styled.input`
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 40%;
  background-color:#1c2331;
  color: white;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #007bff;
  }
`

const StyledTextarea = styled.textarea`
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 80%;
  background-color:#1c2331;
  color: white;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #007bff;
  }
`

const StyledButton = styled.button`
  background-color: #14E162;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: #0e9d4f;
  }
`

const StyledConfirmation = styled.div`
  text-align: center;
  color: green;
  font-weight: bold;
  font-size: 2em;
  animation-name: spinAndFadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes spinAndFadeIn {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(360deg); 
    }
  }
`;


export default Contact

