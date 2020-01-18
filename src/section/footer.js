import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl';

class Footers extends Component {
        render(){
            return(
               <Footer size="mega" className="footer-grid">
    <FooterSection type="middle">
        <FooterDropDownSection title="GITHUB">
            <FooterLinkList>
                {/*GitHub */}
                <a href="https://github.com/meshkeys" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/></a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="TWITTER">
            <FooterLinkList>
                {/*GitHub */}
                <a href="https://twitter.com/Meshkeys" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"/></a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="WHATSAPP">
            <FooterLinkList>
                {/*GitHub */}
               <a href="http://wa.me/2348039530051" rel="noopener noreferrer">
               <i className="fa fa-whatsapp" aria-hidden="true"/></a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="LINKEDIN">
            <FooterLinkList >
              {/*GitHub */}
                <a href="http://www.linkedin.com/in/meshack-osagie" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"/></a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
</Footer> 
            )
        }
}

export default Footers;


// {/* <Footer size="mini" className="footer-grid">
//     <FooterSection type="">
//         <FooterLinkList>
//         <div className="social-links">
//                                 {/* LinkedIn*/}
//                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                                 <i className="fa fa-linkedin" aria-hidden="true"/></a>
//                                 {/*GitHub */}
//                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                                 <i className="fa fa-github-square" aria-hidden="true"/></a>
//                                 {/* Mail*/}
//                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                                 <i className="fa fa-envelope-square" aria-hidden="true"/></a>

//                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                                 <i className="fab fa-linkedin" aria-hidden="true"/></a>
//                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
//                                 <i className="fab fa-linkedin" aria-hidden="true"/></a>
//                             </div>
//         </FooterLinkList>
//     </FooterSection>
// </Footer> */}