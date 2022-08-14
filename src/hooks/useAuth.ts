import axios from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'
import { useLoginUser } from '../hooks/useLoginUser'

export const useAuth = () => {
  const navigation = useNavigate()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      /* 
      正常に取得できたら"/home"に遷移
      それ以外はエラーを表示させる  
    */
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data)
            showMessage({ title: 'ログインしました', status: 'success' })
            navigation('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
            alert('ユーザーが見つかりません')
            setLoading(false)
          }
        })
        .catch(() =>
          showMessage({ title: 'ログインできません', status: 'error' })
        )
        .finally(() => setLoading(false))
    },
    [navigation, showMessage, setLoginUser]
  )
  return { login, loading }
}
