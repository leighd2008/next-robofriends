import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import Header from '../components/Header'
import { checkPropTypes } from 'prop-types';

const RobotPage = (props) => (
  <div>
    <Header />
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${props.data.id}?size=200x200`} />
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.data.email}</p>
      </div>
    </div>
    <Link href='/'>
      <button>Home</button>
    </Link>
  </div>
)

RobotPage.getInitialProps = async function({ query }) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`)
  const data = await req.json();

  return { data };
}
export default RobotPage