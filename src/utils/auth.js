/**
 * 权限验证
 */

import Cookies from 'js-cookie'

export function checkSession () {
  return Cookies.get('isLogin')
}

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
