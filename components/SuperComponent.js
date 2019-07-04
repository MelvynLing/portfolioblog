import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';

class SuperComponent extends React.Component {

     constructor(props){
          super(props);
          this.someVariable = 'just somer variable'
     }

     alertName(title){
          alert(title);
     }

     render() {          
          return(
               <BaseLayout>
                    <h1>I am blog</h1>
               </BaseLayout>
          )
     }   
}

export default SuperComponent;