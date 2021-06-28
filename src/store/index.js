import { createStore } from 'vuex'
import bookmarks from './bookmarks'

export default createStore({
  modules: {
    bookmarks: bookmarks
  }
})
