const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const input = document.querySelector('body')
let index = 0

function init() {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]){index++; console.log(key)
    if (index === code.length){ alert("Congratulations!");
    index = 0;}
  }
}

input.addEventListener('keydown', (e) => {
  console.log(e)
  return init()
  }
)