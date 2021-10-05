import React from 'react';

class Topsellers extends React.Component {
    render() {
        return (
            <section className="row row--grid">
                <div className="col-12">
                    <div className="main__title">
                        <h2>Top sellers</h2>

                        <a href="authors.html" className="main__link">View all <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                        </svg></a>
                    </div>
                </div>
                <div className="col-12">
                    <ul className="sellers-list">
                        <li>
                            <span className="sellers-list__number">1</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar.jpg" alt=""/>
                                <a href="author.html">@miriuuu</a>
                                <span>214.22 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">2</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar2.jpg" alt=""/>
                                <a href="author.html">@sc00ty</a>
                                <span>205.8 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">3</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar3.jpg" alt=""/>
                                <a href="author.html">@redalert</a>
                                <span>137.65 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">4</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar4.jpg" alt=""/>
                                <a href="author.html">@1one</a>
                                <span>129.301 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">5</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar5.jpg" alt=""/>
                                <a href="author.html">@kateblank</a>
                                <span>112.3 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">6</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar6.jpg" alt=""/>
                                <a href="author.html">@johndoe</a>
                                <span>108.88 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">7</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar7.jpg" alt=""/>
                                <a href="author.html">@nickname</a>
                                <span>88.58 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">8</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar8.jpg" alt=""/>
                                <a href="author.html">@lllily</a>
                                <span>73.207 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">9</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar9.jpg" alt=""/>
                                <a href="author.html">@fantraingle</a>
                                <span>71.076 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">10</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar10.jpg" alt=""/>
                                <a href="author.html">@oxyoxyoxy</a>
                                <span>57.041 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">11</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar11.jpg" alt=""/>
                                <a href="author.html">@vandam</a>
                                <span>50.261 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">12</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar12.jpg" alt=""/>
                                <a href="author.html">@dididi</a>
                                <span>44.79 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">13</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar13.jpg" alt=""/>
                                <a href="author.html">@lyzzy</a>
                                <span>43.24 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">14</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar14.jpg" alt=""/>
                                <a href="author.html">@oceanu</a>
                                <span>41.221 €</span>
                            </div>
                        </li>

                        <li>
                            <span className="sellers-list__number">15</span>
                            <div className="sellers-list__author sellers-list__author--verified">
                                <img src="img/avatars/avatar15.jpg" alt=""/>
                                <a href="author.html">@justart</a>
                                <span>40.195 €</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Topsellers;