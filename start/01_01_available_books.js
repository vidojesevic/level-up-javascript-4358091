// Write your code here
class Books {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBB = ISBN;
        this.numCopies = numCopies != undefined ? numCopies : 1;
    }
    getAvailability() {
        if (this.numCopies === 0) {
            return "out of stack";
        } else if (this.numCopies < 10 && this.numCopies > 0) {
            return "low stock";
        }
        return "in stock";
    }
    sell(numSell) {
        if (numSell === undefined) {
            this.numCopies -= 1
        } else {
            this.numCopies -= numSell;
        }
        return this;
    }
    restock(numRestock) {
        if (numRestock === undefined) {
            this.numCopies += 5;
            return this;
        }
        this.numCopies += numRestock;
        return this;
    }
}

const book = new Books("Starac i more", "Ernest Hemingvej", 101, 11)

console.log("Stock: " + book.getAvailability());

book.sell()
book.sell()
book.sell()
book.sell()
console.log(book.getAvailability());

