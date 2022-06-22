import React from 'react';
import CustomInputContainer from './style'

const index = ({type , placeholder , name , label , bgColor}) => (
    <CustomInputContainer bgColor={bgColor} >
        <p>{label}</p>
        <input type={type} placeholder={placeholder} name={name} />
    </CustomInputContainer>
  )

export default index