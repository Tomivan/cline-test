import React from 'react';
import { Icon } from '@mdi/react';
import { mdiArrowExpand, mdiFaceWoman, mdiEyeOutline, mdiClose, mdiTwitter, mdiInstagram, mdiPlayOutline, 
    mdiArrowDownDropCircleOutline, mdiArrowRightThick } from '@mdi/js';
import yoga from "../../assets/images/yoga.png";
import midnight from '../../assets/images/midnight.jpeg'
import './home.css';
import Logout from '../logout/logout';

const Home = () => {
    return (
        <div>
             <Logout />
            <section className="left">
                <div className="images">
                    <img src={yoga} alt="A woman doing yoga" className="yoga"/>
                    <Icon path={mdiArrowExpand} size={1.5} className="expand" color="white"/>
                </div>
                <div className="views">
                    <Icon path={mdiEyeOutline} size={1} color="white" className="eye"/>
                    <p>960</p>
                </div>
                <div className="white-box">
                    <hr className="hr" />
                    <div className="info">
                        <div className="info-left">
                           <h4>Yoga at Home</h4>
                           <p>Sarah Cooper</p>
                        </div>
                        <div className="info-right">
                            <Icon path={mdiFaceWoman} size={1.5} color="white" class="woman" />
                        </div>
                   </div>
                </div>
            </section>
            <section className="middle">
                <div className="top-white-box">
                    <div className="top">
                        <Icon path={mdiFaceWoman} size={2} color="white" class="woman"/>
                        <div className="top-info">
                            <h4>Sarah Cooper</h4>
                            <p>Veteran Yoga Instructor</p>
                            <p className="followers">3.2k Followers</p>
                        </div>
                        <Icon path={mdiClose} size={0.7} className="close" color="white" />
                    </div>
                    <div className="center">
                        <div className="middle-info">
                            <h4>3200+</h4>
                            <p>Students</p>
                        </div>
                        <div className="middle-info">
                            <h4>13</h4>
                            <p>Courses</p>
                        </div>
                        <div className="middle-info">
                            <h4>22hrs</h4>
                            <p>Videos</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="icons">
                            <Icon path={mdiTwitter} size={1} className="twitter"/>
                            <Icon path={mdiInstagram} size={1} />
                        </div>
                        <button className="follow"> + Follow</button>
                    </div>
                </div>
                <div className="bottom-white-box">
                   <div className="catalogue">
                   <div className="catalogue-info">
                       <h5>Course Catalogue</h5>
                       <div className="option">
                           <p className="red">Peace <Icon path={mdiClose} size={0.6} className="red-x"/></p>
                           <p className="red">Short Duration<Icon path={mdiClose} size={0.6} className="red-x"/></p>
                       </div>
                   </div>
                   {/* <Icon path={mdiAbacus} size={1} /> */}
                   </div>
                   <div className="audio">
                       <img src={midnight} alt="midnight bliss" className="midnight"/>
                       <div className="audio-info">
                           <h6>Midnight Bliss</h6>
                           <p>David Gilmour</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} color="red" className="audio-play"/>
                   </div>
                   <div className="audio">
                       <img src={midnight} alt="midnight bliss" className="midnight"/>
                       <div className="audio-info">
                           <h6>Visualization 101</h6>
                           <p>Harsimran Singh</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} color="red" className="audio-play"/>
                   </div>
                   <div className="audio">
                       <img src={midnight} alt="midnight bliss" className="midnight"/>
                       <div className="audio-info">
                           <h6>Meditation Basics</h6>
                           <p>Sarah Cooper</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} color="red" className="audio-play"/>
                   </div>
                </div>
            </section>
            <section class="right">
                <div className="images">
                    <img src={yoga} alt="A woman doing yoga" className="yoga yoga-1"/>
                    <Icon path={mdiPlayOutline} size={2} className="play" color="white"/>
                </div>
                <div className="views-1">
                    <Icon path={mdiEyeOutline} size={1} color="white" className="eye"/>
                    <p>974</p>
                </div>
                <div className="right-white-box">
                    <hr className="hr" />
                    <div className="right-info">
                        <div className="info-left">
                           <h6>Yoga at Home</h6>
                           <p>Sarah Cooper</p>
                        </div>
                        <div className="info-right">
                            <Icon path={mdiFaceWoman} size={1.5} color="white" class="woman"/>
                        </div>
                   </div>
                   <div className="extra">
                       <div className="extra-top">
                          <p className="red">Discussion<Icon path={ mdiArrowDownDropCircleOutline} size={0.7}/></p>
                          <p>Details</p>
                          <p>Transcript</p>
                          <p>Notebook</p>
                        </div>
                        <div className="comment">
                            <Icon path={mdiFaceWoman} size={1.5} color="white" class="woman" />
                            <div className="comment-info">
                                <p>Samuel K.</p>
                                <p>Thank you for this live course as now<br />
                                we can workout during this pandemic</p>
                            </div>
                        </div>
                        <div className="comment">
                            <Icon path={mdiFaceWoman} size={1.5} color="white" class="woman"/>
                            <div className="comment-info">
                                <p>Misha Singh</p>
                                <p>Hello from India.Thank you<br />
                                for this session</p>
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Type Comment" />
                            <Icon path={mdiArrowRightThick} size={1} color="red" className="arrow"/>
                        </div>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default Home;