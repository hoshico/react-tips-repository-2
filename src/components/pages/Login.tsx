import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react'
import React, { FC, memo } from 'react'

export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="ceter" height="100vh">
      <Box
        bg="white"
        w="sm"
        p={4}
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3}>
          <Input placeholder="ユーザーID" />
          <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
          >
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})
