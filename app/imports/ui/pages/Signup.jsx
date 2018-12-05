<<<<<<< HEAD
import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
>>>>>>> 89336e0bd6862e01e1836c7cf73477bf00f8ebf5
/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */

const options=[
  { key: 'a', text: 'Trainer', value: 'admin' },
  { key: 'u', text: 'User', value: 'user' }
]
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", redirect: false };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  
  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
<<<<<<< HEAD
    const { email, password, address } = this.state;
    console.log(email, password);
    Accounts.createUser({ email, username: email, password, address }, err => {
      console.log(err);
=======
    const { email, password,role } = this.state;
    Accounts.createUser({ email, username: email, password,roles:[role]}, (err) => {
>>>>>>> 89336e0bd6862e01e1836c7cf73477bf00f8ebf5
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ redirect: true });
      }
    });
  }

  /** Display the signup form. */
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else
      return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Select
                  label="Role"
                  options={options}
                  placeholder="Trainer or User"
                  required
                  name="role"
                  onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Email"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                  />
<<<<<<< HEAD
                  <Form.Input
                    label="Address"
                    icon="map"
                    iconPosition="left"
                    name="address"
                    placeholder="Address (Your address,city,country)"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <Form.Button content="Submit" />
=======
                    <Form.Input
                      label="Adress"
                      icon="map"
                      iconPosition="left"
                      name="password"
                      placeholder="Adress (Your adress,city,country)"
                      type="text"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
>>>>>>> 89336e0bd6862e01e1836c7cf73477bf00f8ebf5
                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === "" ? (
                ""
              ) : (
                <Message
                  error
                  header="Registration was not successful"
                  content={this.state.error}
                />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(Signup);
