import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {XIcon} from "@heroicons/react/solid";
import {MicrophoneIcon} from "@heroicons/react/outline";

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const handleCancel = () => {
	  searchInputRef.current.value = ''
  }
  return (
    <header>
      <Image
        onClick={() => router.push("/")}
        className="cursor-pointer"
        width="92"
        height="33"
		alt={'Google search image'}
        src="https://www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-september-3-copy-6753651837109329-s.png"
      />
      <form className={'flex border border-gray-200 items-center shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 rounded-full'}>
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow w-full"
        />
		  <XIcon onClick={handleCancel} className={'h-7 text-gray-500 cursor-pointer transform duration-100 transform hover:scale-125'} />
		  <MicrophoneIcon className={'h-6 mr-5 hidden md:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'} />
      </form>
    </header>
  );
}

export default Header;
