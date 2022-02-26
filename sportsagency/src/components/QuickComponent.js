import React, { Component } from 'react';

class QuickComponent extends Component {
    render() {
        return (
            <>
                <span id="theme-wrap" class="fixed-wrap"><a href="#" class="theme-btn"><i class="fa fa-phone"></i><span>CONTACT US</span></a></span>
                <span id="question-wrap" class="fixed-wrap"><a href="#" class="question-btn"><i class="fa fa-envelope"></i><span>QUICK QUESTION?</span></a></span>
            </>
        );
    }
}

export default QuickComponent;