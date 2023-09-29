const outputs = document.querySelectorAll('.textout')
const [canvas1, canvas2] = document.querySelectorAll('canvas')
const ctx1 = canvas1.getContext('2d')
const ctx2 = canvas2.getContext('2d')
const outlinePath = new Path2D()
// canvas divided into fourths, use middle 3x3, rounded corners will be 1/3 of a 1/9 square from the middle
outlinePath.moveTo()
outlinePath.lineTo()
function roll() {
    for (let i = 0; i < 100; i++) setTimeout(()=> {
        let randNum = Math.floor(Math.random() * 6) + 1
        drawDie(i%2 == 0 ? ctx1: ctx2, randNum)
        outputs[i%2].textContent = `dice ${i%2+1} result: ${randNum}`
    }, i*i/5)
}
function drawDie(ctx, num) {
    ctx.fillStyle = "lightblue"
    ctx.strokeStyle = "gray"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.stroke(outlinePath)
    if (num % 2 == 1) {
        // make a circle in the middle
    }
}