const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const input = document.querySelector('body')
let index = 0

function init(e) {
  const key = parseInt(e.detail || e.which);
  if (input === code[index]){index++;
    if (index === code.length){ alert("Congratulations!");
    index = 0;}}
    else { index = 0;
  }

}

input.addEventListener('keydown', e => {
  console.log(e)
  return init(e)
  }
)