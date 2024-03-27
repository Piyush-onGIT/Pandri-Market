import Head from "next/head";
import UploadPosts from "../../components/UploadPosts";

const uploadPosts = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dddddd]">
      <Head>
        <title>UploadPosts</title>
      </Head>

      <main>
        <UploadPosts />
      </main>
    </div>
  );
};

export default uploadPosts;
