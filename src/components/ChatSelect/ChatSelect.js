import React from 'react';


const Conversations = (props) => {
    
    return (
      <div className='container'>
       {props.children}
      </div>
    );
  };
  
  export default Conversations;