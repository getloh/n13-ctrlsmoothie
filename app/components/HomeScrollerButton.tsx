import classNames from "classnames"

export interface HomeScrollerButtonProps{
    text?: string;
    active?: boolean;
    onClick: Function;
}

export default function HomeScrollerButton(props: HomeScrollerButtonProps) {

    const buttonStyles = props.active ? classNames(
        "h-16 w-24 bg-ctrl2 hover:bg-ctrl3 transition-colors",
    ) : classNames(
        "h-16 w-24 bg-white hover:bg-ctrl3 transition-colors",
    )

    return (

        <button className={buttonStyles}
            onClick={() => {props.onClick()}}
        >
            <p className="font-semibold">
            {props.text}
            </p>
        </button>
    )
}