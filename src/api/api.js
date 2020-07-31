//https://codesandbox.io/s/react-fetch-class-urndw?file=/src/index.js:1004-1095

import { useState, useEffect, useRef, useCallback } from 'react'
/**
 * HOOK 封装请求方法
 * @param {*} url
 * @param {*} params
 */
export default function getApi(url, params) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setError] = useState(null)
  const prevInit = useRef()
  const prevUrl = useRef()

  if (prevUrl.current === url && prevInit.current === init) return;

  useEffect(() => {
    fetch(process.env.BASE_URL + url, params)
      .then(res => {
        if (res.ok) return res.json()
        setError(res)
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(()=>[
        setLoading(false)
      ])
  }, [url, init])

  //回调处理函数
  const setQueryValue = useCallback(
    debounce(query => setQuery(query), 500),
    []
  );

  //hook请求数据
  useEffect(()=>{
    (async () => {
      setLoading(true)
      setData(await fetch('/user'))
      setLoading(false)
    })();
  }, [query])

  return {data, loading, err}
}

//use
const {data, loading, err} = getApi('/user')
