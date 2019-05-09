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
            <Tag content={founder} label='Founder' color='#F18805' />
            <Tag content={year} label='Founded' color='#202C59' />
            <Tag content={employees} label='Employees' color='#D95D39' />
          </div>
        </div>
      </a>
    );
  }
}

export default MafiaCompany;
