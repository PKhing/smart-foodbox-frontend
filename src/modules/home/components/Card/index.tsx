import Button from 'common/components/Button'
import TextArea from 'common/components/TextArea'
import Typography from 'common/components/Typography'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useExpand from './hooks/useExpand'
import {
  ButtonContainer,
  CardContainer,
  ClockIcon,
  ExpandIcon,
  ImageContainer,
  InformationConatainer,
  LongInfoContainer,
  NoteIcon,
  ShrinkIcon,
  WeigtIcon,
} from './styled'
import { CardProps } from './types'

const Card = ({ variant, time, weight, note }: CardProps) => {
  const { expand, handleExpand, handleShrink } = useExpand(variant || 'default')

  useEffect(() => {
    if (variant != 'short') handleExpand()
    else handleShrink()
  }, [handleExpand, handleShrink, variant])

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
        {variant === 'edit' ? (
          <TextArea placeholder="Note ..." />
        ) : (
          note && (
            <InformationConatainer>
              <NoteIcon />
              <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
                {note}
              </Typography>
            </InformationConatainer>
          )
        )}
      </LongInfoContainer>
      {variant === 'edit' && (
        <ButtonContainer>
          <Button variant="secondary">ยกเลิก</Button>
          <Button>ยืนยัน</Button>
        </ButtonContainer>
      )}
      {variant === 'short' &&
        (expand ? (
          <ShrinkIcon onClick={handleShrink} />
        ) : (
          <ExpandIcon onClick={handleExpand} />
        ))}
    </CardContainer>
  )
}

export default Card
