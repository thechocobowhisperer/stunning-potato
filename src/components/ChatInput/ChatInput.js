import React from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const Chatter = (props) => {
    return (
      <div className='container'>
        <div className=''>
            <InputGroup>
                <Input className='col' onChange={(event) => this.changeName(event)} name='Name of Input' 
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
       
      </div>
    );
  };
  
  export default Chatter;
