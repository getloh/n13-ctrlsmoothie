import Button from "./Button";
import LogoSvg from "./LogoSvg";


export default function Navbar()
{


    return (
        <nav className="relative py-8 px-4 flex justify-between">
            <div className="items-center flex h-12 justify-start w-40">
                <button className="sm:hidden hover:scale-125 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 48 48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" /></svg>
                </button>
            </div>

            <div className="flex space-x-10 h-12 justify-center items-center">
                <button className="hidden sm:block hover:scale-125 transition-transform">
                    Products
                </button>
                <button className="hidden sm:block hover:scale-125 transition-transform">
                    Juice clinic
                </button>
                <button className="h-12 flex pt-1 hover:scale-125 transition-transform -translate-x-1/4 sm:-translate-x-0">
                    <LogoSvg size={40} /> <p className="text-3xl">CPJ</p>
                </button>
                <button className="hidden sm:block hover:scale-125 transition-transform">
                    About CPJ
                </button>
                <button className="hidden sm:block hover:scale-125 transition-transform">
                    Gallery
                </button>
            </div>

            <div className="items-center flex h-12 justify-end w-40">
                <button className="hidden sm:block bg-white text-black transition-colors hover:bg-ctrl9 hover:text-white px-4 py-2 font-semibold" >SIGN UP</button>

                <button className="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="22" width="22"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" /></svg>
                </button>

                <button className="justify-center align-middle p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 96 960 960" ><path d="M196 936q-16 0-28.5-9.5T151 902L38 495q-4-15 5.5-27T69 456h200l185-270q5-6 11-9.5t14-3.5q8 0 14 3.5t11 9.5l184 270h205q15 0 24.5 12t5.5 27L809 902q-4 15-16.5 24.5T764 936H196Zm10-60h548l101-360H106l100 360Zm274-120q25 0 42.5-17.5T540 696q0-25-17.5-42.5T480 636q-25 0-42.5 17.5T420 696q0 25 17.5 42.5T480 756ZM342 456h273L479 256 342 456ZM206 876h548-548Z" /></svg>
                </button>
            </div>
        </nav>

    )
}