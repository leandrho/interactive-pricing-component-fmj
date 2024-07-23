

const viewsArr = ['10K', '50K', '100K', '500K', '1M'];
const priceArr = [8.0, 12.0, 16.0, 24.0, 36.0];
const updateValues = (val) => {
    const views = document.getElementById('views');
    const price = document.getElementById('price');
    let discount = billbtn.classList.contains('active') ? 25.0 : 0.0;
    views.innerHTML = viewsArr[val];
    price.innerHTML = `$${(priceArr[val]-((priceArr[val]*discount)/100.0))}.00`;

}
const range = document.getElementById('range');
range.addEventListener('input', (e)=>{
    const value = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const perc = ((value - min) / (max - min)) * 100;
    range.style.setProperty('--percent', `${perc}%`);

    updateValues(value);
});
const billbtn = document.getElementById("billbtn");
billbtn.addEventListener('click',()=>{
    billbtn.classList.toggle('active');
    updateValues(range.value);
});

range.style.setProperty('--percent', `50%`);
updateValues(range.value);