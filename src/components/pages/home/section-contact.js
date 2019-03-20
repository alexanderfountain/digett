import * as variable from "../../../components/variables";
import styled from "styled-components";
import React from "react";
import Container from "../../../components/layout/container";
import Form from "../../../components/form";
import Styledbutton from "../../atoms/button"
const Leftcontactstyle = styled.div`
  flex-basis: 50%;
  border-right: 1px solid ${variable.lightGray};
  padding: 40px 0px;
  padding-right: 20px;
  @media (max-width: ${variable.mobileWidth}) {
    flex-basis: 100%;
    padding: 0px;
    border: 0px;
  }
  ul {
    padding: 0px;
    margin: 0px;
  }
  li {
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  li:before {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 900;
    color: ${variable.brand1};
    font-size: 26px;
    margin-right: 20px;
  }
`;

const Rightcontactstyle = styled.div`
  flex-basis: 50%;
  padding: 40px 0px;
  padding-left: 20px;
  text-align: center;
  @media (max-width: ${variable.mobileWidth}) {
    flex-basis: 100%;
    padding: 0px;
  }
`;


const SectionContact = ({leftcontact}) => (
  <section id="contact">
  <Container
    style={{
      padding: "0px 20px",
      display: "flex",
      flexWrap: "wrap"
    }}
    >
  <Leftcontactstyle dangerouslySetInnerHTML={{ __html: leftcontact }}></Leftcontactstyle>
  <Rightcontactstyle>
    <Form>
      <h2>Let's Chat</h2>
      <p>Fill out the form below.</p>
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          {" "}
          <label htmlFor="bot-field">
            Don’t fill this out: <input name="bot-field" />{" "}
          </label>{" "}
        </p>
        <div class="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            class="form-control"
            data-required="true"
            data-interactive="true"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            class="form-control"
            data-required="true"
            data-interactive="true"
          />
        </div>
        <div class="form-group">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            class="form-control"
            data-required="false"
            data-interactive="true"
          />
        </div>
        <div class="form-group text">
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Message"
            class="textarea form-control"
            data-required="true"
            data-trim="true"
          />
        </div>
        <div>
          <Styledbutton
            type="submit"
            text="Contact"
          >
          </Styledbutton>
        </div>
      </form>
    </Form>
  </Rightcontactstyle>
  </Container>
  </section>

  )
  
  export default SectionContact
  