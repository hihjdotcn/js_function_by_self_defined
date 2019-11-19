// 糟糕的方式 - 显式处理Stopiteration
function rangeIter (first, last) {
  let nextValue = Math.ceil(first)
  return {
    next: function() {
      if (nextValue > last) throw StopIteration
      return nextValue++
    }
  }
}

let r = rangeIter(1, 4)
while (true) {
  try {
    console.log(r.next())
  } catch (e) {
    if (e === StopIteration) break
    else throw e
  }
}

// 更优写法
function range (min, max) {
	return {
		get min () { return min },
		get max () { return max },
		inCludes: function (x) {
			return min <= x && x<= max
		},
		toString: function () {
			return "[" + min + "," + max + "]"
		},
		__iterator__: function () {
			let val = Math.ceil(min)
			return {
				next: function () {
					if (val > max)
						throw StopIteration
					return val++
				}
			}
		}

	}
}
