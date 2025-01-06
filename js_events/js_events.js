// onClick

let btn = document.getElementById('myBtn')
btn.onclick = () => {
    alert('Hello, World!')
}

// onChange

let input = document.getElementById('myInput')
input.onchange = (e) => {
    alert(`Input value: ${e.target.value}`)
}

// onMouseOver

let div = document.getElementById('myDiv')
div.onmouseover = () => {
    div.style.backgroundColor = 'red'
}

// onMouseOut

div.onmouseout = () => {
    div.style.backgroundColor = 'white'
}

// onKeyDown

let textArea = document.getElementById('myTextArea')
textArea.onkeydown = (e) => {
    if (e.key === 'Enter') {
        alert(`Text area value: ${textArea.value}`)
    }
}

// onLoad

window.onload = () => {
    alert('Page has fully loaded')
}