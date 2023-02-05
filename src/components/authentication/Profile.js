import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import "./login.css"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <CenteredContainer>
      <Card style={{background: "none"}}>
        <Card.Body className="login">
          <div><img src="./Logo.png" alt="Logo"/></div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn input bt btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
          <div className="w-100 text-center mt-2">
            <Link to="/">Home</Link>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
