"use strict";
const username = 'ody';
let a = 1;
const kodeJurusan = {
    111: 'Teknik Informatika',
    211: 'Sistem Informasi',
};
const jurusanString = (kode) => {
    console.log(kodeJurusan[kode]);
};
const button = document.querySelector('button');
const clickHandler = (message) => console.log('Hi,', message);
if (button)
    button.addEventListener('click', clickHandler.bind(null, 'There!'));
//# sourceMappingURL=bind.js.map