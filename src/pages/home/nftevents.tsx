import React from 'react';

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
                                <a href="explore.html" className="home__btn home__btn--clr">Explore</a>
                                <a href="/signin" className="home__btn">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nftevents;