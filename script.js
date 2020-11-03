const appInit = () => {
  const button = document.getElementById('button');
  const box = document.getElementById('box');
  button.addEventListener('click', () => {
    box.classList.toggle('turnaround')
  });
};

appInit();
