import React from 'react';
import '../assets/css/font.css';

const Header = () => {
  
  return(
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", background:"rgb(148,87,235, 0.8)"}}>
      <h1 style={{fontFamily:"'Pattaya', sans-serif"}}> Your Contact Manager App!</h1>
    </div>
  );
}

export default Header;