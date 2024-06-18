import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dulat Akan </span>
            from <span className="purple"> Cupertino, CA.</span>
            <br />
            I am currently employed as a React developer at HP.
            <br />
            I studied by by MYSELF from Books.
            <br />
            <br />
            I love programming and enjoy doing it!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dulat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
