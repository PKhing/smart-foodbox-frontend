import Button from 'common/components/Button'
import TextArea from 'common/components/TextArea'
import Typography from 'common/components/Typography'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import useEdit from './hooks/useEdit'
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

const Card = ({ variant, timeCreated, weight, note, id }: CardProps) => {
  const { expand, handleExpand, handleShrink } = useExpand(variant)
  const { value, handleChange, handleSave, handleDelete } = useEdit(id)
  return (
    <CardContainer expand={expand}>
      <ImageContainer expand={expand}>
        <Image src="/placeholder.png" alt="" layout="fill" objectFit="cover" />
      </ImageContainer>
      <InformationConatainer>
        <ClockIcon />
        <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
          {moment(timeCreated).format('DD/MM/YYYY hh:mm')}
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
          <TextArea
            placeholder="Note ..."
            value={value}
            onChange={handleChange}
          />
        ) : (
          note !== '' && (
            <InformationConatainer>
              <NoteIcon />
              <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
                {note}
              </Typography>
            </InformationConatainer>
          )
        )}
      </LongInfoContainer>

      {variant === 'edit' ? (
        <ButtonContainer>
          <Button variant="secondary" onClick={handleDelete}>
            ลบ
          </Button>
          <Button onClick={handleSave}>บันทึก</Button>
        </ButtonContainer>
      ) : expand ? (
        <ShrinkIcon onClick={handleShrink} />
      ) : (
        <ExpandIcon onClick={handleExpand} />
      )}
    </CardContainer>
  )
}

export default Card
