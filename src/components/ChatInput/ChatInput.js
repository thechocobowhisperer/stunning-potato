import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Chatter = (props) => {
    return (
      <div className='col'>
        {props.children}
        <InputGroup>
            <InputGroupAddon addonType='prepend'>
                <Button>Switch</Button>
            </InputGroupAddon>
            <Input className='col' onChange={(event) => this.changeName(event)} name='Name of Input' 
            placeholder='Card Title'
            />
            <InputGroupAddon addonType='append'>
                <Button
                color='primary'
                onClick={() => this.createCard()}
                >
                    Submit
                </Button>
            </InputGroupAddon>
        </InputGroup>       
      </div>
    );
  };
  
  export default Chatter;
