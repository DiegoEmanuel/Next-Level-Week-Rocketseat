import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Success from './SignUp/Success';
import ForgotPassword from './ForgotPassword';
import SucessForgotPassword from './ForgotPassword/Success';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';
import Profile from './Profile';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/success" component={Success} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/finished" component={SucessForgotPassword} />
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default Routes;