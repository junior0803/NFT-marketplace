import React from 'react';
import {Link} from "react-router-dom";
import Author from "./author";
import Profile from "./profile";

function authorPage() {
    return (
        <main className="main">
        <div className="main__author" data-bg="img/bg/bg.png"/>
            <div className="container">
                <div className="row row--grid">
                    <Author/>
                    <Profile />
                </div>
            </div>
        </main>
    );
}

export default authorPage;
