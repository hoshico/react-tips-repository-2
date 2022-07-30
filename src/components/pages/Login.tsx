import { Box, Button, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { ChangeEvent, FC, memo, useState } from 'react'

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

  return (
    <Flex align="center" justify="ceter" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})
