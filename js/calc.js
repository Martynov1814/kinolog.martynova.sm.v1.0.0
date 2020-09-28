// add class

let listObj = document.querySelectorAll('.choice');

function func() {
    for (let i = 0; i < listObj.length; i++) {
        listObj[i].className = 'choice';
    }

    event.target.classList.toggle('after_click');
}

for (let i = 0; i < listObj.length; i++) {
    listObj[i].onclick = func;
}

// calc

document.addEventListener('click', function (isit) {
    the_class = isit.target.className;
    the_id = isit.target.id;
    if (the_class == "get_value") {
         price = document.querySelector('#' + the_id).value;
    }
});
function calculate() {
    
    amountDaysInput = document.getElementById('amount_days_input').value;
    numberx = document.getElementById('numberx').value;
    numberx_2 = document.getElementById('numberx_2').value;
    numberx_3 = document.getElementById('numberx_3').value;
    z = (+numberx * 150) + (+numberx_2 * 200) + (+numberx_3 * 200);


    if (amountDaysInput == "") {
        amount_days_input.style.backgroundColor = 'red';
    } else {
        result = (amountDaysInput * price) + z;
        document.getElementById('result').innerHTML = result + ' ₽';
    }
};

//  Скрипт ввода только цифр

const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

checkNumInputs('#amount_days_input');
checkNumInputs('#numberx');
checkNumInputs('#numberx_2');
checkNumInputs('#numberx_3');

// tabs

const rezultBtn = document.querySelector('.rezult_btn'),
    rezultInfo = document.querySelector('.rezult-info'),
    replice = document.querySelector('.replice');

function openTab() {
    rezultBtn.addEventListener('click', () => {
        rezultInfo.style.display = "flex";
        rezultBtn.style.display = "none";
    });
};

function reloadPage() {
    replice.addEventListener('click', () => {
        rezultInfo.style.display = "flex";
        rezultBtn.style.display = "none";
    });
};

openTab();
reloadPage();