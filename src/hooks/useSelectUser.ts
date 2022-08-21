import { useCallback, useState } from 'react'
import { User } from '../types/api/user';

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUser = () => {
  // 最初は選ばれていない状態なので
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    // find:一致する最初の要素を返す
    // findは配列の中に必ずしも一致するものがあるとは限らないのでundefinedも含まれる
    const targetUser = users.find((user) => user.id === id);
    // 「targetUser ?? undefined」でも可能
    // ?? は左辺が undefinedもしくはnullなら右辺を返す
    setSelectedUser(targetUser!);
    onOpen();
  }, [])
  return { onSelectUser, selectedUser }
}
