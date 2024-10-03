// //constructor function to creat 'book' object
// function Book(title,author,year){
//     this.title=title
//     this.author=author
//     this.year=year
// }

// //library array to store book objects
// const library=[]
// function addBook(Book){
//     library.push(Book)
// }

// //function to list all books in library using for..of

// function listBooks(){
//     for(let i of library){
//         console.log(i)
//     }
// }

// //test case

// addBook(new Book("1984", "George Orwell", 1949));

// addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));

// addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
// listBooks()
// let modifiedbook=Object.assign({},library[1])
// modifiedbook.title="The Lord of the Rings"
// console.log(modifiedbook)


//2nd question
//factory function to create an item
function createItem(name,price,quantity){
    return{
        name,
        price,
        quantity
    }
}

//array to store items
const cart=[];
//function to add items to cart
function addItem(item){
    cart.push(item)    
}
//function to list items using for...in loop
function listItems(){
    for(let i in cart){
        console.log(cart[i])
    }
}

//function to list objects using for..of loop
function calculateTotal(){
    let sum=0
    for(let i of cart ){
        sum+=i.price*i.quantity
    }
    return sum
}

addItem(createItem("Laptop", 1200, 1));

addItem(createItem("Phone", 800, 2));
addItem(createItem("Iron",500,3))
listItems()
console.log(calculateTotal())