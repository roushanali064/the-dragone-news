import React, { useContext } from 'react';
import moment from 'moment';
import Logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';


const Header = () => {


    return (
        <Container>
            <div className="text-center">
                <img src={Logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center '>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;