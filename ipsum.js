const text =[
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    "DDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "ffffffffffffffffffffffffffff",
    "gggggggggggggggggggggggggggg",
    "hhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    "iiiiiiiiiiiiiiiiiiiiiiiiiiiii"
]

const form = document.querySelector(".lorem-form")
const amount = document.getElementById("amount")
const result = document.querySelector(".lorem-text")


form.addEventListener("submit",function(e){
    e.preventDefault()
    const abc = parseInt(amount.value)
    //console.log(isNaN(abc))


    //empty
    //<0
    //>9    
    if(isNaN(abc) || abc<0 || abc>9){
        result.innerHTML = `<p>${text[random()]}</p>`
    }
    else{
        let def = text.slice(0,abc);
        def= def.map(function(item){
            return `<p>${item}</p>`;
        })
        .join(" ")
        result.innerHTML = def;
    }
})



function random(){
    return Math.floor(Math.random()*text.length)
}