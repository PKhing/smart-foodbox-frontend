import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import {
  ButtonContainer,
  CardContainer,
  ClockIcon,
  ImageContainer,
  InformationConatainer,
  WeigtIcon,
} from './styled'
import { CardProps } from './types'

const Card = ({ time, weight }: CardProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src="/placeholder.png" alt="" layout="fill" objectFit="cover" />
      </ImageContainer>
      <InformationConatainer>
        <ClockIcon />
        <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
          {moment(time).format('DD/MM/YYYY hh:mm')}
        </Typography>
      </InformationConatainer>
      <InformationConatainer>
        <WeigtIcon />
        <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
          {weight} กรัม
        </Typography>
      </InformationConatainer>
      <ButtonContainer>
        <Button variant="secondary">ยกเลิก</Button>
        <Button>ยืนยัน</Button>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card
