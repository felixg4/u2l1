const outputs = document.querySelectorAll('.textout')
const [canvas1, canvas2] = document.querySelectorAll('canvas')
const ctx1 = canvas1.getContext('2d')
const ctx2 = canvas2.getContext('2d')
function roll() {
    for (let i = 0; i < 100; i++) setTimeout(()=> {
        let randNum = Math.floor(Math.random() * 6) + 1
        drawDie(i%2 == 0 ? ctx1: ctx2, randNum)
        outputs[i%2].textContent = `dice ${i%2+1} result: ${randNum}`
        const d1 = parseInt(outputs[0].textContent.charAt(15))
        const d2 = parseInt(outputs[1].textContent.charAt(15))
        outputs[2].textContent = `combined total: ${d1+d2}`
    }, i*i/5)
}
function drawDie(ctx, num) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "lightblue"
    ctx.strokeStyle = "gray"
    ctx.lineWidth = '5'
    let ratio = ctx.canvas.getBoundingClientRect().height/ctx.canvas.getBoundingClientRect().width
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width*ratio/6, 0)
    ctx.lineTo(ctx.canvas.width*ratio*5/6, 0)
    ctx.quadraticCurveTo(ctx.canvas.width*ratio, 0, ctx.canvas.width*ratio, ctx.canvas.height/6)
    ctx.lineTo(ctx.canvas.width*ratio, ctx.canvas.height*5/6)
    ctx.quadraticCurveTo(ctx.canvas.width*ratio, ctx.canvas.height, ctx.canvas.width*ratio*5/6, ctx.canvas.height)
    ctx.lineTo(ctx.canvas.width*ratio/6, ctx.canvas.height)
    ctx.quadraticCurveTo(0, ctx.canvas.height, 0, ctx.canvas.height*5/6)
    ctx.lineTo(0, ctx.canvas.height/6)
    ctx.quadraticCurveTo(0, 0, ctx.canvas.width*ratio/6, 0)
    ctx.lineTo(ctx.canvas.width*ratio/6, 0)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = 'black'
    if (num % 2 == 1) {
        ctx.beginPath()
        ctx.ellipse(ctx.canvas.width*ratio/2, ctx.canvas.height/2, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
        ctx.closePath()
        ctx.fill()
        num -= 1
    }
    if (num == 0) return
    ctx.beginPath()
    ctx.ellipse(ctx.canvas.width*ratio/4.5, ctx.canvas.height/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.ellipse(ctx.canvas.width*ratio*3.5/4.5, ctx.canvas.height*3.5/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    num -= 2
    if (num == 0) return
    ctx.beginPath()
    ctx.ellipse(ctx.canvas.width*ratio*3.5/4.5, ctx.canvas.height/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.ellipse(ctx.canvas.width*ratio/4.5, ctx.canvas.height*3.5/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
    num -= 2
    if (num == 0) return
    ctx.beginPath()
    ctx.ellipse(ctx.canvas.width*ratio*3.5/4.5, ctx.canvas.height*2.25/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.ellipse(ctx.canvas.width*ratio/4.5, ctx.canvas.height*2.25/4.5, ctx.canvas.height/4, ctx.canvas.height/8, 2*Math.PI, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
}