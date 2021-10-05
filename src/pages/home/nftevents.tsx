import React from 'react';
import { Link } from 'react-router-dom';

class Nftevents extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home__content">
                            <h1 className="home__title">The events NFT marketplace</h1>
                            <p className="home__text">Financial Instruments-Payment System <br/>Licenses,
                                permits &amp; Authorizations</p>
                            <div className="home__btns">
                                <Link to="/explorer"><div className="home__btn home__btn--clr">Explore</div></Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link to="/Signin"><div className="home__btn home__btn--clr">Sign in</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nftevents;