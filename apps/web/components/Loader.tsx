import Image from "next/image";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200">
        <Image
          alt={"Loader image"}
          width={24}
          height={24}
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
    </div>
  </div>
);

export default Loader;
