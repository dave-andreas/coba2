import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import MenuListComposition from './mtrl'

class Yaudadeh extends Component {
    state = {
        logo:'https://cdn0.iconfinder.com/data/icons/atelie/1200/Single_1BlackAtelieYulia-512.png',
        logo2:'https://png.pngtree.com/element_pic/17/01/01/2f35d44ffa3bff40d45a295041394960.jpg',
        logo3: require('./logo.jpg')
    }
    render() {
        return (
            <div>
                <div className="header-container txt1 transp">
                    <Link to={'/'} style={{textDecoration:'none'}}>
                        <div className="pl-3 pr-4 pt-1 d-flex txt1 hover" style={{backgroundColor:'white',height:'70px'}}>
                            <img src={this.state.logo3} sit="logo" height='55px' className="pt-1 mr-2" alt='' />
                            <div className='pt-3'><h4>Jahit</h4></div>
                            <div className='bg3 txt2 log'><h4>in</h4></div>
                        </div>
                    </Link>
                    <div className="d-flex pl-4 padtop txt2">
                        <div className="mr-4 mb-4 link">
                            <h5>Products</h5>
                            <div className='drop'>
                                <div className=''>GG JIRR 00</div>
                            </div>
                        </div>
                        <div className="mr-4 mb-4 link">
                            <h5>Solution</h5>
                            <div className='drop'>GG JIRR 01</div>
                        </div>
                        <div className="mr-4 mb-4 link">
                            <h5>Company</h5>
                            <div className='drop'>GG JIRR 02</div>
                        </div>
                        <div className="mr-4 mb-4 link">
                            <h5>Resources</h5>
                        </div>
                        <div className="mr-4 mb-4 link">
                            <h5>Pricing</h5>
                        </div>
                    </div>
                    <div className="bars-container">
                        <i className="fas fa-bars" />
                    </div>
                    <div className="padtop2 ml-auto mr-4 d-flex">
                        <div className='matdrop'>
                            {/* <MenuListComposition/> */}
                        </div>
                        <div className='mr-3 mb-4' style={{marginTop:'6px'}}>
                            <Link to={'/login'} className='link' style={{textDecoration:'none'}}>
                                <div className='txt2'>
                                    <h5>Login</h5>
                                </div>
                            </Link>
                        </div>
                        <div>
                            {/* <Link to={'/registrasi'} style={{textDecoration:'none'}}>
                                <button className='btn btn-outline-dark txt2' style={{fontWeight:'600'}}>Get Started</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Yaudadeh;