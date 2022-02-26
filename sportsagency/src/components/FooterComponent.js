import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <>
                <footer id="footer">
                   <div class="container">
                        <div class="wrap">
                                <ul>
                                    <li>
                                        <ul>
                                            <li>
                                                <div class="gap">
                                                    <h2>London Based<br/>Creative Studio</h2>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="gap">
                                                    <address>
                                                        301 The Greenhouse,<br/>
                                                        Custard Factory, London, E2 8DY.<br/>
                                                        <a href="#">sales@domain.com</a> | +44 (0) 123 456 7890
                                                    </address>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="gap">
                                                    <h1><a href="#" class="logo"><img src="./img/logo-white.png.webp" alt=""/></a></h1>
                                                    <p>
                                                        <span><a href="#">TWITTER</a></span>
                                                        <span><a href="#">FACEBOOK</a></span>
                                                        <span><a href="#">INSTAGRAM</a></span>
                                                        <span><a href="#">DRIBBBLE</a></span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="gap">
                                            <i></i>
                                        </div>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <div class="gap">
                                                    <h2>POFO - Portfolio Concept Theme</h2>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="gap">
                                                    <p>&copy; 2021 POFO is Proudly Powered by <a href="#">ThemeZaa</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                        </div>
                   </div>
               </footer>
            </>
        );
    }
}

export default FooterComponent;