import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";


class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
    country: "",
    phone: "",
    linkedin: "",
    image: "",
    disable: true,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      image,
    } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      image,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    //Consigue el archivo del form
    const file = event.target.files[0];
    //para enviar el objeto y añadir la imagen
    const uploadData = new FormData();
    uploadData.append("photo", file);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/upload`, uploadData, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          image: response.data.secure_url,
          disable: false,
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      disable,
    } = this.state;
    return (
      <div className="js-content section cover">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={this.handleFormSubmit}>
                <p className="h4 text-center mb-4">Sign Up</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.handleChange}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your link to Linkedin
                </label>
                <input
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  onChange={this.handleChange}
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your City
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Image
                </label>
                <input
                  type="file"
                  onChange={this.fileOnchange}
                  id="defaultFormRegisterEmailEx"
                  className="grey-text"
                ></input>
                <br />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />

                <div className="text-center mt-4">
                  {disable ? (
                    <MDBBtn
                      color="unique"
                      value="Signup"
                      type="submit"
                      disabled
                    >
                      Register
                    </MDBBtn>
                  ) : (
                    <MDBBtn color="unique" value="Signup" type="submit">
                      Register
                    </MDBBtn>
                  )}
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br/>
      </div>
    );
  }
}

export default withAuth(Signup);
