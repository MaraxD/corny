let svg=document.querySelector('#flaps')

let letter=document.querySelector('#letter'),
    letterH=letter.offsetHeight,
    letterW=letter.offsetWidth,
    line1=document.createElementNS("http://www.w3.org/2000/svg", 'line'),
    line2=document.createElementNS("http://www.w3.org/2000/svg", 'line')

let newLine1=document.createElementNS("http://www.w3.org/2000/svg", 'line'),
    newLine2=document.createElementNS("http://www.w3.org/2000/svg", 'line'),
    letterI=document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    tri1=document.createElementNS("http://www.w3.org/2000/svg", 'polygon'),
    tri2=document.createElementNS("http://www.w3.org/2000/svg", 'polygon')


function reloadC(){

    document.getElementById('heart').removeAttribute('hidden')
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


    newLine1.setAttribute('style','stroke: white;stroke-width:5px')
    newLine2.setAttribute('style','stroke: white;stroke-width:5px')

    //svg.removeChild(document.getElementById('newLine1'))
    //svg.removeChild(document.getElementById('newLine2'))
}

function animate(){
    let icons=document.getElementsByClassName('icon')
    for(let i=0;i<icons.length-1;i++){
        if(!(icons[i].style.transform)||!(icons[i+1].style.transform)||icons[i].style.transform==='rotate(-10deg)'){
            icons[i].style.transform='rotate(10deg)'
            icons[i+1].style.transform='rotate(-10deg)'
        }else{
            icons[i].style.transform='rotate(-10deg)'
            icons[i+1].style.transform='rotate(10deg)'
        }
    }
    setTimeout(animate,800)
}

window.addEventListener('load',(e)=>{
    reloadC()
    //animate the images
    animate()
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
        k+=10
    }

    if(k<110){
        setTimeout(getOut,290)
    }else{
        if(window.matchMedia('(max-width: 480px)').matches===true){
            //resize pic for the phone
            pic.setAttribute('height',180)
            pic.setAttribute('width',350)
            pic.style.transform=`translate(-50%,-50%)`
        }else{
            pic.setAttribute('height',350)
            pic.setAttribute('width',600)
        }

        pic.style.transform=`translate(-50%,-68%)`

        let btn=document.createElement('button')
        btn.innerHTML='mai dă-mi o memă'
        btn.setAttribute('id','newM')
        document.getElementById('letter').append(btn)

        //remove the outside of the letter
        letter.removeChild(letterI)

        clickable(btn)
    }
}


function openLetter(){
    newLine1.setAttribute('id','newLine1')
    newLine1.setAttribute('style','stroke: black;stroke-width:5px')
    newLine1.setAttribute('x1',0)
    newLine1.setAttribute('y1',0)
    newLine1.setAttribute('x2',letterW/2)
    newLine1.setAttribute('y2',letterH/2-k)

    newLine2.setAttribute('id','newLine2')
    newLine2.setAttribute('style','stroke: black;stroke-width:5px')
    newLine2.setAttribute('x1',letterW)
    newLine2.setAttribute('y1',0)
    newLine2.setAttribute('x2',letterW/2)
    newLine2.setAttribute('y2',letterH/2-k)

    svg.appendChild(newLine1)
    svg.appendChild(newLine2)

    if(k<100){
        k+=33.3
        setTimeout(openLetter,300)
    }else{
        k=70
        getOut()
    }
}


heart.addEventListener('click',(e)=>{

    //simplify here
    line1.setAttribute('style','stroke: black;stroke-width:2px')
    line1.setAttribute('x1',0)
    line1.setAttribute('y1',0)
    line1.setAttribute('x2',letterW/2)
    line1.setAttribute('y2',letterH/2)

    line2.setAttribute('style','stroke: black;stroke-width:2px')
    line2.setAttribute('x1',letterW)
    line2.setAttribute('y1',0)
    line2.setAttribute('x2',letterW/2)
    line2.setAttribute('y2',letterH/2)

    svg.appendChild(line1)
    svg.appendChild(line2)

    
    // generare random meme
    let number=Math.floor(Math.random()*6)+1

    let meme=document.createElement('img')
    meme.setAttribute('id','pic')
    meme.setAttribute('height',150)
    meme.setAttribute('width',300)
    meme.style.transform='translate(-50%,-68%)'
    meme.setAttribute('src',`./memes/meme${number}.png`) //generez un numar intre 1 si n 

    letter.appendChild(meme)

    //doamne nu e eficient deloc asa dar nuj cum altcumva sa fac rip

    letterI.setAttribute('id','letterI')
    letterI.setAttribute('width','300px')
    letterI.setAttribute('height','200px')
    letter.append(letterI)

    tri1.setAttribute('id','tr1')
    tri1.setAttribute('points','0,0 0,200 300,200')
    tri1.setAttribute('fill','white')

    tri2.setAttribute('id','tr1')
    tri2.setAttribute('points','300,0 300,200 0,200')
    tri2.setAttribute('fill','white')

    letterI.appendChild(tri1)
    letterI.appendChild(tri2)

    k=33.3
    document.getElementById('heart').setAttribute('hidden','true')
    openLetter()

    
})






