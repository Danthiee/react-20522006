import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton';
import MySection from './MySection';
import MyComponent from '../component/1';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MySection>
    <MyButton>My Butoon Text </MyButton>
    <MyComponent/>
  </MySection>
);
