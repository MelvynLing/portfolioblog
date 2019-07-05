import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import BasePage from '../components/BasePage';

class Blog extends React.Component {
     render() {          
          return(
               <BaseLayout>
                    <BasePage className="blog-page">
                         <h1>I am blog</h1>
                    </BasePage>
               </BaseLayout>
          )
     }   
}

export default Blog;