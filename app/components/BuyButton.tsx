
import classNames from "classnames"

export default function BuyButton(props)
{

    const buttonClass = classNames(
        "flex flex-row justify-center items-center align-middle h-8 bg-white hover:pl-5 transition-all ",
        props.className
    )

    return (

        <button className={buttonClass} >
            <p className="bg-white  h-full font-bold p-1 px-3  ">
                £4.50
            </p>
            <div className="bg-ctrl3 h-full font-bold text-xl px-2 aspect-square">
                +
            </div>
        </button>

        // <button style={{display: "flex", height: "3rem", justifyContent: "center", alignItems: "center"}}>
        //     <p style={{backgroundColor: "white", padding: "2px", height: "100%"}}>£4.50</p>
        //          <div className="bg-ctrl3" style={{height: "100%"}}>
        //     <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" width="24" viewBox="0 0 48 48"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" /></svg>
        //     </div>
        // </button>
    )
}