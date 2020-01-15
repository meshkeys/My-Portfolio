import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Footers extends Component {
        render(){
            return(
                <Footer size="mini" className="footer-grid">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
            )
        }
}

export default Footers;