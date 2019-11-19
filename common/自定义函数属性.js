// 函数声明会提前，因此可以在函数声明之前给uniqueInteger的属性赋值
uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++
}
