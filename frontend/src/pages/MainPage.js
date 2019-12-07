import React from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'
import GoogleAuth from '../components/GoogleAuth';
import PhotoSlider from '../components/PhotoSlider';
import SubscribeUs from '../components/SubscribeUs.js'

import csssfamily from '../assets/images/csssfamily.JPG';

function MainPage() {
  return (
    <div className="MainPage">
      <PhotoSlider />
      <GoogleAuth />
      <SubscribeUs />
    </div>
  );
}

export default MainPage;
