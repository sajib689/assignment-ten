import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
      <Button variant='outline-primary mb-3'><FaGoogle></FaGoogle> Google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub> Github</Button>

      
    </ButtonGroup>
        </div>
    );
};

export default RightSideNav;