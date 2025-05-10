import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer class="footer">
            <div class="container-fluid">
                <div className='row'>
                    <div className='col-md-12 footer-sub position-relative'>
                        <span className='fs-20 font-bold'>24X7 Support</span>
                        <div style={{position:'absolute', right:'0px', top:'15px'}}>
                        <a href='' className='me-2'><img src='https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/teligram-icon.png' style={{width:'25px'}} /></a>
                        <a href=''><img src='https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/instagram-icon.png' style={{width:'25px'}} /></a>
                        </div>
                    </div>
                    <div className='col-md-12 footer-sub'>
                        <ul>
                            <li><a href=''>About Us</a></li>
                            <li><a href=''>Terms and Conditions</a></li>
                            <li><a href=''>KYC Policy</a></li>
                            <li><a href=''>Responsible Gaming</a></li>
                        </ul>
                    </div>
                    <div className='col-md-12 footer-sub'>
                        <div className='row justify-content-center'>
                            <div className='col-md-6 text-start'>
                                <div className="pull-left" style={{width:'50%'}}>
                                <img style={{height: '40px', background: '#FFF', borderRadius: '20px', float: 'left', marginRight: '15px'}} src='https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/secure-ssl-logo.png'></img>
                                <span className='font-bold'>
                                100% SAFE<br></br>
                                </span>
                                <span>
                                Protected connection and encrypted data    
                                </span>     
                                </div>
                                <div className="pull-right mt-1">
                                    <img src="https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/18plus.png" className='me-2' style={{height:'30px'}} />
                                    <a href="" target="_blank">
                                        <img src="https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/gamecare.png" className='me-2' style={{height:'30px'}} />
                                    </a>
                                    <a href="" target="_blank">
                                        <img src="https://bx-s3-dev-001.s3.ap-southeast-1.amazonaws.com/Logo/gt.png" style={{height:'30px'}} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 footer-sub'><span className='font-bold'>© Copyright 2025. All Rights Reserved.</span></div>
                </div>
            </div>
        </footer>
    </div>
  )
}
