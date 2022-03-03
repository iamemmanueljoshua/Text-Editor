
const newBtn = document.querySelector('#new-btn')
const txtBtn = document.querySelector('#txt-btn')
const pdfBtn = document.querySelector('#pdf-btn')
const boldBtn = document.querySelector('#bold-btn')
const content = document.querySelector('#content')
const filename = document.querySelector('#filename-input')
const underlinBtn = document.querySelector('#underlin-btn')
const italicBtn = document.querySelector('#italic-btn')
const colorBtn = document.querySelector('#color-btn')

newBtn.addEventListener("click", ()=>{
    content.innerHTML = "";
})

txtBtn.addEventListener("click", ()=>{
    const a = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl 
    a.download = filename.value + ".txt"
    a.click() 
})

pdfBtn.addEventListener("click", ()=>{
    html2pdf().from(content).save(filename.value)
})

boldBtn.addEventListener("click", ()=>{
    document.execCommand("bold");
})

underlinBtn.addEventListener("click", ()=>{
    document.execCommand("underline");
})

italicBtn.addEventListener("click", ()=>{
    document.execCommand("italic");
})

colorBtn.addEventListener("input", ()=>{
    document.execCommand('forecolor', false, colorBtn.value);
})