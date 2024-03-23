import { Toaster } from "react-hot-toast";
import HomePage from "./homePage/page";

export default function Page(): JSX.Element {
  return (
    <>
      <Toaster />
      <main className="bg-[#e0d9d0]">
        <HomePage />
      </main>
    </>
  );
}
