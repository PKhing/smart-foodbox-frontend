import Button from 'common/components/Button'
import TextArea from 'common/components/TextArea'
import Typography from 'common/components/Typography'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import useEdit from './hooks/useEdit'
import useExpand from './hooks/useExpand'
import {
  ButtonContainer,
  CardContainer,
  ClockIcon,
  ExpandIcon,
  ImageContainer,
  InformationConatainer,
  Loading,
  LongInfoContainer,
  NoteIcon,
  ShrinkIcon,
  WeigtIcon,
} from './styled'
import { CardProps } from './types'

const Card = (props: CardProps) => {
  const { variant, timeCreated, weight, note, img, id } = props
  const { expand, handleExpand, handleShrink } = useExpand(variant)
  const { value, handleChange, handleSave, handleDelete, loading } = useEdit(id)
  return (
    <CardContainer expand={expand}>
      <ImageContainer expand={expand}>
        <Image src={img} alt="" layout="fill" objectFit="cover" />
      </ImageContainer>
      <InformationConatainer>
        <ClockIcon />
        <Typography color="$primary600" css={{ marginBottom: '-3px' }}>
          {moment(timeCreated).format('DD/MM/YYYY HH:mm')}
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
      <Loading loading={loading}>
        <BallTriangle height="100" width="100" color="#FFFFFFCC" />
      </Loading>
    </CardContainer>
  )
}

export default Card
