const express = require('express')
const	format = require('date-format')
const app = express()

const PORT = 4000 || process.env.PORT 

app.get('/',(req,res)=>{
	res.status(200).send("<h1 style='color:green'>This request from GET (/ Route)</h1>")
})

app.get("/api/v1/instagram",(req,res)=>{
	const instaValue = {
		username:'pradhyumvyas',
		followers:320,
		follows:70,
		date:format.asString("dd/MM - hh:mm:ss")
	}
	res.status(200).json(instaValue)
})

app.get("/api/v1/facebook",(req,res)=>{
	const facebookValue = {
		username:'pradhyumvyas19',
		followers:780,
		follows:70,
		date:format.asString("dd/MM - hh:mm:ss")
	}

	res.status(200).json(facebookValue)
})

app.get("/api/v1/linkedin",(req,res)=>{
	const linkedInValue = {
		username:'pradhyumvyas',
		followers:1420,
		follows:1000,
		date:format.asString("dd/MM - hh:mm:ss")
	}

	res.status(200).json(linkedInValue)
})

app.get("/api/v1/:name", (req,res)=>{
	res.status("200").json({parameter:req.params.name})
})

app.listen(PORT,()=>{
	console.log(`Server is running at ${PORT}`)
})