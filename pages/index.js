import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import Typed from 'react-typed';
import ParticleBG from '../components/shared/ParticleBG';

import { Container,Row,Col } from 'reactstrap';


class Index extends React.Component {

     constructor(props) {
          super(props);

          this.knowledge = ['HTML5','CSS3','JavaScript','Firebase','Node.JS','MySQL','MongoDB','React.js']

          this.workingOn =['Angular','TypeScript','SASS','Blockchain','Python']
     }

     render() {

          return (
               <BaseLayout className="cover">
                    <ParticleBG/>
                    <div className="main-section">
                         <Container>
                              <Row>
                                   <Col md="6">
                                        <div className="hero-section">
                                        <div className={`flipper`}>
                                        <div className="back">
                                             <div className="hero-section-content">
                                             <h2><strong>Full Stack Web Developer </strong> </h2>
                                             <div className="hero-section-content-intro">
                                                  Have a look at my portfolio and job history.
                                             </div>
                                             </div>
                                             <img className="image" src="/static/images/section-1.png"/>
                                             <div className="shadow-custom">
                                             <div className="shadow-inner"> </div>
                                             </div>
                                        </div>
                                        </div>
                                        </div>
                                        
                                   </Col>
                                   <Col md="6" className="hero-welcome-wrapper">
                                        <div className="hero-welcome-text">
                                        <h1>
                                             Welcome to the <br></br>
                                             portfolio website of<br></br> Melvyn Ling.
                                        </h1>
                                        <h2>
                                             Take a look at the projects that I'be been working on, or drop me a line to collaborate on a project!
                                        </h2>
                                        <h3>
                                             Knowledgable in:
                                        </h3><br></br>
                                        <Typed
                                             loop
                                             typeSpeed={70}
                                             backSpeed={70}
                                             strings={this.knowledge}
                                             backDelay={1000}
                                             loopCount={0}
                                             showCursor
                                             cursorChar="|"
                                             className ="self-typed"
                                        /><br></br>
                                        <h3>
                                             Currently learning:
                                        </h3><br></br>
                                        <Typed
                                             loop
                                             typeSpeed={70}
                                             backSpeed={70}
                                             strings={this.workingOn}
                                             backDelay={1000}
                                             loopCount={0}
                                             showCursor
                                             cursorChar="|"
                                             className ="self-typed"
                                        /><br></br>
                                        </div>
                                        <div className="hero-welcome-bio">
                                        <h1>
                                           Let's take a look <br/> at my work!
                                        </h1>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </div>
                    
               </BaseLayout>

          )
     }
}



export default Index;
