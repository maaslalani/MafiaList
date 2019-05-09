import React from 'react';
import Tag from './Tag';

class MafiaCompany extends React.Component {
  render() {
    const { logo, subcompany, founder, year, employees } = this.props.company;
    return (
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
    );
  }
}

export default MafiaCompany;
