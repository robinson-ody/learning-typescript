const username = 'ody';
let a = 1;

const kodeJurusan = {
  111: 'Teknik Informatika',
  211: 'Sistem Informasi',
};

const jurusanString = (kode: 111 | 211) => {
  console.log(kodeJurusan[kode]);
};

const button = document.querySelector('button');

const clickHandler = (message: string) => console.log('Hi,', message);

if (button) button.addEventListener('click', clickHandler.bind(null, 'There!'));
