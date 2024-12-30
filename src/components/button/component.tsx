'use client'
import './component.scss'

type ButtonTypes = 'button' | 'submit' | 'reset'
type ButtonVariant = 'primary' | 'secondary' 

interface ButtonProps{
    buttonName: string
    variant : ButtonVariant;
    type: ButtonTypes;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button ({buttonName,type,onClick,disabled, variant}: ButtonProps) {

    return(
        <button className={variant} type={type} onClick={onClick} disabled={disabled}>{buttonName}</button>
    )
}