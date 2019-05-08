import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Chatter = (props) => {
    return (
      <div className='container'>
        {props.children}
        <InputGroup>
            <InputGroupAddon addonType='prepend'>
                <Button>Switch</Button>
            </InputGroupAddon>
            <Input className='col' onChange={(event) => this.changeName(event)} name='Name of Input' 
            placeholder={props.suggestion}
            />
            <InputGroupAddon addonType='append'>
                <Button
                color='primary'
                onClick={(event) => this.sendMsg(event)}
                >
                    Submit
                </Button>
            </InputGroupAddon>
        </InputGroup>       
      </div>
    );
  };
  
  export default Chatter;
