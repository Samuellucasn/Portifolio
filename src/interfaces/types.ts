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

export interface ProjectCardType {
    thumbnail: string,
    code: string,
    web: string
}

export interface StampType {
    children: React.ReactNode
}

export interface StarType {
    x: number,
    y: number
}