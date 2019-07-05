import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import BasePage from '../components/BasePage';

class Cv extends React.Component {
     render() {          
          return(
          <BaseLayout>
               <BasePage>
                   <h1>I am Resume</h1>
               </BasePage>
          </BaseLayout>
          )
     }   
}

export default Cv;