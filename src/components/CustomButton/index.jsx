import React from 'react';
import {CustomButtonContainer} from './style'

const index = ({text , bgColor , color , padding, margin, width  }) => (
  <CustomButtonContainer bgColor={bgColor} color={color} padding={padding} margin={margin} width={width} >
    <button type='button' >{text}</button>
  </CustomButtonContainer>
);

export default index;
