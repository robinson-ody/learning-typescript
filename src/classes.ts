abstract class Jurusan {
  constructor(protected readonly id: number, protected nama: string, private anggota: string[] = []) {}

  perkenalkan(this: Jurusan) {
    console.log(`Jurusan (${this.id}):`, this.nama);
  }

  addAnggota(this: Jurusan, ...firstName: string[]) {
    this.anggota.push(...firstName);
  }

  abstract YelYel(this: Jurusan): void;
}

class JurusanTI extends Jurusan {
  private lastAddedBahasa: string;
  private static instance: JurusanTI;

  private constructor(private bahasa: string[] = []) {
    super(111, 'Teknik Informatika');
    this.lastAddedBahasa = bahasa[0];
  }

  addBahasa(this: JurusanTI, ...bahasa: string[]) {
    this.bahasa.push(...bahasa);
    this.lastAddedBahasa = bahasa[bahasa.length - 1];
  }

  showBahasa(this: JurusanTI) {
    console.log(this.bahasa);
  }

  set setLastAddedBahasa(bahasa: string) {
    if (!bahasa) throw new Error('Please input a valid bahasa.');
    this.addBahasa(bahasa);
  }

  get getLastAddedBahasa() {
    if (this.lastAddedBahasa) return this.lastAddedBahasa;
    return 'No bahasa added yet.';
  }

  YelYel(this: JurusanTI) {
    console.log(`TI TI TI GO!`);
  }

  static sebutNama(this: JurusanTI, namaSaya: string) {
    console.log('Halo, nama saya', namaSaya, 'dari jurusan TI');
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new JurusanTI();
    return this.instance;
  }
}

const ti = JurusanTI.getInstance();
const ti2 = JurusanTI.getInstance();
ti.addAnggota('Habib', 'Andri');
ti.addBahasa('Java', 'C++', 'C#', 'JavaScript', 'HTML', 'CSS');

// * ini return-nya sama padahal addAnggota dipanggil di ti, bukan ti2
console.log({ ti, ti2 });

class JurusanSI extends Jurusan {
  constructor(private industri: string[] = []) {
    super(211, 'Sistem Informasi');
  }

  addIndustri(this: JurusanSI, ...industri: string[]) {
    this.industri.push(...industri);
  }

  showIndustri(this: JurusanSI) {
    console.log(this.industri);
  }

  YelYel(this: JurusanSI) {
    console.log(`Ah sudahlah...`);
  }

  static sebutKode(this: JurusanSI, kodeSaya: number) {
    console.log('Halo, kode saya', kodeSaya, 'dari jurusan SI');
  }
}

const si = new JurusanSI();
si.addAnggota('Robin', 'Sugiono');
si.addIndustri('Perminyakan', 'Kehutanan', 'Food & Beverages', 'E-commerce');

console.log({ ti, si });
