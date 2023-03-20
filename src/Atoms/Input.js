import React from 'react'


function Input ({placeholder,type,onChange,disabled}){



    return (
        <>
        <input disabled={disabled} placeholder={placeholder} type={type} onChange={onChange} />
        
        
        
        
        </>

    )
}
export default Input
