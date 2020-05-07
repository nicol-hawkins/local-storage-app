  const form = document.querySelector('form')
  const ul = document.querySelector('ul')
  const button = document.querySelector('button')
  const input = document.getElementById('item')

  const liGenerator = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault()

    liGenerator(input.value)
    input.value = ''
  });

