import { useState, useEffect, useReducer } from "react"
import { HOME, SHOWS, MERCH, VIDEOS, ABOUT, CONTACT } from '../utils/constants'

const initialState = {
  page: null,
  error: null
}
const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        page: action.payload,
        error: null
      }
    case 'FETCH_ERROR':
      return {
        page: null,
        error: action.payload
      }
    default:
      return state
  }
}

function ContentfulApi(query, pageConstant) {
  const [page, setPage] = useState(null); 
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          dispatch({ type: 'FETCH_ERROR', payload: errors })
        } else {
          let page = null;
          switch(pageConstant) {
            case HOME:
              page = data.homePageCollection.items[0]
              break;
            case SHOWS:
              page = data.showListingsCollection.items
              break;
            case MERCH:
              page = data.merchPageCollection.items[0]
              break;
            case VIDEOS:
              page = data.videosPageCollection.items[0]
              break;
            case ABOUT:
              page = data.aboutPageCollection.items[0]
              break;
            case CONTACT:
              page = data.contactPageCollection.items[0]
              break;
            default:
              break;
          }
          dispatch({ type: 'FETCH_SUCCESS', payload: page });
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR', payload: error })
      })
  }, [])


  if (state.error) {
    return <div>Something went wrong: {state.error.message}</div>
  } else if (!state.page) {
    return {}
  } else {
    return state.page
  }
}

export default ContentfulApi;
