'use client';


export default function Footbar()
{
    return (
        <nav className="relative py-8 px-4 flex justify-between flex-col sm:flex-row">
            <div className="flex flex-col sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row lg:space-x-10 items-center">
                <button>
                Terms & Conditions
                </button>
                <button>
                Privacy Policy
                </button>
                <button>
                Contact
                </button>
            </div>

            <div className="flex justify-center pt-4 sm:pt-0">
                <button onClick={()=>{ window.location.href = "https://getloh.co.uk" }} className="text-center">
                    Steven Loh 2023
                </button>
            </div>
        </nav>

    )
}