import React from 'react';
import { Icon } from '@mdi/react';
import { mdiArrowExpand, mdiFaceWoman, mdiEyeOutline, mdiClose, mdiTwitter, mdiInstagram, mdiPlayOutline, 
    mdiArrowDownDropCircleOutline, mdiArrowRightThick, mdiAbacus } from '@mdi/js';
import yoga from "../../assets/images/yoga.png";
import './home.css';

const Home = () => {
    return (
        <div>
            <section className="left">
                <div className="images">
                    <img src={yoga} alt="A woman doing yoga" className="yoga"/>
                    <Icon path={mdiArrowExpand} size={1.5} className="expand"/>
                </div>
                <div className="views">
                    <Icon path={mdiEyeOutline} size={1} color="white" className="eye"/>
                    <p>960</p>
                </div>
                <div className="white-box">
                    <hr className="hr" />
                    <div className="info">
                        <div className="info-left">
                           <h6>Yoga at Home</h6>
                           <p>Sarah Cooper</p>
                        </div>
                        <div className="info-right">
                            <Icon path={mdiFaceWoman} size={1} />
                        </div>
                   </div>
                </div>
            </section>
            <section className="middle">
                <div className="top-white-box">
                    <div className="top">
                        <Icon path={mdiFaceWoman} size={2} />
                        <div className="info">
                            <h6>Sarah Cooper</h6>
                            <p>Veteran Yoga Instructor</p>
                            <p>3.2k Followers</p>
                        </div>
                        <Icon path={mdiClose} size={1} className="close" />
                    </div>
                    <hr/>
                    <div className="middle">
                        <div className="middle-info">
                            <h5>3200+</h5>
                            <p>Students</p>
                        </div>
                        <div className="middle-info">
                            <h5>13</h5>
                            <p>Courses</p>
                        </div>
                        <div className="middle-info">
                            <h5>22hrs</h5>
                            <p>Videos</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="icons">
                            <Icon path={mdiTwitter} size={1} />
                            <Icon path={mdiInstagram} size={1} />
                        </div>
                        <button className="follow"> + Follow</button>
                    </div>
                </div>
                <div className="bottom-white-box">
                   <div className="top">
                   <div className="info">
                       <h5>Course Catalogue</h5>
                       <div className="option">
                           <p className="red">Peace </p>
                           <p className="red">Short Duration</p>
                       </div>
                   </div>
                   {/* <Icon path={mdiAbacus} size={1} /> */}
                   </div>
                   <div className="audio">
                       <img />
                       <div className="info">
                           <h6>Midnight Bliss</h6>
                           <p>David Gilmour</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} />
                   </div>
                   <div className="audio">
                       <img />
                       <div className="info">
                           <h6>Visualization 101</h6>
                           <p>Harsimran Singh</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} />
                   </div>
                   <div className="audio">
                       <img />
                       <div className="info">
                           <h6>Meditation Basics</h6>
                           <p>Sarah Cooper</p>
                       </div>
                       <Icon path={mdiPlayOutline} size={1} />
                   </div>
                </div>
            </section>
            <section class="right">
            <div className="images">
                    <img src={yoga} alt="A woman doing yoga" className="yoga"/>
                    <Icon path={mdiPlayOutline} size={1}/>
                </div>
                <Icon path={mdiEyeOutline} size={1} />
                <div className="white-box">
                    <hr className="hr" />
                    <div className="info">
                        <div className="info-left">
                           <h6>Yoga at Home</h6>
                           <p>Sarah Cooper</p>
                        </div>
                        <div className="info-right">
                            <Icon path={mdiFaceWoman} size={1} />
                        </div>
                   </div>
                   <div className="extra">
                       <div className="top">
                          <p className="red">Discussion<Icon path={ mdiArrowDownDropCircleOutline} size={1}/></p>
                          <p>Details</p>
                          <p>Transcript</p>
                          <p>Notebook</p>
                        </div>
                        <div close="comment">
                            <Icon path={mdiFaceWoman} size={1} />
                            <div className="info">
                                <p>Samuel K.</p>
                                <p>Thank you for this live course as now<br />
                                we can workout during this pandemic</p>
                            </div>
                        </div>
                        <div close="comment">
                            <Icon path={mdiFaceWoman} size={1} />
                            <div className="info">
                                <p>Misha Singh</p>
                                <p>Hello from India.Thank you<br />
                                for this session</p>
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Type Comment" />
                            <Icon path={mdiArrowRightThick} size={1} />
                        </div>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default Home;