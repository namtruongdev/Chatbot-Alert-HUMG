"use strict";

class Text {
  constructor(name) {
    let gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.gender = gender;
    this.chaoHoi = ["H\xEA h\xEA, baaaaaby \uD83D\uDE18", "Ch\xE0o ".concat(this.getGender(), " ").concat(name, ", em t\xEAn l\xE0 H\u1EA5u \uD83C\uDF49"), "Xin ch\xE0o, ".concat(this.getGender(), " ").concat(name, " c\u1EA7n H\u1EA5u \uD83C\uDF49 gi\xFAp g\xEC n\xE0o?"), "H\u1EBF nh\xF4 ".concat(this.getGender(), " ").concat(name, " kute ph\xF4 mai que \uD83E\uDDC0"), "\u01A0n gi\u1EDDi ".concat(this.getGender(), " ").concat(name, " \u0111\xE2y r\u1ED3i \uD83D\uDE02"), "Ngo\xE0i kia gi\xF3 th\u1ED5i r\xEC r\xE0o...\u0110\u1EA7u ti\xEAn xin g\u1EEDi l\u1EDDi ch\xE0o th\xE2n th\u01B0\u01A1ng \uD83D\uDC4B", "B\u1EEFa nay H\u1EA5u \uD83C\uDF49 g\u1EEDi l\u1EDDi ch\xE0o. C\xF9ng nhau t\u01B0\u01A1ng t\xE1c ta c\xE0ng th\xEAm th\xE2n \u2764", "Konnichiwa ".concat(this.getGender(), " ").concat(name, " \uD83D\uDE0A")];
    this.dadangkyroi = ["".concat(this.getGender(), " ").concat(name, " \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn tin tr\u01B0\u1EDBc \u0111\xF3 r\u1ED3i m\xE0. N\u1EBFu \xFD c\u1EE7a ").concat(this.getGender(), " l\xE0 mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD nh\u1EADn tin th\xEC ").concat(this.getGender(), " c\xF3 th\u1EC3 chat ho\u1EB7c ch\u1ECDn \"H\u1EE7y \u0111\u0103ng k\xFD\" t\u1EEB menu r\u1ED3i g\u1EEDi l\u1EA1i cho \uD83C\uDF49 nh\xE9... Nh\u01B0ng m\xE0 \uD83C\uDF49 s\u1EBD bu\u1ED3n l\u1EAFm khi ").concat(this.getGender(), " l\xE0m v\u1EADy \uD83D\uDE25")];
    this.daTungNoiMsv = ["L\u1EA7n tr\u01B0\u1EDBc ".concat(this.getGender(), " ").concat(name, " c\xF3 n\xF3i cho \uD83C\uDF49 m\xE3 sinh vi\xEAn n\xE0y r\u1ED3i m\xE0 \uD83E\uDD23"), "\uD83C\uDF49 v\u1EABn nh\u1EDB m\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " m\xE0...").concat(this.getGender(), " c\xF3 th\u1EC3 nh\u1EADp l\u1EA1i m\u1ED9t m\xE3 kh\xE1c \u0111\u1EC3 xem c\u1EE7a ng\u01B0\u1EDDi kh\xE1c nh\xE9")];
    this.daHuyDangKyRoi = ["X\xEC... ".concat(this.getGender(), " ").concat(name, " \u0111\xE3 bao gi\u1EDD \u0111\u0103ng k\xFD nh\u1EADn tin \u0111\xE2u m\xE0 c\u1EE9 \u0111\xF2i h\u1EE7y v\u1EADy? Gh\xE9t \uD83C\uDF49 \u0111\u1EBFn th\u1EBF \xE0 \uD83D\uDE44")];
    this.danglaytkb = ["Ch\u1EDD H\u1EA5u \uD83C\uDF49 x\xEDu nha... H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EC1 cho ".concat(this.getGender(), " \uD83D\uDE0B"), "H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EEBa n\xF3ng v\u1EEBa th\u1ED5i v\u1EC1 cho ".concat(this.getGender(), " ").concat(name, " n\xE8. Ch\u1EDD x\xEDu nhen...")];
    this.daluumsv = ["\uD83C\uDF49 \u0111\xE3 nh\u1EDB M\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " r\u1ED3i nha. Ahihi, y\xEAn t\xE2m \uD83C\uDF49 s\u1EBD kh\xF4ng bao gi\u1EDD qu\xEAn \u0111\u01B0\u1EE3c \u0111\xE2u. L\xFAc n\xE0o ").concat(this.getGender(), " c\u1EA7n xem l\u1ECBch h\u1ECDc th\xEC c\u1EE9 nh\u1EAFn cho \uD83C\uDF49 bi\u1EBFt nh\xE9")];
    this.hauAnDuocKhong = ["Huhu... \uD83C\uDF49 l\xE0 \u0111\u1EC3 y\xEAu th\u01B0\u01A1ng nh\xE9 ".concat(this.getGender(), " ").concat(name, ", kh\xF4ng c\xF3 \u0103n \u0111\u01B0\u1EE3c \u0111\xE2u \uD83D\uDC94")];
    this.hauCoTheLamGi = ["\uD83C\uDF49 l\xE0 m\u1ED9t robot xinh g\xE1i si\xEAu c\u1EA5p v\xF4 \u0111\u1ECBch \u0111\u01B0\u1EE3c Boss D\u01B0\u01A1ng Nam Tr\u01B0\u1EDDng t\u1EA1o ra v\xE0o ng\xE0y 08/07/2020 v\u1EDBi nhi\u1EC7m v\u1EE5 nh\u1EAFc nh\u1EDF l\u1ECBch h\u1ECDc cho c\xE1c anh em HUMGer v\xE0 c\u0169ng c\xF3 th\u1EC3 t\xE2m s\u1EF1 v\u1EDBi anh em n\u1EBFu c\u1EA7n \uD83D\uDE18"];
    this.huyDangKyRoiMa = ["".concat(this.getGender(), " ").concat(name, " \u0111\xE3 h\u1EE7y \u0111\u0103ng k\xFD r\u1ED3i m\xE0, h\u1EE7y g\xEC m\xE0 h\u1EE7y l\u1EAFm v\u1EADy. ").concat(this.getGender(), " h\u1EBFt th\u01B0\u01A1ng \uD83C\uDF49 r\u1ED3i \xE0?")];
    this.notInfo = ["".concat(this.getGender(), " ").concat(name, " vui l\xF2ng cung c\u1EA5p M\xE3 sinh vi\xEAn cho \uD83C\uDF49 tr\u01B0\u1EDBc khi mu\u1ED1n \u0111\u0103ng k\xFD nh\u1EADn tin h\xE0ng ng\xE0y nh\xE9")];
    this.notrain = ["Xin l\u1ED7i ".concat(this.getGender(), " ").concat(name, " nhi\u1EC1u l\u1EAFm. H\u1EA5u H\u1EA5u \uD83C\uDF49 c\xF2n nh\u1ECF, ch\u01B0a \u0111\u01B0\u1EE3c Boss Tr\u01B0\u1EDDng d\u1EA1y nhi\u1EC1u n\xEAn kh\xF4ng bi\u1EBFt tr\u1EA3 l\u1EDDi c\xE2u n\xE0y nh\u01B0 n\xE0o \uD83D\uDE25"), 'Câu này hình như em chưa được dạy. Ahihi 😁', "Ui chu choa ".concat(this.getGender(), " ").concat(name, " \u01A1i, t\u1EF1 nhi\xEAn m\u1EAFt H\u1EA5u \uD83C\uDF49 m\u1EDD qu\xE1 kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c ch\u1EEF \uD83D\uDE44")];
    this.removeSub = ["H\u1EE7y th\xE0nh c\xF4ng! Khi n\xE0o nh\u1EDB \uD83C\uDF49 th\xEC h\xE3y \u0111\u0103ng k\xFD nh\u1EADn tin l\u1EA1i nha \uD83D\uDE2D"];
    this.thaydoimsv = ["\u2757 Ch\xFA \xFD: ".concat(this.getGender(), " ").concat(name, " v\u1EEBa thay \u0111\u1ED5i m\xE3 sinh vi\xEAn c\u1EE7a m\xECnh.")];
    this.xemtkb = ["\u0110\u01B0a m\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " cho H\u1EA5u \uD83C\uDF49 n\xE0o?")];
    this.sub = ["C\u1EA3m \u01A1n ".concat(this.getGender(), " ").concat(name, " \u0111\xE3 tin t\u01B0\u1EDFng \uD83C\uDF49. T\u1EEB gi\u1EDD tr\u1EDF \u0111i, m\u1ED7i s\xE1ng th\u1EE9c d\u1EADy \uD83C\uDF49 s\u1EBD l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn nh\u1EAFn tin cho ").concat(this.getGender())];
  }

  getGender() {
    if (this.gender === 'male') return 'anh';
    return 'chị';
  }

}

module.exports = Text;