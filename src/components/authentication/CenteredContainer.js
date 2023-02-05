import React from "react"
import { Container } from "react-bootstrap"
import "./login.css"

export default function CenteredContainer({ children }) {
  return (
    <Container className=" containerLogin">
      <div className="area-logo">
        {children}
      </div>
    </Container>
  )
}
