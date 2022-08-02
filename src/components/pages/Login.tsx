import React, { ChangeEvent, FC, memo, useState } from 'react'
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { useAuth } from '../../hooks/useAuth'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Login: FC = memo(() => {
  const { login, loading } = useAuth()
  /*
    inputに入力した値をstateに保持する
    入力: onChangeで入力値をstateに保持
    ログインボタン: onClickでフェッチに使用する
    
    ログインをクリックでlogin()に入力した値を渡す
    axiosでフェッチする
  */
  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onclickLogin = () => login(userId)
  return (
    <Flex align="center" justify="ceter" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
        </Stack>
        <PrimaryButton disabled={userId === ''} loading={loading} onClick={onclickLogin}>
          ログイン
        </PrimaryButton>
      </Box>
    </Flex>
  )
})
