let grad = document.querySelector('#grader');
let fluid = document.querySelector('.fluid');
let counterFluid = document.querySelector('.counter-fluid');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function changeGrader (grader) {
    grad.innerHTML = grader;
    if (grad.innerHTML < grader) {
        for (let i = grad.innerHTML; i <= grader; i++) {
            let strGrad = String(i) + '%';
            let strCounter = String(100 - i) + '%';
            fluid.style.height = strGrad;
            counterFluid.style.height = strCounter;
            await sleep(50);
        }
    }
    else {
        for (let i = grad.innerHTML; i >= grader; i--) {
            let strGrad = String(i) + '%';
            let strCounter = String(100 - i) + '%';
            fluid.style.height = strGrad;
            counterFluid.style.height = strCounter;
            await sleep(50);
        }
    }
    
}
