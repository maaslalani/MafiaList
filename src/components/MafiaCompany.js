import React from 'react';
import Tag from './Tag';

class MafiaCompany extends React.Component {
  render() {
    const { logo, subcompany, founder, year, employees } = this.props.company;
    return (
      <div className='subcompany'>
        <div className='top'>
          <img src={`https://${logo}`} alt={logo} />
          {subcompany}
        </div>
        <div className='bottom'>
          <Tag content={founder} label='Founder' color='#ECCBD9' />
          <Tag content={year} label='Founded' color='#83BCFF' />
          <Tag content={employees} label='Employees' color='#80FFE8' />
        </div>
      </div>
    );
  }
}

export default MafiaCompany;
