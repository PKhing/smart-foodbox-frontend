import Button from 'common/components/Button'
import Typography from 'common/components/Typography'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import useExpand from './hooks/useExpand'
import {
  ButtonContainer,
  CardContainer,
  ClockIcon,
  ExpandIcon,
  ImageContainer,
  InformationConatainer,
  LongInfoContainer,
  ShrinkIcon,
  WeigtIcon,
} from './styled'
import { CardProps } from './types'

const Card = ({ variant, time, weight }: CardProps) => {
  const { expand, handleExpand, handleShrink } = useExpand(variant || 'default')
  return (
    <CardContainer expand={expand}>
      <ImageContainer expand={expand}>
        <Image src="/placeholder.png" alt="" layout="fill" objectFit="cover" />
      </ImageContainer>
      <InformationConatainer>
        <ClockIcon />
        <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
          {moment(time).format('DD/MM/YYYY hh:mm')}
        </Typography>
      </InformationConatainer>
      <LongInfoContainer expand={expand}>
        <InformationConatainer>
          <WeigtIcon />
          <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
            {weight} กรัม
          </Typography>
        </InformationConatainer>
      </LongInfoContainer>
      {variant == 'withButton' && (
        <ButtonContainer>
          <Button variant="secondary">ยกเลิก</Button>
          <Button>ยืนยัน</Button>
        </ButtonContainer>
      )}
      {variant == 'short' &&
        (expand ? (
          <ShrinkIcon onClick={handleShrink} />
        ) : (
          <ExpandIcon onClick={handleExpand} />
        ))}
    </CardContainer>
  )
}

export default Card
