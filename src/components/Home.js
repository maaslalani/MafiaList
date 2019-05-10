import React from 'react';
import { Link } from 'react-router-dom';

const COMPANIES = [
  'Uber',
  'Microsoft',
  'Apple',
  'Twitter',
  'Facebook',
  'Paypal',
  'Google',
  'Shopify',
];

const Company = ({company}) => (
  <Link to={company}>
    <section className='company'>
      <img className='image' src={require(`../assets/${company}.png`)} alt={company} />
      <p className='name'>{company}</p>
    </section>
  </Link>
)

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>MafiaList</h1>
        <p>Companies founded by X-Company employees</p>

        <p>Any big tech company hires extremely talented employees, here we feature some employees that have worked at these tech companies and then proceeded to found their own.</p>
        <div className='companies'>
          {
            COMPANIES.map(company => <Company company={company} />)
          }
        </div>

        <p className='footer'>Made with 🤵 by <a href="https://maaslalani.com/">Maas</a>, <a href="https://adamgonen.com/">Adam</a>, <a href="https://jordangonen.com">Jordan</a> and <a href="https://darshilpatel.com">Darshil</a>.</p>
      </main>
    );
  }
}

export default Home;
