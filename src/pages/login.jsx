import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {}
    render() { 
        return (
            <div>
                <center>
                    <div className='kotak-regis mb-4' style={{marginTop:'150px'}}>
                        <h2 className='mb-4'>Login</h2>
                        <div className='mb-3' style={{borderBottom:'black solid 1px', width:'90%'}}>
                            <input type='text' className='from-control' style={{border:'transparent', width:'100%'}} placeholder='email'></input>
                        </div>
                        <div className='mb-3' style={{borderBottom:'black solid 1px', width:'90%'}}>
                            <input type='text' className='from-control' style={{border:'transparent', width:'100%'}} placeholder='password'></input>
                        </div>
                    </div>
                    <button className='btn btn-dark mb-4'>Login</button><br/>
                    <text>don't have an account, <Link to={'/registrasi'} className='link' style={{textDecoration:'none'}}>Regist here.</Link> </text>
                </center>
            </div>
        );
    }
}
 
export default Login;