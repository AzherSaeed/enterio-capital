import React from 'react'
import CustomTextAreaContaienr from './style'

const index = ({placeholder , name}) => (
    <CustomTextAreaContaienr>
      <p>Message</p>
      <textarea placeholder={placeholder} name={name} />
    </CustomTextAreaContaienr>
  )

export default index