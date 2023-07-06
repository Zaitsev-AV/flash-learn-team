import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './registration-form.module.scss'
import { registrationSchema } from './schema.ts'

import { Button, Card, ControlledTextField, Typography } from '@/components'

type Form = z.infer<typeof registrationSchema>
type PropsType = {
  onSubmit: (data: Omit<Form, 'confirmPassword'>) => void
}
export const RegistrationForm: FC<PropsType> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<Form>({
    resolver: zodResolver(registrationSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit({ email: data.email, password: data.password })
    reset()
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          control={control}
          title={'Email'}
          inputType={'text'}
          className={s.email}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          title={'Password'}
          inputType={'password'}
          className={s.password}
          name={'password'}
        />
        <ControlledTextField
          control={control}
          title={'Confirm Password'}
          inputType={'password'}
          className={s.confirmPassword}
          name={'confirmPassword'}
        />
        <Button variant={'primary'} type={'submit'} fullWidth={true} className={s.button}>
          Sign Up
        </Button>
      </form>
      <div className={s.footer}>
        <Typography variant={'body2'}>Already have an account?</Typography>
        <Typography as={'a'} href={'/sign-in'} variant={'link1'} className={s.footerLink}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
