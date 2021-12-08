let url = "http://numbersapi.com" 
async function getNum(num){
    let url = "http://numbersapi.com" 
    let res = await axios.get(`${url}/${num}/?json`)
    console.log(res)
    
}


getNum(36)


async function getMultipleNums(...nums){
    for(let num of nums){
        let url = "http://numbersapi.com" 
        let res = await axios.get(`${url}/${num}/?json`)
        console.log(res.data.text)
       
    }
}

getMultipleNums(3,4,5,6)



async function get4Facts(num){
    for(let i=0; i < 4; i++){
        let url = "http://numbersapi.com" 
        let res = await axios.get(`${url}/${num}/?json`)
        let fact = res.data.text
        $('body').append(`
            <p> ${fact}</p>
        `)
    }
}


get4Facts(42)