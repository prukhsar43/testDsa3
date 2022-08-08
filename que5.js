let arr=[]
let arr2=[]
let arr3=[]
let topindex=0
let topindex2=0
let topindex3=0



function push(ele){
   arr[topindex]=ele
   topindex++
}
 

function reversePush(arr){
   for(let i=topindex-1;i>=0;i--){
      arr2[topindex2]=arr[i]
      topindex2++
      arr.pop()
      pop()
      
   }
}



function arr3Push(arr2){
   for(let i=topindex2-1;i>=0;i--){
      arr3[topindex3]=arr2[i]
      topindex3++
      //arr2.pop()
      
   }
}

 function arrPush(arr3){
   for(let i=topindex3-1;i>=0;i--){
      arr[topindex]=arr3[i]
      topindex++
    //  arr3.pop()
      
   }
} 

function display(){
   for (let i=0;i<topindex;i++){
     console.log(arr[i])
   }
}

function pop(){
   let val=arr[topindex-1]
   topindex--
   return val
}

 

 

push(1)
push(2)
push(3)
 
reversePush(arr)

 
arr3Push(arr2)
console.log(arr2)
arrPush(arr3)
 console.log(arr3)

console.log(arr)
display()

