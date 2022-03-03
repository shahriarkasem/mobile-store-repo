// inputSomething message
const noInput = () => {
    document.getElementById('no-input').style.display = 'block';
}
const noInputHide = () => {
    document.getElementById('no-input').style.display = 'none';
}
// noResult message
const noResult = () => {
    document.getElementById('no-result').style.display = 'block';
}
const noResultHide = () => {
    document.getElementById('no-result').style.display = 'none';
}
// getData
const getData = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    if(inputText === ''){
        // please write something
        noInput();
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(res => res.json())
        .then(data => displayResults(data.data))
        noInputHide();
    }
}
// displayResults
const displayResults = (mainData) =>{
    // console.log(mainData);
    const showResults = document.getElementById('show-results');
    showResults.textContent = '';
    if(mainData.length === 0){
        noResult();
    }
    else{
        console.log(mainData)
        mainData.slice(0,20).forEach(data => {
            const div = document.createElement('div');
            div.classList.add("bg-slate-200", "p-4", "rounded-2xl", "flex", "flex-col", "items-center");
            div.innerHTML = `
                <img class="w-2/2 h-64 mb-2" src="${data.image}" alt="">
                    <h3 class="font-bold text-3xl mb-1">${data.brand}</h3>
                    <h4 class="font-semibold text-2xl mb-2">${data.phone_name}</h4>
                    <button class="border-0 ml-2 px-2 py-1 bg-blue-500 text-white rounded-lg w-2/6 text-center">Details</button>
            `
            showResults.appendChild(div);
        })
    }
}