//1
// function is(str){
//     if(str == ''){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is('hf'))

//2
// function name(f,l){
//     return `${l},${f}`
// }
// console.log(name('First','Last'))

//3
// function edd(str){
//     return str.length%2==0?true:false
// }
// console.log(edd('applesq'))

//4
// function is(str){
//     return str.at(-1)=='n'?true:false
// }
// console.log(is('aidene'))

//5
// function rep(str,n){
//     return str.repeat(n)
// }
// console.log(rep('mubashir',2))

//6
// function cap(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) {
//         count++;
//       }
//     }
//     return count;
//   }

//   console.log(cap('fndGFTYDFG'));

//7

// function calc(a,b,str){
//     if(str==='+'){
//         return a+b
//     }else if(str==='-'){
//         return a-b
//     }else if(str==='*'){
//         return a*b
//     }else if(str==='/'){
//         return a/b
//     }else{
//         return a%b
//     }
// }
// console.log(calc(4,9,'-'))

//8
// function numb(str){
//  return str.split('-').length
// }
// console.log(numb('buf-fet-jhvg'))

//9
// function even(txt) {
//     let even = '';
//     let odd = '';
//     for (let i = 0; i < txt.length; i++) {
//       if (i % 2 === 0) {
//         even += txt[i];
//       } else {
//         odd += txt[i];
//       }
//     }
//     return even.concat(" ",odd)
//   }
// console.log(even('mubashir'))

// //10
// function potatoes(str) {

//   let words = str.split("potato");
//   let c= words.length
// if(words=='potato'){
//     c++
// }
  
//   return c-1
// }
// console.log(potatoes("potatopotato"));

//11
// function detec(str){
//     let low = ''
//     for(let i = 0 ; i<str.length;i++){
//         if(str[i].toLowerCase()==str[i]){
//             low+=str[i]
//         }
//     }
//     return low
// }
// console.log(detec('UYFGcGGUHIOaJHGt'))

//12
// function gen(str) {
//     let words = str.split(" "); 
//     let result = "";
//     for (let i = 0; i < words.length; i++) {
//       let firstLetter = words[i].charAt(0).toUpperCase(); 
//       let restOfWord = words[i].slice(1);
//       let word = firstLetter + restOfWord; 
//       result += word + " ";
//     }
//     return result.trim();
//   }

// console.log(gen("chv mfbv bu chjft"))

//13
// function lop(str)
// {
//     for(let i = 0;i<str.length-1;i++){
//         if(str[i]===str[i+1]){
//             return true
//         }
//     }
//     return false
// }
// console.log(lop('loop'))

//14
// function sort(str){
//     let res= ''
//     for(let i = str.length-1;i>=0;i--){
//         if(str[i]===str[i].toLowerCase()){
//             res+= str[i].toUpperCase()
//         }else{
//             res+=str[i].toLowerCase()
//         }
//     }

//     return res
// }
// console.log(sort('Hello World'))

            //hw

// function last(str,n){
//     let lastLetter=str.slice(-1)
//     let repeated= lastLetter.repeat(n)
//     return str+repeated
// }
// console.log(last('hello',3))

//2
// function first(str){
//     let firstLet=str.slice(0,1)
//     let last = str.slice(-1)
//     return firstLet+last
// }
// console.log(first('hell'))

//3
// function toInt(n){
//     if(typeof(n)=='number'){
//         return n.toString()
//     }else{
//         return +n
//     }
// }
// console.log(typeof(toInt('77')))

//4
// function last (str){
//     let lastInd=str.slice(-1)
//     if(lastInd==='s'){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(last('changes'))

//5
// function rev(str){
//   let up = ''
//     for(let i=str.length-1;i>=0;i--){
//                 up+=str[i]
//         }
//         return up.toUpperCase()
// }
// console.log(rev('cba'))

//7
// function polindrom(str)
// {
//     let res= ''
//     for(let i = str.length-1;i>=0;i--){
//         res+=str[i]
//     }
//     return res===str
// }
// console.log(polindrom('mom'))

//8
// function rep(word,str){
//     let cnt = 0
//     for(let i = 0; i<str.length;i++){
//         if(str[i]==word){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(rep('a','Hasaan'))

//9
// function cap(str){
//     let up = ''
//     let down = ''
//     for(let i = 0;i<str.length;i++){
//         if(str[i]==str[i].toUpperCase()){
//             up+=str[i]
//         }else if(str[i]==str[i].toLowerCase()){
//             down+=str[i]
//         }
//     }
//     return up+down
// }
// console.log(cap('hApPy'))

//10
// function rev(n){
//     let cnt = 0
//     let res = ''
//     for(let i = n;i>0;i=Math.floor(i/10)){
//         cnt =  i%10
//         res+=cnt
//     }
//     return res+n
// }
// console.log(rev(123))

