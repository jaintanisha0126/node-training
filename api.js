const express = require("express");
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json())


app.listen(3003, () => {	
	console.log("server is up .....");
});

const books = [
	{
		id: 1,
		name: "three man in a boat"
	},
	{
		id: 2,
		name: "wings of fire"
	},
	{
		id: 3,
		name: "pride and prejudice"
	}
]

app.get("/book", (req, res, next) => {
	let responseMessage = {
		message: "books successfully fetched",
		data: books
	}
	res.status(200).send(responseMessage);
});


app.post("/book", (req, res, next) => {
	books.push(req.body);
	res.status(200).send({
		message : "book successfully saved"
	});
});


// https://localhost:3000/2
app.put("/book/:id", (req, res, next) => {
	let bookId = req.params.id;
	let newBookName = req.body.name;
	console.log(bookId, newBookName);
	//todo 
	// upate the book name by id 

	res.status(200).send({
		message : "book updated successfully"
	});
});


// https://localhost:3000/2
app.delete("/book/:id", (req, res, next) => {
	let bookId = req.params.id;
	
	console.log(bookId);
	//todo 
	// delete the book by id 

	res.status(200).send({
		message : "book deleted successfully"
	});
});