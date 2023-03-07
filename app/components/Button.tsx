'use client';

import { CSSProperties } from "react";
import classNames from 'classnames'

export interface ButtonProps {
    text: string;
    onClick?: Function;
    class?: string;
    style?: CSSProperties
}

export default function Button (props: ButtonProps) {

    const buttonClass = classNames(
        "bg-white text-black transition-colors hover:bg-ctrl9 hover:text-white px-14 py-2 font-semibold",
        props.class
    )

    return (

        <button 
        className={buttonClass}
        onClick={()=>{console.log("CLICK!")}}
        style={props.style}
        >
            {props.text}
        </button>
    )
}