const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const PORT = 8000
const cors = require('cors')

cors()

const evModel ={
    'taycan': {
    'make': 'Porsche',
    'EPA range': '200 miles',
    'Base Price': '$84,050',
    'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.motor1.com%2Fimages%2Fmgl%2FQEmQB%2Fs1%2F2020-porsche-taycan.webp&imgrefurl=https%3A%2F%2Finsideevs.com%2Fnews%2F371309%2Fporsche-taycan-offers-motor-sound-500%2F&tbnid=ha0pLe0Cub35PM&vet=12ahUKEwjY3t2U0ZL4AhUXlmoFHTCiCP4QMygJegUIARDrAQ..i&docid=q3o_OK-LW6ZhbM&w=1920&h=1080&q=taycan&ved=2ahUKEwjY3t2U0ZL4AhUXlmoFHTCiCP4QMygJegUIARDrAQ',

    },
    'etron': {
        'make': 'Audi',
        'EPA range': '222 miles',
        'Base Price': '$66,995',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydzwGyI4yue8arybz1f9rw2TWC65OFwARQA&usqp=CAU',
    
        },
        'etron gt': {
            'make': 'Audi',
            'EPA range': '238 miles',
            'Base Price': '$103,445',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkVsWpA4TfZE45wllq330fK5d13saf0e7mw&usqp=CAU',
        
            },
            'eqs': {
                'make': 'Mercedes',
                'EPA range': '350 miles',
                'Base Price': '$103,360',
                'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjDW9QPa9rwNPGqV8kroeCxbFWIFxA8SW7g&usqp=CAU',
            
                },
                'model x': {
                    'make': 'Tesla',
                    'EPA range': '348 miles',
                    'Base Price': '$103,360',
                    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjDW9QPa9rwNPGqV8kroeCxbFWIFxA8SW7g&usqp=CAU',
                
                    },
                    'unknown': {
                        'make': 'unknown',
                        'EPA range': 'unknown',
                        'Base Price': 'unknown',
                        'image': 'unknown',
                    
                    },
                    'model s': {
                        'make': 'Tesla',
                        'EPA range': '405 miles',
                        'Base Price': '$96,190',
                        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYg9QA8RNnV7onRGYVx7SZk7Bo8haZED8jw&usqp=CAU',
                    
                        },
                        'model y': {
                            'make': 'Tesla',
                            'EPA range': '303 miles',
                            'Base Price': '$62,990',
                            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1ZMMcpxqVcIci6kGNEFu1K21wuc1rWj-7A&usqp=CAU',
                        
                            },    
                           
        
    
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:model', (request, response)=>{
    let modelName = request.params.model.toLowerCase()
    if(evModel[modelName]){
    response.json(evModel[modelName])
    }else{
        response.json(evModel['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})