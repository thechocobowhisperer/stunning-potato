import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button, CustomInput } from 'reactstrap';

const Chatter = (props) => {
    
    return (
      <div className='container'>
        {props.children}
        <InputGroup>
            <InputGroupAddon addonType='prepend'>
                <CustomInput type='switch'></CustomInput>
            </InputGroupAddon>
            <Input className='col' onChange={props.setMsg} name='Name of Input' 
            placeholder={props.suggestion}
            />
            <InputGroupAddon addonType='append'>
                <Button
                color='primary'
                onClick={props.doThing}
                >
                    Submit
                </Button>
            </InputGroupAddon>
        </InputGroup>       
      </div>
    );
  };
  
  export default Chatter;
