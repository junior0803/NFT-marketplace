import React from 'react';

function Activitypage() {
    return (
        <div className="container" style={{marginBottom:70}}>
            <div className="row row--grid">
                <div className="col-12">
                    <ul className="breadcrumb">
                        <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb__item breadcrumb__item--active">Activity</li>
                    </ul>
                </div>
                <div className="col-12">
                    <div className="main__title main__title--page">
                        <h1>Activity</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-3 order-xl-2">
                    <div className="filter-wrap">
                        <button className="filter-wrap__btn" type="button" data-toggle="collapse"
                                data-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">Open
                            filter
                        </button>

                        <div className="collapse filter-wrap__content" id="collapseFilter">
                            <div className="filter filter--sticky">
                                <h4 className="filter__title">Filters <button type="button">Clear all</button></h4>

                                <div className="filter__group">
                                    <ul className="filter__checkboxes">
                                        <li>
                                            <input id="type5" type="checkbox" name="type5" checked={false} />
                                                <label htmlFor="type5">Listings</label>
                                        </li>
                                        <li>
                                            <input id="type6" type="checkbox" name="type6" />
                                                <label htmlFor="type6">Purchases</label>
                                        </li>
                                        <li>
                                            <input id="type7" type="checkbox" name="type7" checked={false} />
                                                <label htmlFor="type7">Sales</label>
                                        </li>
                                        <li>
                                            <input id="type8" type="checkbox" name="type8" checked={false} />
                                                <label htmlFor="type8">Transfers</label>
                                        </li>
                                        <li>
                                            <input id="type9" type="checkbox" name="type9" />
                                                <label htmlFor="type9">Bids</label>
                                        </li>
                                        <li>
                                            <input id="type10" type="checkbox" name="type10" />
                                                <label htmlFor="type10">Likes</label>
                                        </li>
                                        <li>
                                            <input id="type11" type="checkbox" name="type11" />
                                                <label htmlFor="type11">Followings</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-9 order-xl-1">
                    <div className="row row--grid">
                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover1.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Walking on Air</a></h3>
                                    <p className="activity__text">listed by <a href="author.html">@Nickname</a>
                                        <br />for <b>0.049 ETH</b></p>
                                    <span className="activity__time">4 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover2.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">To Infinity And Beyond</a></h3>
                                    <p className="activity__text">9 editions listed by <a href="author.html">@neo</a>
                                        <br />for <b>0.085 ETH</b> each</p>
                                    <span className="activity__time">21 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover3.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Flowers in Concrete</a></h3>
                                    <p className="activity__text">purchased by <a href="author.html">@johndoe</a>
                                        <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from <a
                                            href="author.html">@min1max</a></p>
                                    <span className="activity__time">21 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover4.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Industrial Revolution</a></h3>
                                    <p className="activity__text">transferred from <a href="author.html">@midinh</a>
                                        <br />to <a href="author.html">@johndoe</a></p>
                                    <span className="activity__time">23 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover5.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Tranquility</a></h3>
                                    <p className="activity__text"><a href="author.html">@aaarthur</a> offered <b>0.002
                                        WETH</b></p>
                                    <span className="activity__time">41 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover6.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Tetradecapus</a></h3>
                                    <p className="activity__text">liked by <a href="author.html">@johndoe</a></p>
                                    <span className="activity__time">45 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover7.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Elegance</a></h3>
                                    <p className="activity__text">started following <a href="author.html">@johndoe</a>
                                    </p>
                                    <span className="activity__time">48 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover8.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Walking on Air</a></h3>
                                    <p className="activity__text">started following <a href="author.html">@johndoe</a>
                                    </p>
                                    <span className="activity__time">49 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row--grid collapse" id="collapsemore">
                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover1.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Walking on Air</a></h3>
                                    <p className="activity__text">listed by <a href="author.html">@Nickname</a>
                                        <br />for <b>0.049 ETH</b></p>
                                    <span className="activity__time">4 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover2.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">To Infinity And Beyond</a></h3>
                                    <p className="activity__text">9 editions listed by <a href="author.html">@neo</a>
                                        <br />for <b>0.085 ETH</b> each</p>
                                    <span className="activity__time">21 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover3.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Flowers in Concrete</a></h3>
                                    <p className="activity__text">purchased by <a href="author.html">@johndoe</a>
                                        <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from <a
                                            href="author.html">@min1max</a></p>
                                    <span className="activity__time">21 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover4.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Industrial Revolution</a></h3>
                                    <p className="activity__text">transferred from <a href="author.html">@midinh</a>
                                        <br />to <a href="author.html">@johndoe</a></p>
                                    <span className="activity__time">23 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover5.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Tranquility</a></h3>
                                    <p className="activity__text"><a href="author.html">@aaarthur</a> offered <b>0.002
                                        WETH</b></p>
                                    <span className="activity__time">41 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover6.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Tetradecapus</a></h3>
                                    <p className="activity__text">liked by <a href="author.html">@johndoe</a></p>
                                    <span className="activity__time">45 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover7.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Elegance</a></h3>
                                    <p className="activity__text">started following <a href="author.html">@johndoe</a>
                                    </p>
                                    <span className="activity__time">48 minutes ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <a href="item.html" className="activity__cover">
                                    <img src="img/cover/cover8.jpg" alt="" />
                                </a>
                                <div className="activity__content">
                                    <h3 className="activity__title"><a href="item.html">Walking on Air</a></h3>
                                    <p className="activity__text">started following <a href="author.html">@johndoe</a>
                                    </p>
                                    <span className="activity__time">49 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row--grid">
                        <div className="col-12">
                            <button className="main__load" type="button" data-toggle="collapse"
                                    data-target="#collapsemore" aria-expanded="false" aria-controls="collapsemore">Load
                                more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activitypage;