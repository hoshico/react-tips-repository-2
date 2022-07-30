import axios from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/api/user'

export const useAuth = () => {
  const navigation = useNavigate()
  const [loading, setLoading] = useState(false)
  const login = useCallback((id: string) => {
    setLoading(true)
    /* 
      正常に取得できたら"/home"に遷移
      それ以外はエラーを表示させる  
    */
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigation('/home')
        } else {
          alert('ユーザーが見つかりません')
        }
      })
      .catch(() => alert('ログインできません'))
      .finally(() => setLoading(false))
  }, [navigation])
  return { login, loading }
}
