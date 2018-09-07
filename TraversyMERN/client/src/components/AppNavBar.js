import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component{
    constructor(){
        super();
        this.state = {isOpen: false};
        this.toggle = () =>{
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
    render(){
        return(
            <div>
            <Navbar color = "dark" dark expand = "sm" className = "mb-5">
                <Container>
                    <NavbarBrand href = "/">Item List</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle}></NavbarToggler>
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href = "http://github.com/eikpye">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavBar;