import React, { Component } from 'react';
// import {FaAngleDoubleDown} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

class Home extends Component {
    state = {
        test:1
    }

    klik=()=>{
        var a=this.state.test
        this.setState({test:a+1})
        console.log(this.state.test)
    }

    render() {
        return (
            <div style={{marginTop:'0px'}}>
                <center>
                    <div className='gmb0'>
                        <img src="https://static1.fashionbeans.com/wp-content/uploads/2013/07/diytailoring.jpg" width='100%' height='630' alt="" />
                        <div className='txt0'>
                            <div className='txt2 padtop3'>
                                <text style={{fontSize:'60px',fontWeight:'bold'}}>We create your desired clothes</text>
                            </div>
                            <div className='txt2'>
                                <text style={{fontSize:'35px'}}>with our trusted and skilled tailors</text>
                            </div>
                            <Link to={'/registrasi'} style={{textDecoration:'none'}}>
                                <div className='tombol mt-5 py-1' onClick={this.klik}>
                                    Get Started
                                </div>
                            </Link>
                            <div id='scroll' className='txt2 martop'>
                                {/* batas */}
                            </div>
                        </div>
                    </div>
                </center>

                <div className='bg3 kotjumbot'>
                    <center>
                        <div className='jumbott bg4'>
                            <a href='#scroll' className='tombol0' style={{textDecoration:'none',fontSize:'30px'}}>
                                <span ><IoIosArrowDown className='txt1' style={{marginTop:'6px',marginBottom:'11px'}}/></span><br/>
                            </a>
                            <Fade bottom>
                            <div className='d-flex bg4 kotak mt-2'>
                                <div className='txt1 pt-5' style={{marginTop:'50px',width:'40%'}}>
                                    <div>
                                        <text style={{fontSize:'30px',fontWeight:'bold'}}>Why us?</text>
                                    </div>
                                    <div>
                                        <text style={{fontSize:'20px'}}>
                                            You don't need to go to a shop or boutique to order the clothes you desire. 
                                            You can order anytime and anywhere, with a wide selection of fabrics, models, sizes, and your favorite tailor
                                        </text>
                                    </div>
                                </div>
                                <div className='mt-5' style={{marginLeft:'60px'}}>
                                    <img className='bayangan' style={{width:'500px'}} src='https://images.squarespace-cdn.com/content/v1/563f2f73e4b039e01d2e3d9b/1484146010986-9VI3BD82XXYADN158HKA/ke17ZwdGBToddI8pDm48kPqOS-4sxdKJiPd4JrJRKX57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYDXmSzTndxarS1uAVeHYa8GFgDDad3kqDXGz9uK8ZGQJ14ubcdsY0uKwK2_j53OFw/pavli-dashi-custom-tailoring11.jpg?format=2500w' alt='' ></img>
                                </div>
                            </div>

                            <div className='d-flex bg4 kotak'>
                                <div className='mt-5' style={{marginRight:'60px'}}>
                                    <img className='bayangan' style={{width:'500px'}} src='https://ravisehgal.com/wp-content/uploads/2017/02/Ravi-Sehgal-Bespoke-How-To-Choose-a-Tailor-shutterstock_537707992-Billion-Photos.jpg' alt='' ></img>
                                </div>
                                <div className='txt1 pt-4' style={{marginTop:'50px',width:'40%'}}>
                                    <div>
                                        <text style={{fontSize:'30px',fontWeight:'bold'}}>Trusted tailors in city</text>
                                    </div>
                                    <div>
                                        <text style={{fontSize:'20px'}}>
                                            We have reliable tailors who have passed several stages of selection and have fulfilled several criteria, to be able to join us
                                        </text>
                                    </div>
                                    <div href='https://www.google.com/' className='tombol1 py-1 mt-5'>
                                        Join Us
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex bg4 kotak'>
                                <div className='txt1' style={{marginTop:'50px',width:'40%'}}>
                                    <div>
                                        <text style={{fontSize:'30px',fontWeight:'bold'}}>No need to go to boutique</text>
                                    </div>
                                    <div>
                                        <text style={{fontSize:'20px'}}>
                                            We have several features that can enable you to order without going to the boutique,
                                            because we understand that your time is very valuable
                                        </text>
                                    </div>
                                    <Link to={'/features'} style={{textDecoration:'none'}}>
                                        <div className='tombol2 py-1 mt-5'>
                                            Learn More
                                        </div>
                                    </Link>
                                </div>
                                <div className='mt-5' style={{marginLeft:'60px'}}>
                                    <img className='bayangan' style={{width:'500px'}} src='http://www.executivestyle.com.au/content/dam/images/3/5/n/c/i/image.related.articleLeadwide.620x349.35n9i.png/1428464381848.jpg' alt='' ></img>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </center>

                </div>

            </div>
        );
    }
}
 
export default Home;