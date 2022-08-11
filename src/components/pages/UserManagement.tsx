import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import React, { FC, memo, useCallback, useEffect } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { UseAllUsers } from '../../hooks/UseAllUsers'
import { UserDetailModal } from '../organisms/user/UserDetailModal'

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers()
  const { isOpen, onClose, onOpen } = useDisclosure()
  useEffect(() => getUsers(), [])

  const onclickUser = useCallback(() => onOpen(), [])

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
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
})
