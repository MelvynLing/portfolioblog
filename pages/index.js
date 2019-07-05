import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import Typed from 'react-typed';
import ParticleBG from '../components/shared/ParticleBG';

import { Container,Row,Col } from 'reactstrap';


class Index extends React.Component {

     constructor(props) {
          super(props);

          this.knowledge = ['HTML5','CSS3','JavaScript','Firebase','Node.JS','MySQL','MongoDB','React.js','RESTful APIs',]

          this.workingOn =['Angular','TypeScript','SASS','Blockchain','Python',]
     }

     render() {

          return (
               <BaseLayout className="cover">
                    <ParticleBG/>
                    <div className="main-section">
                         <Container>
                              <Row>
                                   <Col md="6" sm='12'>
                                        <div className="hero-section centered">
                                        <div className={`flipper`}>
                                        <div className="back">
                                             <div className="hero-section-content">
                                             <h2><strong>Full Stack Web Developer </strong> </h2>
                                             <div className="hero-section-content-intro">
                                                  Take a firsthand look at my skillset and see what I am capable of!
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
                                             portfolio website of<br></br> Melvyn Ling
                                        </h1>
                                        <h2>
                                        Form. Function. Melvyn Ling is a full stack web developer whose creative flair and adaptive nature strike the balance between them. Take a look at the projects that he has been developing or drop him a line to collaborate on one!
                                        </h2>
                                        <h3>
                                             Knowledgable in:
                                        </h3>
                                        <div className='centered'>
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
                                        />
                                        </div>
                                        <h3>
                                             Currently learning:
                                        </h3>
                                        <div className='centered'>
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
                                        />
                                        </div>
                                        </div>
                                        <div className="hero-welcome-bio">
                                        <h1>
                                           Let's take a look <br/> at his work!
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
