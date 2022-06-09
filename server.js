const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use("/static", express.static('./static/'));

const animals = {
    'dog':{
        'inPolish': 'pies',
        'sentence':'I have got a dog',
        'pluralForm': 'dogs' 
    },
    'cat':{
        'inPolish': 'kot',
        'sentence': 'There\'s a cat in the picture',
        'pluralForm': 'cats'   
    },
    'bird':{
        'inPolish': 'ptak',
        'sentence': 'I can see a bird in the sky',
        'pluralForm': 'birds' 
    },
    'other':{
        'inPolish': 'nieznane',
        'sentence': 'unknown',
        'pluralForm': 'unknown'   
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})



/*app.get('/api/', (request, response)=>{
    response.json(animals)
})*/


app.get('/api/:animalName', (request,response) =>{
    const animalsName = request.params.animalName.toLowerCase()
    if(animals[animalsName]){
        response.json(animals[animalsName])
    }else{
        response.json(animals['other'])
    }
    
})




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})



