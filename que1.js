function majority(arr){

    let majority=Math.floor(arr.length/2)
 //  console.log(majority)
    
    let obj={}
    for(let val of arr){
        if(!obj[val]){
           obj[val]=1
        }
        
        else{
          obj[val]++
        }
    }
    
    for(let k in obj){
      if(obj[k]>majority){
          return k
      }
      
    }
  return -1  
}

console.log(majority([2,1,3]))