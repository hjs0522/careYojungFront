import _ from 'lodash'
import React, { useEffect } from 'react'
import { Form, Search} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { keywordState,serviceState,gradeState,orderState } from '../../atom'
import { useRecoilState } from 'recoil'

const source = [
  {
    title: "성동구",
    description: "Aaaa",
  },
  {
    title: "강남구",
    description: "Aabb",
  },
  {
    title: "성북구",
    description: "Aacc",
  },
  {
    title: "강서구",
    description: "Aabbcc",
  },
]

const MyForm = styled(Form)`
  & *{
    width: 100%;
  }
`

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchBar() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state
  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  
  const navigate = useNavigate();
  const [keyword,setKeyword] = useRecoilState(keywordState);
  const [service,setService] = useRecoilState(serviceState);
  const [grade,setGrade] = useRecoilState(gradeState);
  const [order,setOrder] = useRecoilState(orderState);
  
  useEffect(()=>{
    console.log(value)
    setKeyword(value)
  },[value])
  
  useEffect(()=>{
    console.log(keyword)
  },[keyword])
  
  const handleSubmit = () =>{
    navigate(`search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}`);
  }
  
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])
  
  
  return (
  
  <MyForm onSubmit={handleSubmit}>
    <Search
          loading={loading}
          placeholder='Search...'
          onSearchChange={handleSearchChange}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          results={results}
          value={value}
        />
  </MyForm>
        
  )
}

export default SearchBar;
