let num = [5, 8, 4]

x = num[2]
num[3] = 6
num.push(2)
let y = num.indexOf(8)

console.log(x, y)

console.log(num.length);
console.log(num.sort())

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

for (let c in num) {
    console.log(num[c])
}