import { getMarkByPath } from '../data/catalog'

let localBookmarks = []

try {
  if (localStorage.bookmarks) {
    localBookmarks = JSON.parse(localStorage.bookmarks)
  }
} catch (e) {
  localBookmarks = []
}

export default {
  namespaced: true,
  state: {
    bookmarks: localBookmarks
  },
  mutations: {
    add (state, path) {
      const mark = getMarkByPath(path)
      if (!mark) return
      state.bookmarks.push(mark)
      if (!localStorage.bookmarks) {
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
      } else {
        localStorage.bookmarks = JSON.stringify(state.bookmarks)
      }
    },
    remove (state, mark) {
      state.bookmarks.splice(state.bookmarks.findIndex(item => item.path === mark.path), 1)
      if (!localStorage.bookmarks) {
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
      } else {
        localStorage.bookmarks = JSON.stringify(state.bookmarks)
      }
    }
  }
}
