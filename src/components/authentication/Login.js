import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import "./login.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer >
      <Card style={{background: "none"}}>     
        <Card.Body className="login">
          <div><img src="./Logo.png" alt="Logo"/></div>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="form">
            <Form.Group id="email" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="input" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" className="input" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="input bt mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center mt-3">
            <span>Don't have an account? </span><Link to="/signup">Sign In</Link>
          </div>

        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
