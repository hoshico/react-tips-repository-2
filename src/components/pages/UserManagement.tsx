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
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), [])

  // propsで渡す関数はmemo化してあげる方が良い
  const onClickUser = useCallback(
    (id: number) => {
      // onSelectUser({ id: id, users: users})なので省略記法
      onSelectUser({ id, users, onOpen })
    },
    [users, onSelectUser, onOpen]
  )

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
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} user={selectedUser} />
    </>
  )
})
