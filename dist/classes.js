"use strict";
class Jurusan {
    constructor(id, nama, anggota = []) {
        this.id = id;
        this.nama = nama;
        this.anggota = anggota;
    }
    perkenalkan() {
        console.log(`Jurusan (${this.id}):`, this.nama);
    }
    addAnggota(...firstName) {
        this.anggota.push(...firstName);
    }
}
class JurusanTI extends Jurusan {
    constructor(bahasa = []) {
        super(111, 'Teknik Informatika');
        this.bahasa = bahasa;
        this.lastAddedBahasa = bahasa[0];
    }
    addBahasa(...bahasa) {
        this.bahasa.push(...bahasa);
        this.lastAddedBahasa = bahasa[bahasa.length - 1];
    }
    showBahasa() {
        console.log(this.bahasa);
    }
    set setLastAddedBahasa(bahasa) {
        if (!bahasa)
            throw new Error('Please input a valid bahasa.');
        this.addBahasa(bahasa);
    }
    get getLastAddedBahasa() {
        if (this.lastAddedBahasa)
            return this.lastAddedBahasa;
        return 'No bahasa added yet.';
    }
    YelYel() {
        console.log(`TI TI TI GO!`);
    }
    static sebutNama(namaSaya) {
        console.log('Halo, nama saya', namaSaya, 'dari jurusan TI');
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new JurusanTI();
        return this.instance;
    }
}
const ti = JurusanTI.getInstance();
const ti2 = JurusanTI.getInstance();
ti.addAnggota('Habib', 'Andri');
ti.addBahasa('Java', 'C++', 'C#', 'JavaScript', 'HTML', 'CSS');
console.log({ ti, ti2 });
class JurusanSI extends Jurusan {
    constructor(industri = []) {
        super(211, 'Sistem Informasi');
        this.industri = industri;
    }
    addIndustri(...industri) {
        this.industri.push(...industri);
    }
    showIndustri() {
        console.log(this.industri);
    }
    YelYel() {
        console.log(`Ah sudahlah...`);
    }
    static sebutKode(kodeSaya) {
        console.log('Halo, kode saya', kodeSaya, 'dari jurusan SI');
    }
}
const si = new JurusanSI();
si.addAnggota('Robin', 'Sugiono');
si.addIndustri('Perminyakan', 'Kehutanan', 'Food & Beverages', 'E-commerce');
console.log({ ti, si });
//# sourceMappingURL=classes.js.map