import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
     render() {          
          return(
               <BaseLayout>
                    <BasePage className="about-page">
                         <h1>i am about page</h1>
                    </BasePage>
               </BaseLayout>
          )
     }   
}

export default About;