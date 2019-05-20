import React from 'react';
import Tag from './Tag';
import Tippy from '@tippy.js/react'
import TooltipData from './TooltipData';

class MafiaCompany extends React.Component {
  render() {
    const { logo, url, subcompany, founder, year, employees, linkedinUrl } = this.props.company;
    return (
      <div>
        <div className='subcompany'>
          <a
          rel="noopener noreferrer"
          target='_blank'
          className='top'
          href={'https://' + url}
          >
            <div>
              <div id="image-container">
                <img src={`https://${logo}`} alt={logo} />
              </div>
              <p>
                {subcompany}
              </p>
            </div>
          </a>
          <div className='bottom'>
            <Tippy content={<TooltipData linkedinUrl={linkedinUrl} founder={founder}/>}  trigger='click' placement='bottom' interactive='true'>
              <button style={{padding: '0', background: 'transparent', border: 'none', outline: 'none'}}>
                <div id={subcompany} style={{cursor: 'pointer'}}>
                  <Tag  content={founder} label='Founder' color='#9FB4C7' />
                </div>
              </button>
            </Tippy>
            <Tag content={year} label='Founded' color='#28587B' />
            <Tag content={employees} label='Employees' color='#424B54' />
          </div>
        </div>
      </div>
    );
  }
}

export default MafiaCompany;
