import cookies from 'js-cookie'

let checkLogin = async () => {
  return !!cookies.get('SESSION')
}

let swapArrayIndex = (arr, i1, i2) => {
  let tmp = [...arr]
  tmp[i1] = tmp.splice(
    i2,
    1,
    tmp[i1]
  )[0]
  return tmp
}

export {
  checkLogin,
  swapArrayIndex
}
