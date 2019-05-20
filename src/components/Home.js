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

        <footer class="footer">Made with <span role="img" aria-label="Man in Tuxedo">🤵</span> by <a href="https://maaslalani.com/" rel="noopener noreferrer" target='_blank'>Maas</a>, <a href="https://adamgonen.com/" rel="noopener noreferrer" target='_blank'>Adam</a>, and <a href="https://darshilpatel.com" rel="noopener noreferrer" target='_blank'>Darshil</a>.<br/>Did we miss a company? <a href="https://mafialist.typeform.com/to/NuYeN3" rel="noopener noreferrer" target='_blank'>Let us know.</a></footer>
      </main>
    );
  }
}

export default Home;
