import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Card, styled, Tooltip } from '@mui/material';
import { isEmpty } from 'lodash'

import { changeSelectColor } from './colorSetSlice'


const WorstColorSet = ({ setIsWorst }) => {
  const wortcolors = useSelector(state => state.colorSetList.worstColor);
  const dispatch = useDispatch()


	return (
  <Div>
		<Text>워스트 컬러팔레트</Text>
		<Pallete >
        {!isEmpty(wortcolors) ? wortcolors.map((item, index) => (
          <Tooltip title={item} key={index}  placement="top">
          <ColorItem
            item={item}
            onClick={() => {
              dispatch(changeSelectColor(item));
              setIsWorst(true)
            }} key={index}/>
          </Tooltip>
        ))
      :
      <p style={{margin:'auto'}}>
      최대 10개의 컬러를 추가할 수 있어요.
      </p>
      }
		</Pallete>
  </Div>
)
}
export default WorstColorSet

const Div = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,
})

const Text = styled('p')({
  color: '#5A4D4D',
  fontWeight: 'bold',
})

const Pallete = styled(Card)({
  display:'flex', 
  justifyContent:'start', 
  alignItems:'center', 
  backgroundColor: '#F5F5F5', 
  border: '1px solid #5A4D4D',
  height: 34, 
  width: 323,
})

const ColorItem = styled(Box)((props) => ({
  backgroundColor: props.item, 
  width: 30, 
  height: 30, 
  margin: 1,
  cursor: 'pointer',
}))