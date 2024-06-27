function segitigaBintang(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
      for (let j = 0; j <= i; j++) {
        hasil += '* ';
      } 
      hasil += '\n';
    }
    return hasil;
  }
  console.log(segitigaBintang(5));
  