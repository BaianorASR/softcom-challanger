import { NextPage } from 'next';

import { Header } from '../shared/components';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>Hello Word</div>
    </div>
  );
};

export default Home;
