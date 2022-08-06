/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useCallback, useState } from 'react'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'

export const UserAllUser = () => {
  /*
    ローディングとデータ取得を返すhooks
    api取得中はloadingにしたい
  */
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>([])
  const getUser = useCallback(() => {
    setLoading(true)
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users/')
      .then((res) => setUsers(res.data))
      .catch((err) => {
        showMessage({ title: 'ユーザー取得に失敗しました。', status: 'error' })
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  return { getUser, loading, users }
}
