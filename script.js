const outputs = document.querySelectorAll('span')
function roll() {
    for (let i = 0; i < 100; i++) setTimeout(()=> outputs[i%2].innerText = `dice ${i%2+1} result: ${Math.floor(Math.random() * 6) + 1}`, i*10)
}