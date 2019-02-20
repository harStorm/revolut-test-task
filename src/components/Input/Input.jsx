//@flow
import React from 'react';

type InputProps = {
    onChange: Function,
    name: string,
    value: string,
}

const Input = ({
    onChange,
    value,
    name,
}: InputProps) => (
    <input
        className="currency__input"
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder="0"
        size=""
        autoComplete="off"
    />
)

export default Input;