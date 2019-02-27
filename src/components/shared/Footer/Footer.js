// Functional Comp  -- it is also know stateless comp
import React from 'react';
// ToDO: work with Footer.css 

const Footer = ( props ) => {
  console.log(props);
  
  return ( 
    <footer>
      <hr/>
      <p>{props.children}</p>
      <p>Copyright {props.companyName} {props.year}</p>
    </footer>
  );
}

export default Footer;