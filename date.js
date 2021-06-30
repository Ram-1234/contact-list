created='2021-05-06T10:05:59Z'
endDate='2021-07-14T00:00:00Z'


created='2021-05-06T10:05:59Z'
"2021-05-06T10:05:59Z"
endDate='2021-07-14T00:00:00Z'
"2021-07-14T00:00:00Z"
parseInt(created)
2021
parseInt(created.slice(5,7))
5
parseInt(endDate.slice(5,7))
7
n=new Date('2021-07-14T00:00:00Z')
Wed Jul 14 2021 05:30:00 GMT+0530 (India Standard Time)
n=new Date('2021-07-14T00:00:00Z').toDateString()
"Wed Jul 14 2021"
n=new Date('2021-07-14T00:00:00Z').toLocaleDateString()
"14/07/2021"
m=new Date('2021-05-06T10:05:59Z').toLocaleDateString()
"06/05/2021"
var difference= Math.abs(n-m)
days = difference/(1000 * 3600 * 24)
NaN
new Date(m)
Sat Jun 05 2021 00:00:00 GMT+0530 (India Standard Time)
n=new Date('2021-07-14T00:00:00Z')

Wed Jul 14 2021 05:30:00 GMT+0530 (India Standard Time)
m=new Date('2021-05-06T10:05:59Z')

Thu May 06 2021 15:35:59 GMT+0530 (India Standard Time)
difference=Math.abs(m-n)
5925241000
days=difference/(1000*3600*24)
68.57917824074075
parseInt(days)
68

!+[]+4
5
!+[]+false+!+[]+true+!+[]
4
!+[]+!+[]+true+!+[]+false
4
!+[]+!+[]+true+!+[]
4
!+[]+!+[]+true+!+[]+true
5
![]
false
!+[]+![]
1
!+[]+![]+!+[]+true+![]+!+[]
4
true
true
true+true
2
true+false
1
true-flase
NaN

true-false
1
true-false-false
1
"true"+"false"
"truefalse"
2-false
2
2-"false"
NaN
2+"true"
"2true"
2+"true"-2
NaN
!+[]+!+[]+[]
"2"
!+[]+[]
"true"
![]+[]
"false"
!+[]+4
5
"false"!=="true"
true
"false"!!=="true"
VM730:1 Uncaught SyntaxError: Unexpected token '!'