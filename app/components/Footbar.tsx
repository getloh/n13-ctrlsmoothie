'use client';


export default function Footbar()
{
    return (
        <nav className="relative py-8 px-4 flex justify-between">
            <div className="flex-col space-x-4 lg:space-x-10">
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

            <div className="">
                <button onClick={()=>{ window.location.href = "https://getloh.co.uk" }}>
                    Steven Loh 2023
                </button>
            </div>
        </nav>

    )
}