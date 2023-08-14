import React from "react";

function Footer(){
  const curr=new Date().getFullYear();
  return(
    <footer>
      <p>Copyright {curr}</p>
      </footer>
   
  );
}

export default Footer;