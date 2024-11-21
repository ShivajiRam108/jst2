class product{
    name;
    price;
    category;
    
    constructor(name , price , category){
       this.  name = name;
         this. price = price;
         this. category = category;
    }
    discount(){
        console.log(this. name, "The sirt price will be decreased , i will given discount of 10% of this shirt");
    }
    totalprice(newname){
        console.log(newname);
    }
}

var productone = new product ("shirt" ,"699" , "baseball");
productone.discount();
productone.totalprice("630");
console.log(productone);





