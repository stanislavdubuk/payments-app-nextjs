import Head from 'next/head';
import type { NextPage } from 'next';

import { Container } from '../components/Container';
import { PaymentForm } from '../components/PaymentForm';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Payment App</title>
        <meta name='description' content='Payment Application' />
      </Head>

      <PaymentForm />
    </Container>
  );
};

export default Home;
