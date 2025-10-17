
document.getElementById('parent').addEventListener('click', ()=>{
    console.log('Parent clicked.');
}, true);

document.getElementById('child').addEventListener('click', ()=>{
    console.log('Child clicked.');
}, true)

document.getElementById('grandParent').addEventListener('click',()=>{
    console.log('Grand Parent clicked.');
}, true);

document.getElementById('parent1').addEventListener('click', ()=>{
    console.log('Parent1 clicked.');
}, true);