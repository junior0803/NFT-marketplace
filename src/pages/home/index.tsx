import React from 'react';
import Nftevents from './nftevents'
import Lastevemts from './lastevents'
import Topsellers from './topsellers'
import Explorers from './explorers'
import Hotcollections from './hotcollections'
import GetStarted from './getstarted'

class main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="home">
                    <Nftevents/>
                </div>
                <div className="container">
                    <Lastevemts/>
                    <Topsellers/>
                    <Explorers/>
                    <Hotcollections/>
                    <GetStarted/>
                </div>
            </main>
        );
    }
}

export default main;
