import React from "react";
import {Link} from "react-router-dom";

class Profile extends React.Component {
    render() {
        return (
            <div className="col-12 col-xl-9">
                <div className="profile" style={{width: 925, marginLeft :20}}>
                    <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab"
                               aria-controls="tab-1" aria-selected="true">Profile</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                               aria-selected="false">Created</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                               aria-selected="false">My Activity</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4"
                               aria-selected="false">On Sale</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                        <div className="row row--grid">
                            <div className="col-12 col-lg-6">
                                <form action="#" className="sign__form sign__form--profile" style={{width:450, marginLeft:20}}>
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="sign__title">Profile details</h4>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="username">Login</label>
                                                <input id="username" type="text" name="username" className="sign__input"
                                                       placeholder="User123"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="email">Email</label>
                                                <input id="email" type="text" name="email" className="sign__input"
                                                       placeholder="email@email.com"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="firstname">First name</label>
                                                <input id="firstname" type="text" name="firstname"
                                                       className="sign__input" placeholder="John"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="lastname">Last name</label>
                                                <input id="lastname" type="text" name="lastname" className="sign__input"
                                                       placeholder="Doe"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="Mobile">Mobile Number</label>
                                                <input id="mobile" type="text" name="mobile"
                                                       className="sign__input" placeholder=""/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="Mobile">Background</label>
                                                <input id="background" type="text" name="background"
                                                       className="sign__input" placeholder=""/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="sign__btn" type="button">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-12 col-lg-6">
                                <form action="#" className="sign__form sign__form--profile" style={{width:450}}>
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="sign__title">Change password</h4>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="oldpass">Old password</label>
                                                <input id="oldpass" type="password" name="oldpass"
                                                       className="sign__input"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="newpass">New password</label>
                                                <input id="newpass" type="password" name="newpass"
                                                       className="sign__input"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="confirmpass">Confirm new
                                                    password</label>
                                                <input id="confirmpass" type="password" name="confirmpass"
                                                       className="sign__input"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                            <div className="sign__group">
                                                <label className="sign__label" htmlFor="select">Select</label>
                                                <select name="select" id="select" className="sign__select">
                                                    <option value="0">Option</option>
                                                    <option value="1">Option 2</option>
                                                    <option value="2">Option 3</option>
                                                    <option value="3">Option 4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="sign__btn" type="button">Change</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="row row--grid">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover8.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>4.89 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover7.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of
                                        Artificial Shadows</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>2.61 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>702</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover6.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>3.19 ETH</span>
                                        </div>

                                        <button className="card__likes card__likes--active" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>37</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <a href="item.html" className="card__cover">
                                        <img src="img/cover/cover5.jpg" alt=""/>
                                    </a>
                                    <h3 className="card__title"><a href="item.html">Industrial Revolution</a></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>1.11 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>23</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <a href="item.html" className="card__cover">
                                        <img src="img/cover/cover4.jpg" alt=""/>
                                    </a>
                                    <h3 className="card__title"><a href="item.html">I Love You</a></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>0.99 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>358</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <a href="item.html" className="card__cover">
                                        <img src="img/cover/cover3.jpg" alt=""/>
                                    </a>
                                    <h3 className="card__title"><a href="item.html">To Infinity And Beyond</a></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Was sold for</span>
                                            <span>3.33 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row--grid">
                            <div className="col-12">
                                <div className="paginator">
                                    <span className="paginator__pages">8 from 169</span>
                                    <ul className="paginator__list">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path
                                                        d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path
                                                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-3" role="tabpanel">
                        <div className="row">
                            <div className="col-12 col-xl-4 order-xl-2">
                                <div className="filter-wrap">
                                    <button className="filter-wrap__btn" type="button" data-toggle="collapse"
                                            data-target="#collapseFilter" aria-expanded="false"
                                            aria-controls="collapseFilter">Open filter
                                    </button>

                                    <div className="collapse filter-wrap__content" id="collapseFilter">
                                        <div className="filter filter--sticky" style={{width:280}}>
                                            <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

                                            <div className="filter__group">
                                                <ul className="filter__checkboxes">
                                                    <li>
                                                        <input id="type5" type="checkbox" name="type5"/>
                                                        <label htmlFor="type5">Listings</label>
                                                    </li>
                                                    <li>
                                                        <input id="type6" type="checkbox" name="type6"/>
                                                        <label htmlFor="type6">Purchases</label>
                                                    </li>
                                                    <li>
                                                        <input id="type7" type="checkbox" name="type7" />
                                                        <label htmlFor="type7">Sales</label>
                                                    </li>
                                                    <li>
                                                        <input id="type8" type="checkbox" name="type8" />
                                                        <label htmlFor="type8">Transfers</label>
                                                    </li>
                                                    <li>
                                                        <input id="type9" type="checkbox" name="type9"/>
                                                        <label htmlFor="type9">Bids</label>
                                                    </li>
                                                    <li>
                                                        <input id="type10" type="checkbox" name="type10"/>
                                                        <label htmlFor="type10">Likes</label>
                                                    </li>
                                                    <li>
                                                        <input id="type11" type="checkbox" name="type11"/>
                                                        <label htmlFor="type11">Followings</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-xl-8 order-xl-1">
                                <div className="row row--grid">
                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover1.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Walking on Air</a>
                                                </h3>
                                                <p className="activity__text">listed by
                                                    <Link to="/author">@Nickname</Link> <br/>for <b>0.049 ETH</b></p>
                                                <span className="activity__time">4 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover2.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">To Infinity And
                                                    Beyond</a></h3>
                                                <p className="activity__text">9 editions listed by
                                                    <Link to="/author">@neo</Link> <br/>for <b>0.085 ETH</b> each</p>
                                                <span className="activity__time">21 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover3.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Flowers in
                                                    Concrete</a></h3>
                                                <p className="activity__text">purchased by
                                                    <Link to="/author">@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.011
                                                        ETH</b> from <Link to="/author">@min1max</Link></p>
                                                <span className="activity__time">21 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <Link to="/author" className="activity__cover">
                                                <img src="img/cover/cover4.jpg" alt=""/>
                                            </Link>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Industrial
                                                    Revolution</a></h3>
                                                <p className="activity__text">transferred from
                                                    <Link to="/author">@midinh</Link><br/>to
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">23 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <Link to="/author" className="activity__cover">
                                                <img src="img/cover/cover5.jpg" alt=""/>
                                            </Link>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Tranquility</a></h3>
                                                <p className="activity__text">
                                                    <Link to="/author">@aaarthur</Link> offered <b>0.002 WETH</b></p>
                                                <span className="activity__time">41 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <Link to="/author" className="activity__cover">
                                                <img src="img/cover/cover6.jpg" alt=""/>
                                            </Link>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Tetradecapus</a>
                                                </h3>
                                                <p className="activity__text">liked by
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">45 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <Link to="/author" className="activity__cover">
                                                <img src="img/cover/cover7.jpg" alt=""/>
                                            </Link>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Elegance</a></h3>
                                                <p className="activity__text">started following
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">48 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover8.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Walking on Air</a>
                                                </h3>
                                                <p className="activity__text">started following
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">49 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--grid collapse" id="collapsemore1">
                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover1.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title">
                                                    <Link to="/author">Walking on Air</Link>
                                                </h3>
                                                <p className="activity__text">listed by
                                                    <Link to="/author">@Nickname</Link> <br/>for <b>0.049 ETH</b></p>
                                                <span className="activity__time">4 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover2.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">To Infinity And
                                                    Beyond</a></h3>
                                                <p className="activity__text">9 editions listed by
                                                    <Link to="/author">@neo</Link> <br/>for <b>0.085 ETH</b> each</p>
                                                <span className="activity__time">21 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <Link to="/author" className="activity__cover">
                                                <img src="img/cover/cover3.jpg" alt=""/>
                                            </Link>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Flowers in
                                                    Concrete</a></h3>
                                                <p className="activity__text">purchased by
                                                    <Link to="/author">@johndoe</Link> <b>0x23d2dc92b...82c6</b> for <b>0.011
                                                        ETH</b> from <Link to="/author">@min1max</Link></p>
                                                <span className="activity__time">21 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover4.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Industrial
                                                    Revolution</a></h3>
                                                <p className="activity__text">transferred from
                                                    <Link to="/author">@midinh</Link> <br/>to
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">23 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover5.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Tranquility</a></h3>
                                                <p className="activity__text">
                                                    <Link to="/author">@aaarthur</Link> offered <b>0.002 WETH</b></p>
                                                <span className="activity__time">41 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover6.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Tetradecapus</a>
                                                </h3>
                                                <p className="activity__text">liked by
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">45 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover7.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Elegance</a></h3>
                                                <p className="activity__text">started following
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">48 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-12">
                                        <div className="activity" style={{width: 620, marginLeft :20}}>
                                            <a href="item.html" className="activity__cover">
                                                <img src="img/cover/cover8.jpg" alt=""/>
                                            </a>
                                            <div className="activity__content">
                                                <h3 className="activity__title"><a href="item.html">Walking on Air</a>
                                                </h3>
                                                <p className="activity__text">started following
                                                    <Link to="/author">@johndoe</Link></p>
                                                <span className="activity__time">49 minutes ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--grid">
                                    <div className="col-12">
                                        <button className="main__load" type="button" data-toggle="collapse"
                                                data-target="#collapsemore1" aria-expanded="false"
                                                aria-controls="collapsemore1">Load more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-4" role="tabpanel">
                        <div className="row row--grid">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover1.jpg" alt=""/>
                                        <span className="card__time card__time--clock">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z"/></svg>
                                                        <span className="card__clock card__clock--2"/>
                                                    </span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>4.89 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/slide1.jpg" alt=""/>
                                        <span className="card__time">15 minutes left</span>
                                    </Link>

                                    <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>5.04 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover2.jpg" alt=""/>
                                        <span className="card__time">15 minutes left</span>
                                    </Link>
                                    <h3 className="card__title">
                                        <Link to="/item">Les Immortels, the Treachery of Artificial Shadows</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>2.61 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>702</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover3.jpg" alt=""/>
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>3.19 ETH</span>
                                        </div>

                                        <button className="card__likes card__likes--active" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>37</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover4.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><a href="item.html">Industrial Revolution</a></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>1.11 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>23</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover5.jpg" alt=""/>
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>0.99 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>358</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row--grid collapse" id="collapsemore">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover1.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Walking on Air</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>4.89 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>189</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover8.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">To Infinity And Beyond</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>5.04 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover2.jpg" alt=""/>
                                        <span className="card__time">15 minutes left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Les Immortels, the Treachery of
                                        Artificial Shadows</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>2.61 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>702</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover3.jpg" alt=""/>
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Flowers in Concrete</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>3.19 ETH</span>
                                        </div>

                                        <button className="card__likes card__likes--active" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>37</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover4.jpg" alt=""/>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">Industrial Revolution</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Reserve price</span>
                                            <span>1.11 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>23</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="card" style={{height: 460, width: 260, marginLeft :20}}>
                                    <Link to="/item" className="card__cover">
                                        <img src="img/cover/cover5.jpg" alt=""/>
                                        <span className="card__time">an hour left</span>
                                    </Link>
                                    <h3 className="card__title"><Link to="/item">I Love You</Link></h3>
                                    <div className="card__author card__author--verified">
                                        <img src="img/avatars/avatar5.jpg" alt=""/>
                                        <Link to="/author">@l1rose</Link>
                                    </div>
                                    <div className="card__info">
                                        <div className="card__price">
                                            <span>Current price</span>
                                            <span>0.99 ETH</span>
                                        </div>

                                        <button className="card__likes" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                                            </svg>
                                            <span>358</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row--grid">
                            <div className="col-12">
                                <button className="main__load" type="button" data-toggle="collapse"
                                        data-target="#collapsemore" aria-expanded="false"
                                        aria-controls="collapsemore">Load more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile