import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Registrasi extends Component {
    state = {}
    render() {
        return (
            <div>
                <center>
                    <div className='kotak-regis mb-4' style={{marginTop:'150px'}}>
                        <h2>Registration</h2>
                        <div className='mt-4 mb-4' style={{fontWeight:'400'}}>
                            Before we begin, put your <text style={{fontWeight:'700'}}>email</text> and <text style={{fontWeight:'700'}}>password</text> below, so we can make an account for you
                        </div>
                        <div className='mb-3' style={{borderBottom:'black solid 1px', width:'90%'}}>
                            <input type='text' className='from-control' style={{border:'transparent', width:'100%'}} placeholder='email'></input>
                        </div>
                        <div className='mb-3' style={{borderBottom:'black solid 1px', width:'90%'}}>
                            <input type='text' className='from-control' style={{border:'transparent', width:'100%'}} placeholder='password'></input>
                        </div>
                        <div className='mb-3' style={{borderBottom:'black solid 1px', width:'90%'}}>
                            <input type='text' className='from-control' style={{border:'transparent', width:'100%'}} placeholder='confirm password'></input>
                        </div>
                    </div>
                    <button className='btn btn-dark mb-4'>Regist it!</button><br/>
                    <text>or you already have an account, <Link to={'/login'} className='link' style={{textDecoration:'none'}}>Login here.</Link> </text>
                </center>
            </div>
        );
    }
}
 
export default Registrasi;