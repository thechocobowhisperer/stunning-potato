import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Conversations = (props) => {

    return (
      <div className='container'>
       <InputGroup>
            <Input className='' onChange={(event) => this.changeName(event)} name='Name of Input' 
            placeholder='Card Title'
            />
            <InputGroupAddon addonType='append'>
                <Button
                className=''
                onClick={() => this.createCard()}
                >
                    Submit
                </Button>
            </InputGroupAddon>
            
        </InputGroup>
      </div>
    );
  };
  
  export default Conversations;