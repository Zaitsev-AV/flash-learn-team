import { FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Page } from '@/components'
import { LearnDesk } from '@/components/ui/learn-deck'
import { EmptyDeck } from '@/components/ui/loaders/empty-deck/empty-deck.tsx'
import { useGetDeckQuery, useLearnDeckQuery, useUpdateCardGradeMutation } from '@/services'

export const LearnDeckPage: FC = () => {
  const [value, setValue] = useState<string>('')
  const { id } = useParams<{ id: string }>()
  const { data: cardData } = useLearnDeckQuery(id ?? '')
  const [updateCardGrade] = useUpdateCardGradeMutation()
  const { data: deckData } = useGetDeckQuery(id ?? '')

  const handleUpdateCardGrade = () => {
    if (id && cardData) {
      updateCardGrade({ id, cardId: cardData.id, grade: +value })
      setValue('')
    }
  }

  if (cardData === undefined)
    return (
      <Page>
        <EmptyDeck />
      </Page>
    )

  console.log(cardData)

  return (
    <Page>
      {cardData && deckData && (
        <LearnDesk
          deckName={deckData.name}
          question={cardData.question}
          attempts={cardData.shots}
          answer={cardData.answer}
          loadNextQuestion={handleUpdateCardGrade}
          onChange={setValue}
          value={value}
        />
      )}
    </Page>
  )
}
