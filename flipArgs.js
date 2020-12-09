function flipArgs() {
   return function argReverse(...args) {
     return args.reverse();
   }
}
flipped = flipArgs();
console.log(flipped('a', 'b', 'c', 'd'));