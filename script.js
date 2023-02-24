let svg=document.querySelector('#flaps')

let letter=document.querySelector('#letter'),
    letterH=letter.offsetHeight,
    letterW=letter.offsetWidth,
    line1=document.createElementNS("http://www.w3.org/2000/svg", 'line'),
    line2=document.createElementNS("http://www.w3.org/2000/svg", 'line')

function reloadC(){
   
    line1.setAttribute('style','stroke: black;stroke-width:5px')
    line1.setAttribute('x1',0)
    line1.setAttribute('y1',0)
    line1.setAttribute('x2',letterW/2)
    line1.setAttribute('y2',letterH/2)

    line2.setAttribute('style','stroke: black;stroke-width:5px')
    line2.setAttribute('x1',letterW)
    line2.setAttribute('y1',0)
    line2.setAttribute('x2',letterW/2)
    line2.setAttribute('y2',letterH/2)

    svg.appendChild(line1)
    svg.appendChild(line2)
}

window.addEventListener('load',(e)=>{
    reloadC()
})


let heart=document.getElementById('heart'), k

function clickable(btn){
    btn.addEventListener('click',(e)=>{
        //se revine la starea initiala
        letter.removeChild(document.getElementById('pic'))
        letter.removeChild(btn)
        reloadC()
    })
}


function getOut(){
    let pic=document.getElementById('pic')

    if(pic){
        pic.style.transform=`translate(-50%,-${k}%)`
        k+=10}
    // }else{
    //     pic.setAttribute('height',350)
    //     pic.setAttribute('width',600)
    //     pic.style.transform=`translate(-50%,-68%)`
    // }

    if(k<110){
        setTimeout(getOut,130)
    }else{
        pic.setAttribute('height',350)
        pic.setAttribute('width',600)
        pic.style.transform=`translate(-50%,-68%)`

        let btn=document.createElement('button')
        btn.innerHTML='mai da mi o mema'
        btn.setAttribute('id','newM')
        document.getElementById('letter').append(btn)

        clickable(btn)
    }
}


heart.addEventListener('click',(e)=>{
    svg.removeChild(line1)
    svg.removeChild(line2)

    //simplify here
    line1.setAttribute('style','stroke: black;stroke-width:1px')
    line1.setAttribute('x1',0)
    line1.setAttribute('y1',0)
    line1.setAttribute('x2',letterW/2)
    line1.setAttribute('y2',letterH/2)

    line2.setAttribute('style','stroke: black;stroke-width:1px')
    line2.setAttribute('x1',letterW)
    line2.setAttribute('y1',0)
    line2.setAttribute('x2',letterW/2)
    line2.setAttribute('y2',letterH/2)

    svg.appendChild(line1)
    svg.appendChild(line2)

    //adding the triangle for the open letter
    // let triangle=document.createElementNS("http://www.w3.org/2000/svg", 'polygon')
    // triangle.setAttribute('points',`0,0 ${letterW},0 ${-letterW/2,letterH/2}`)
    // triangle.setAttribute('style','fill:h')

    // svg.appendChild(triangle)

    //generare random meme
    let number=Math.floor(Math.random()*5)+1

    let meme=document.createElement('img')
    meme.setAttribute('id','pic')
    meme.setAttribute('height',150)
    meme.setAttribute('width',300)
    meme.style.transform='translate(-50%,-68%)'
    meme.setAttribute('src',`./memes/meme${number}.png`) //generez un numar intre 1 si n 

    letter.appendChild(meme)
    
    k=70
    getOut()
    
})



