let text = document.querySelector('.heading').textContent;
let textCre = [...text];
// console.log(text);
// console.log(textCre);
document.querySelector('.heading').innerHTML='';
for(let char in textCre){
    // console.log(textCre[char]);
        document.querySelector('.heading').innerHTML += `
        <span>${textCre[char]}</span>`;  
}
