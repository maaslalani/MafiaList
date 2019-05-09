import React from 'react';
import { Link } from 'react-router-dom';
import MafiaCompany from './MafiaCompany';
import SUBCOMPANIES from '../data';

class Company extends React.Component {
  render() {
    const company = this.props.match.params.company;
    const imageUrl = require(`../assets/${company}.png`);
    return (
      <main>
        <Link to='/'>
          <h1>&larr; MafiaList</h1>
        </Link>
        <a rel='noopener noreferrer' target='_blank' href={'https://' + company + '.com'}>
          <div className='companyHeader'>
            <img src={imageUrl} alt='' />
            <h2>{company}</h2>
          </div>
        </a>
        <p>Companies founded by X-{company} employees</p>
        <div className='subcompanies'>
          {
            SUBCOMPANIES[company]
              .map(company => <MafiaCompany key={company.subcompany} company={company} />)
          }
        </div>
      </main>
    );
  }
}

export default Company;
