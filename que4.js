function balancedBracket(s){
    const stack=[]
         
    for (const c of s) {
      if (c === '{' || c === '[' || c === '(') {
      stack.push(c)
      }
      
      else {
      
        const p = stack.pop();  
        if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')){
         return false
        }
      }
    }
    return stack.length === 0;
        
    
     
  }
  
  console.log(balancedBracket("[()]{"))