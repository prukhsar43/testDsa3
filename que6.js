let newArr=[]
let newArr2=[]

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  takeInput(ele) {
    var newnode = new Node(ele);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = this.tail.next;
    }
  }
  
  
   
  
 findMid(){
        let slow=this.head
        let fast=this.head
        
        while(fast!=null&&fast.next!=null){
           slow=slow.next
           fast=fast.next.next
        }
        
        
        let second=slow.next
        slow.next=null
      
        let prev=null
        let curr=second
        let next=curr.next
        
        
        while(curr){
           next=curr.next
           curr.next=prev
           prev=curr
           curr=next
        }
     
        second=prev
    
        
        while(this.head&&second){
        
        let temp1=this.head.next
        
        let temp2=second.next
          
          this.head.next=second
         this.head.next.next=temp1
         second=temp2
         this.head=temp1
        }
        
        return this.head
        
      }
      
      
      
   printLL() {
    var temp = this.head;
    while (temp) {
        
      console.log(temp.data)
      temp = temp.next;
    }
  }   
      
 
  
}
var ll = new LL();
ll.takeInput(1)
ll.takeInput(2);
ll.takeInput(3);
ll.takeInput(4);
ll.takeInput(5);
ll.findMid()
 
 

ll.printLL();
