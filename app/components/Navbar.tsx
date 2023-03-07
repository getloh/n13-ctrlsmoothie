


export default function Navbar()
{


    return (
        <nav className="relative py-8 px-4 flex justify-between">
            <div className="w-5">

            </div>

            <div className="flex-col space-x-10">
                <button>
                    Products
                </button>
                <button>
                    Juice clinic
                </button>
                <button>
                    CPJ
                </button>
                <button>
                    About CPJ
                </button>
                <button>
                    Gallery
                </button>
            </div>

            <div className="w-1/5 border items-center flex">
                <button className="bg-white px-4 py-1">SIGN UP</button>
                <button className="justify-center align-middle p-2 border"><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 96 960 960" ><path d="M196 936q-16 0-28.5-9.5T151 902L38 495q-4-15 5.5-27T69 456h200l185-270q5-6 11-9.5t14-3.5q8 0 14 3.5t11 9.5l184 270h205q15 0 24.5 12t5.5 27L809 902q-4 15-16.5 24.5T764 936H196Zm10-60h548l101-360H106l100 360Zm274-120q25 0 42.5-17.5T540 696q0-25-17.5-42.5T480 636q-25 0-42.5 17.5T420 696q0 25 17.5 42.5T480 756ZM342 456h273L479 256 342 456ZM206 876h548-548Z"/></svg></button>
            </div>
        </nav>

    )
}