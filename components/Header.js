import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {XIcon} from "@heroicons/react/solid";
import {MicrophoneIcon, SearchIcon} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const handleCancel = () => {
	  searchInputRef.current.value = ''
  }
  const handleSearch = (e) => {
	  e.preventDefault();
	  const term = searchInputRef.current.value;
	  if(!term) return;
	  router.push(`/search/?term=${term}`).then(r => null );
  }
  return (
    <header className={'sticky top-0 bg-white'}>
		<div className={'flex w-full p-6 items-center'}>
			<Image
				onClick={() => router.push("/")}
				className="cursor-pointer"
				width="92"
				height="33"
				alt={'Google search image'}
				src="https://www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-september-3-copy-6753651837109329-s.png"
			/>
			<form className={'flex flex-grow border border-gray-200 items-center shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 rounded-full'}>
				<input
					ref={searchInputRef}
					type="text"
					className="focus:outline-none flex-grow w-full"
				/>
				<XIcon onClick={handleCancel} className={'h-7 text-gray-500 cursor-pointer transform duration-100 transform hover:scale-125 pr-2'} />
				<MicrophoneIcon className={'h-6 mr-3 hidden md:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'} />
				<SearchIcon className={'h-6 text-blue-500 cursor-pointer hidden md:inline-flex '} />
				<button onClick={handleSearch} type={'submit'} className={'hidden'}>Search</button>
			</form>
			<Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6rRrLqrgFY701efqSWBJ6mKOUVrTEsao5znFHv=s64-c-mo" className={'ml-auto'} />
		</div>
		{/*Header options*/}
		<HeaderOptions />
    </header>
  );
}

export default Header;
