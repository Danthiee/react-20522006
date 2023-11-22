import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton';
import MySection from './MySection';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MySection>
    <MyButton>My Butoon Text </MyButton>
  </MySection>
);
