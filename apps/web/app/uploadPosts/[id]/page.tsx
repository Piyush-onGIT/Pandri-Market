import Head from "next/head";
import UploadPosts from "../../../components/UploadPosts";

const uploadPosts = ({ params }: any) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dddddd]">
      <Head>
        <title>UploadPosts</title>
      </Head>

      <main>
        <h1>{params.id}</h1>
        <UploadPosts />
      </main>
    </div>
  );
};

export default uploadPosts;
