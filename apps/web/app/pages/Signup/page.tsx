import Head from 'next/head';
import Signup from '../../components/Signup';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dddddd]">
      <Head>
        <title>Signup</title>
      </Head>

      <main>
        <Signup />
      </main>
    </div>
  )
}

export default SignupPage