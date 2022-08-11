import { Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC, memo, useCallback, useEffect } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { UseAllUsers } from '../../hooks/UseAllUsers'

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = UseAllUsers();

  useEffect(() => {

  },[]);

  const onclickUser = useCallback(() => onOpen(),[]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onclickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent pb={6}>
            <ModalHeader>
              ユーザー詳細
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value="やす" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="yasuyuki hoshimoto" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input value="1234@yasu.com" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value="090-0000-0000" isReadOnly />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
      </Modal>
    </>
  )
})
