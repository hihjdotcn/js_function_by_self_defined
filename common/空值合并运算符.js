const b = 0
const a = b || 5
const c = b ?? 6
console.log(a) // 返回5
console.log(c) // 返回0

const b = false
const a = b || 5
const c = b ?? 6
console.log(a) // 返回5
console.log(c) // 返回false

const b = ''
const a = b || 5
const c = b ?? 6
console.log(a) // 返回5
console.log(c) // 返回''

const b = null
const a = b || 5
const c = b ?? 6
console.log(a) // 返回5
console.log(c) // 返回6

const b = undefined
const a = b || 5
const c = b ?? 6
console.log(a) // 返回5
console.log(c) // 返回6