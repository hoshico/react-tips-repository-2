import { Box, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC, memo } from 'react'

export const UserManagement: FC = memo(() => {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
                alt="プロフィール画像"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                やす
              </Text>
              <Text fontSize="sm" color="gray">
                やす
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  )
})
