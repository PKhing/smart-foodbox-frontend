import Typography from 'common/components/Typography'
import React from 'react'
import { BsFillInboxFill } from 'react-icons/bs'

const NoFood = () => {
  return (
    <Typography
      variant="h2"
      color="$primary500"
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '20px 0',
      }}
    >
      <BsFillInboxFill style={{ fontSize: '90px', marginBottom: '14px' }} />
      ยังไม่มีอาหารในกล่อง
    </Typography>
  )
}

export default NoFood
