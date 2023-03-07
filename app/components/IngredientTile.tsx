import Image from "next/image"
import classNames from "classnames"

export type IngredientTileProps = {
    bgColor: string;
    text: string;
    subtext?: string;
    image?: string;
}

export default function IngredientTile(props: IngredientTileProps){

    const tileClass = classNames(
    "border-2 w-1/2 border-red-500 flex justify-center relative aspect-square lg:w-1/3",
    props.bgColor
    )

    return (

        <div className={tileClass}
        // style={{display: "flex", justifyContent: "center"}}
        >
            <Image
                src="/beet.png"
                alt="beet"
                fill
                style={{border:"1px solid blue", padding: "3rem"}}
            >
            </Image>
            <div className="absolute top-1/2 -translate-y-1/2 text-white">
            <h5 className="text-3xl font-bold">{props.text}</h5>
            <p className="text-xl font-bold text-center">{props.subtext}</p>
            </div>
            <div className="absolute bottom-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="48" viewBox="0 96 960 960" width="48"><path d="M433 873V623H183v-94h250V279h94v250h250v94H527v250h-94Z"/></svg>            </div>
        </div>
    )
}