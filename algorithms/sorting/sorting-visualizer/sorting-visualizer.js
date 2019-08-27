const controls = document.querySelector(".sort-controls");
const mountNode = document.querySelector(".mount-node");
console.log(mountNode)
let arr;
controls.addEventListener('click', e => {
    switch (e.target.classList.value) {
        case "bubbleSort":
            bubbleSort(arr);
            break;
        case "randomize":
            reset();
            break;
        default:
            //do nothing
    }

});

let cnvs = document.createElement("canvas");
cnvs.width = window.innerWidth;
cnvs.height = 500;
cnvs.style.border = "solid 1px blue";

mountNode.appendChild(cnvs);

function reset() {
    // setInterval(() => {
    arr = getRandomNumArray(30, 100);
    console.log('arr', arr);
    draw(arr)
    // }, 500);
}

reset();

function getRandomNumArray(length, max) {
    return [...new Array(length)]
        .map(() =>
            Math.round(Math.random() * max));
}
let temp;

function bubbleSort(arr) {
    const len = arr.length;
    let i;
    let j;
    for (i = 0; i < len; i++) {
        for (j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp 
            }
            draw(arr, i);
        }
    }
}


function draw(array, color) {
    if (cnvs.getContext) {
        var ctx = cnvs.getContext('2d');
        var width = 16;
        var currX = 10;
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        for (var i = 0; i < array.length; i++) {
            if (i == color) {
                ctx.fillStyle = 'red';
            } else {
                ctx.fillStyle = 'blue';
            }
            var h = array[i];
            ctx.font = 'bold 10px serif';
            ctx.fillText(array[i], currX, cnvs.height - (h + 16));
            ctx.fillRect(currX, cnvs.height - (h + 12), width, h);
            ctx.fillText(i + 1, currX, cnvs.height - (2));
            currX += width + 2;
        }
    }
}
