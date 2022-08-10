{
// variables
let XO = "0"
// let moveTone = new Audio('')
const grid_1 = document.getElementById("grid-1");   // arr[0][0]
const grid_2 = document.getElementById("grid-2");   // arr[0][1]
const grid_3 = document.getElementById("grid-3");   // arr[0][2]
const grid_4 = document.getElementById("grid-4");   // arr[1][0]
const grid_5 = document.getElementById("grid-5");   // arr[1][1]
const grid_6 = document.getElementById("grid-6");   // arr[1][2]
const grid_7 = document.getElementById("grid-7");   // arr[2][0]
const grid_8 = document.getElementById("grid-8");   // arr[2][1]
const grid_9 = document.getElementById("grid-9");   // arr[2][2]

// functions

function change(){
    if(XO == "X"){
        XO = "0"
        document.getElementById('p12').innerText = 'X'
    }
    else if(XO == "0"){
        XO = "X"
        document.getElementById('p12').innerText = '0'
    }   
}

let arr = new Array(3)          // array declaration for pointing the element
for(let i=0;i<3;i++){
    arr[i] = new Array(3)
    for(let j=0;j<3;j++){
        arr[i][j] = -1
    }
}

// function array(){
//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             console.log(i,j, arr[i][j])
//         }
//     }
// }


function Check()
{
    let val = false
    // if( (arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] ) || (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) ){
    //     if(arr[0][0] !== -1)
    //         val = true
    // } // first row and first column
    // if( (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1]) || (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2])){
    //     if(arr[0][1] == 0 || arr[0][1] == 1)
    //         val = true
    // }   // second row and second column
    // if( (arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2]) || (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2])){
    //     if(arr[0][2] == 0 || arr[0][2] == 1)
    //         val = true
    // }   //  last row  and last column
    // if( (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]) || (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]) ){
    //     if(arr[0][0] !== -1 || arr[0][2] !== -1)
    //         val = true
    // }    // main diagonal and other diagonal

    let forother = false
    if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && forother === false){   // 1st row
        if(arr[0][0] === 1 || arr[0][0] === 0){
            val = true
            forother = true
            console.log("game over")
        }
        
    }
    if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && forother === false){   // 2nd row
        if(arr[1][1] === 1 || arr[1][1] === 0){
            val = true
            forother = true
        }

    }
    if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && forother === false){   // 3rd row
        if(arr[2][1] === 1 || arr[2][1] === 0){
            val = true
            forother = true
        }
        
    }
    if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && forother === false){   // 1st column
        if(arr[1][0] === 1 || arr[1][0] === 0){
            val = true
            forother = true
        }
        
    }
    if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && forother === false){   // 2nd column
        if(arr[1][1] === 1 || arr[1][1] === 0){
            val = true
            forother = true
        }
        
    }
    if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && forother === false){   // 3rd column
        if(arr[1][2] === 1 || arr[1][2] === 0){
            val = true
            forother = true
        }
        
    }
    if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && forother === false){   // main diagonal
        if(arr[1][1] === 1 || arr[1][1] === 0){
            val = true
            forother = true
        }
        
    }
    if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && forother === false){   // other diagonal
        if(arr[1][1] === 1 || arr[1][1] === 0){
            val = true
            forother = true
        }
        
    }

    if(val){
        if(XO  === 'X')
            document.getElementById('person').innerHTML = '<p>X wins the game</p><p>Game over</p>'
        else
            document.getElementById('person').innerHTML = '<p>0 wins the game</p><p>Game over</p>'
        }    
}



// even listener
// for X => 1   and for 0 => 0   in arr
grid_1.addEventListener("click", ()=>{
    // moveTone.play()
    // moveTone.playbackRate = 1;
    // // moveTone.pause()
    change()
    grid_1.innerText = XO 
    if(XO == 'X')
        arr[0][0] = 1
    else
        arr[0][0] = 0
    
    Check()
    // array()
})

grid_2.addEventListener("click", ()=>{
    change()
    grid_2.innerText = XO
    if(XO == 'X')
        arr[0][1] = 1
    else
        arr[0][1] = 0
    
    Check()
    // array()
})
grid_3.addEventListener("click", ()=>{
    change()
    grid_3.innerText = XO
    if(XO == 'X')
        arr[0][2] = 1
    else
        arr[0][2] = 0

    Check()
    // array()
})
grid_4.addEventListener("click", ()=>{
    change()
    grid_4.innerText = XO
    if(XO == 'X')
        arr[1][0] = 1
    else
        arr[1][0] = 0

    Check()
    // array()
})
grid_5.addEventListener("click", ()=>{
    change()
    grid_5.innerText = XO
    if(XO == 'X')
        arr[1][1] = 1
    else
        arr[1][1] = 0

    Check()
    // array()
})
grid_6.addEventListener("click", ()=>{
    change()
    grid_6.innerText = XO
    if(XO == 'X')
        arr[1][2] = 1
    else
        arr[1][2] = 0

    Check()
    // array()
})
grid_7.addEventListener("click", ()=>{
    change()
    grid_7.innerText = XO
    if(XO == 'X')
        arr[2][0] = 1
    else
        arr[2][0] = 0

    Check()
    // array()
})
grid_8.addEventListener("click", ()=>{
    change()
    grid_8.innerText = XO
    if(XO == 'X')
        arr[2][1] = 1
    else
        arr[2][1] = 0

    Check()
    // array()
})
grid_9.addEventListener("click", ()=>{
    change()
    grid_9.innerText = XO
    if(XO == 'X')
        arr[2][2] = 1
    else
        arr[2][2] = 0

    Check()
    // array()
})







}