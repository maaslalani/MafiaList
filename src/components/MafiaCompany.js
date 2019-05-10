import React from 'react';
import Tag from './Tag';

class MafiaCompany extends React.Component {
  render() {
    const { logo, url, subcompany, founder, year, employees } = this.props.company;
    return (
      <a
        rel="noopener noreferrer"
        target='_blank'
        href={'https://' + url}
      >
        <div className='subcompany'>
          <div className='top'>
            <img src={`https://${logo}`} alt={logo} />
            <p>
              {subcompany}
            </p>
          </div>
          <div className='bottom'>
            <Tag content={founder} label='Founder' color='#9FB4C7' />
            <Tag content={year} label='Founded' color='#28587B' />
            <Tag content={employees} label='Employees' color='#424B54' />
          </div>
        </div>
      </a>
    );
  }
}

export default MafiaCompany;
