import React from 'react';
import BaseLayout from '../components/layouts/Baselayout';
import axios from 'axios';
import { withRouter } from 'next/router'
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {

static async getInitialProps({query}) {
     const portfolioId = query.id; 
     let portfolio = {};
     
     try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
          portfolio = response.data;

     } catch(err) {
          console.error(err)
     }

     return{portfolio};
}

     render() { 
          const { portfolio } = this.props;

          return(
          <BaseLayout>
               <BasePage className="portfolio-page">
                    <h1>Title: {portfolio.title}</h1>
                    <h2>Portfolio ID: {portfolio.id}</h2>
                    <p>Body: {portfolio.body}</p>
               </BasePage>
          </BaseLayout>


          )
     }   
}

export default withRouter(Portfolio);
