import { IconType } from "react-icons/lib";

export interface skillProps {
    color: string, 
    icon: IconType,
    name: string
}

export interface clickArray {
    x: number,
    y: number, 
    t: number
}

export interface AboutType {
    flashMensage: React.Dispatch<React.SetStateAction<boolean>>
}