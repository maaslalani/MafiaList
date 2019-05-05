import React from 'react';
import { Link } from 'react-router-dom';
import MafiaCompany from './MafiaCompany';
import SUBCOMPANIES from '../data';

class Company extends React.Component {
  render() {
    const company = this.props.match.params.company;
    return (
      <main>
        <Link to='/'>Back</Link>
        <h1>MafiaList, {company}</h1>
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
