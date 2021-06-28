const Page404 = () => import('../components/error/404')
const JVM = () => import('../views/articles/java/jvm')

/**
 * 目录信息
 * @type {{java: {path: string, component: (function(): *)}}}
 */
const catalog = {
  java: {
    title: 'java',
    icon: 'java',
    routes: [
      {
        path: 'jvm',
        component: JVM,
        type: 'JVM',
        label: 'JVM基本信息'
      },
      {
        path: 'jvm-info',
        component: JVM,
        type: 'JVM',
        label: '锁相关知识'
      },
      {
        path: 'collection',
        component: JVM,
        type: '容器',
        label: '容器基本信息'
      }
    ]
  },
  redis: {
    title: 'redis',
    icon: 'redis',
    routes: [
      {
        path: 'redis-info',
        component: JVM,
        type: '基础',
        label: 'Redis基本信息'
      }
    ]
  }
}

/**
 * 根据目录信息获取子路由配置
 * @returns {{path: string, component: (function(): *)}[]}
 */
export function getChildRoutes () {
  let routes = []
  for (const item of Object.values(catalog)) {
    routes = [...routes, ...item.routes]
  }
  routes.push(
    {
      path: '404',
      component: Page404
    }
  )
  return routes
}

/**
 * 根据目录信息获取菜单信息
 * @returns {[]}
 */
export function getLabelList () {
  const labelList = []
  for (const [k, v] of Object.entries(catalog)) {
    labelList.push({
      url: k,
      title: v.title,
      icon: v.icon
    })
  }
  return labelList
}

/**
 * 根据路由note参数获取相关目录信息
 * @param note
 * @returns {*}
 */
export function getRouteInfo (note) {
  const list = catalog[note]?.routes || []
  const info = {}
  for (const item of list) {
    if (info[item.type]) {
      info[item.type].push(item)
    } else {
      info[item.type] = [item]
    }
  }
  return Object.values(info)
}

/**
 * 根据path获取当前书签
 * @param path
 */
export function getMarkByPath (path) {
  const arr = path.split('/')
  if (arr.length === 3) {
    for (const item of catalog[arr[1]].routes) {
      if (item.path === arr[2]) {
        return {
          label: item.label,
          index: item.path,
          path
        }
      }
    }
  }
  return null
}
