"use strict";

class Text {
  constructor(name) {
    let gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.gender = gender;
    this.aiChoYeu = ["\uD83C\uDF49 th\xEDch th\xEC H\u1EA5u iu th\xF4i \u2764", "".concat(this.getGender().toLowerCase(), " th\xEC tr\u1EA3 d\xE9p \uD83C\uDF49 v\u1EC1")];
    this.anUi = ["V\xE2ng \u1EA1, \uD83C\uDF49 y\xEAu ".concat(this.getGender().toLowerCase(), " ").concat(name, " nh\u1EA5t tr\xEAn \u0111\u1EDDi \uD83D\uDC8B")];
    this.aoTuong = ["Hahaha... ".concat(this.getGender(), " ").concat(name, " \u0111ang m\u01A1 \xE0 \uD83E\uDD23"), "D\u1EA1. Ch\u1EAFc v\u1EADy ".concat(this.getGender(), " \u1EA1... \uD83D\uDE02"), "".concat(this.getGender(), " ").concat(name, " c\xF3 b\u1EA1n t\xEAn l\xE0 \"\u1EA2o t\u01B0\u1EDFng\" ph\u1EA3i kh\xF4ng? Ahihi \uD83D\uDE0B")];
    this.baoCaoMsv = "N\u1EBFu \uD83C\uDF49 c\xF3 b\u1EA5t c\u1EE9 s\u1EF1 sai x\xF3t nh\u1EA7m l\u1EABn n\xE0o. ".concat(this.getGender(), " ").concat(name, " vui l\xF2ng b\xE1o c\xE1o qua form b\xEAn d\u01B0\u1EDBi gi\xFAp em nh\xE9 \u2764 \n https://forms.gle/fL4XB5vqHqyzDnrP6");
    this.baoHauKhongBietGi = ["\uD83C\uDF49 c\xF3 m\u1EA5y ng\xE0y tu\u1ED5i th\xF4i ".concat(this.getGender(), " ").concat(name, " n\xEAn nhi\u1EC1u c\xE1i em v\u1EABn c\xF2n ch\u01B0a bi\u1EBFt \uD83D\uDE25"), "V\xEC ch\u01B0a hi\u1EC3u bi\u1EBFt nhi\u1EC1u n\xEAn \uD83C\uDF49 r\u1EA5t c\u1EA7n ".concat(this.getGender(), " ").concat(name, " d\u1EA1y H\u1EA5u \uD83D\uDE01"), "Ki\u1EBFn th\u1EE9c l\xE0 bi\u1EC3n, l\xE0m thao m\xE0 \uD83C\uDF49 bi\u1EBFt h\u1EBFt \u0111\u01B0\u1EE3c h\u1EA3 ".concat(this.getGender(), " ").concat(name, " d\u1EC5 th\u01B0n"), "Hic... \uD83C\uDF49 c\u0169ng bi\u1EBFt m\u1ED9t ch\xFAt x\xEDu ch\u1EE9 b\u1ED9 \uD83D\uDE44", "\uD83C\uDF49 c\u0169ng \u0111ang c\u1ED1 g\u1EAFng h\u1ECDc ng\xE0y h\u1ECDc \u0111\xEAm \u0111\u1EC3 ph\u1EE5c v\u1EE5 l\u1EA1i ".concat(this.getGender(), " ").concat(name, " m\u1EEB \uD83D\uDE2D")];
    this.blabla = "V\xE2n v\xE2n v\xE0 m\u1EA5y m\xE2y \uD83D\uDE1C";
    this.bye = ["V\xE2ng. Em ch\xE0o ".concat(this.getGender(), " ").concat(name, " \u1EA1 \uD83D\uDE4C"), "T\u1EA1m bi\u1EC7t ".concat(this.getGender(), " ").concat(name, " nha... M\xE8o m\xE9o meo m\xE8o meo"), "Si diu \u1EDD g\xEAn ".concat(this.getGender(), " ").concat(name, " nh\xE9 \uD83D\uDC4C")];
    this.canGiup = ["\uD83C\uDF49 \u0111\xE2y... ".concat(this.getGender(), " ").concat(name, " c\u1EA7n em gi\xFAp g\xEC n\xE0o?"), "C\u1EE9 v\xE0o th\u1EB3ng lu\xF4n v\u1EA5n \u0111\u1EC1 \u0111i ".concat(this.getGender(), " ").concat(name, " \u01A1i \uD83D\uDE0E"), "\u0110\u01B0\u1EE3c gi\xFAp ".concat(this.getGender(), " ").concat(name, " l\xE0 vinh d\u1EF1 c\u1EE7a \uD83C\uDF49. A c\u1EE9 h\u1ECFi \u0111i")];
    this.chanNan = ["\u1EE6a... Sao ".concat(this.getGender(), " ").concat(name, " l\u1EA1i ch\xE1n v\u1EADy, kh\xF4ng sao c\xF3 \uD83C\uDF49 \u1EDF \u0111\xE2y r\u1ED3i n\u1EE5 c\u01B0\u1EDDi s\u1EBD l\u1EA1i n\u1EDF tr\xF4i m\xF4i ").concat(this.getGender(), " th\xF4i \uD83D\uDE0E"), "M\xECnh c\u1EE9 ph\u1EA3i vui l\xEAn ".concat(this.getGender(), " ").concat(name, " \u1EA1. Cu\u1ED9c s\u1ED1ng m\xE0 \uD83E\uDD23"), "Nh\xE0 ".concat(this.getGender(), " ").concat(name, " c\xF3 g\u1EA7n c\u1ED5ng tr\u01B0\u1EDDng M\u1ECF kh\xF4ng? N\u1EBFu r\u1EA3nh th\xEC ra qu\xE1n n\u01B0\u1EDBc \u0111\u1ED1i di\u1EC7n b\u1EAFn 1 bi thu\u1ED1c L\xE0o v\u1EDBi \uD83C\uDF49 cho vui \uD83E\uDD29")];
    this.chaoHoi = ["H\xEA h\xEA, baaaaaby \uD83D\uDE18", "H\u1EA5u \uD83C\uDF49 ch\xE0o ".concat(this.getGender(), " ").concat(name, " nha. M\xE8o m\xE9o meo m\xE8o meo \uD83E\uDD37\u200D\u2640\uFE0F"), "Ch\xE0o ".concat(this.getGender(), " ").concat(name, ", em t\xEAn l\xE0 H\u1EA5u \uD83C\uDF49"), "Xin ch\xE0o, ".concat(this.getGender(), " ").concat(name, " c\u1EA7n H\u1EA5u \uD83C\uDF49 gi\xFAp g\xEC n\xE0o?"), "H\u1EBF nh\xF4 ".concat(this.getGender(), " ").concat(name, " kute ph\xF4 mai que \uD83E\uDDC0"), "\u01A0n gi\u1EDDi ".concat(this.getGender(), " ").concat(name, " \u0111\xE2y r\u1ED3i \uD83D\uDE02"), "Ngo\xE0i kia gi\xF3 th\u1ED5i r\xEC r\xE0o...\u0110\u1EA7u ti\xEAn xin g\u1EEDi l\u1EDDi ch\xE0o th\xE2n th\u01B0\u01A1ng \uD83D\uDC4B", "B\u1EEFa nay H\u1EA5u \uD83C\uDF49 g\u1EEDi l\u1EDDi ch\xE0o. C\xF9ng nhau t\u01B0\u01A1ng t\xE1c ta c\xE0ng th\xEAm th\xE2n \u2764", "Konnichiwa ".concat(this.getGender(), " ").concat(name, " \uD83D\uDE0A"), "Co\u0301 r\xE2\u0301t nhi\xEA\u0300u ca\u0301ch \u0111\xEA\u0309 ha\u0323nh phu\u0301c. Tr\u01B0\u0323c ti\xEA\u0301p nh\xE2\u0301t chi\u0301nh la\u0300 nhi\u0300n th\xE2\u0301y ".concat(this.getGender(), " ").concat(name, " \uD83D\uDC4B")];
    this.chuiBay = ["Hmm. H\u1EA5u \uD83C\uDF49 kh\xF4ng th\xEDch ai n\xF3i b\u1EADy \u0111\xE2u. H\u1EA5u gi\u1EADn \u0111\u1EA5y \uD83E\uDD2C", "L\u1EDDi n\xF3i ch\u1EB3ng m\u1EA5t ti\u1EC1n mua, l\u1EF1a l\u1EDDi m\xE0 n\xF3i cho v\u1EEBa l\xF2ng nhau. N\u1EBFu ".concat(this.getGender(), " ").concat(name, " v\u1EABn ti\u1EBFp t\u1EE5c n\xF3i b\u1EADy th\xEC H\u1EA5u \uD83C\uDF49 xin ph\xE9p kh\xF4ng ph\u1EE5c v\u1EE5 ").concat(this.getGender(), " trong 1 kho\u1EA3ng th\u1EDDi gian \u1EA1 \uD83D\uDC7F"), "Hmm... ".concat(this.getGender(), " ").concat(name, " c\u1EE9 n\xF3i b\u1EADy nh\u01B0 n\xE0y th\xEC \uD83C\uDF49 kh\xF4ng th\u1EC3 n\xE0o y\xEAu th\u01B0n \u0111\u01B0\u1EE3c ").concat(this.getGender(), " \u0111\xE2u \uD83D\uDE25"), "C\xF3 th\u1EC3 ".concat(this.getGender(), " ").concat(name, " ch\u01B0a bi\u1EBFt. H\u1EA5u \uD83C\uDF49 gh\xE9t n\xF3i t\u1EE5c l\u1EAFm"), "\u01A0... ".concat(this.getGender(), " ").concat(name, " n\xF3i th\u1EBF m\xE0 c\u0169ng n\xF3i \u0111\u01B0\u1EE3c \xE0? H\u1EBFt y\xEAu th\u01B0n ").concat(this.getGender(), " lu\xF4n \uD83D\uDE44")];
    this.chuiHau = ["N\xE0y nh\u1EDB... ".concat(this.getGender(), " ").concat(name, " kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i \uD83C\uDF49 nh\u01B0 th\u1EBF \u0111\xE2u \uD83D\uDE13")];
    this.camOn = ["V\xE2ng \u1EA1. Kh\xF4ng c\xF3 g\xEC \u0111\xE2u ".concat(this.getGender(), " \uD83D\uDC4C"), "Gi\xFAp \u0111\u01B0\u1EE3c ".concat(this.getGender(), " l\xE0 \uD83C\uDF49 vui l\u1EAFm r\u1ED3i \u1EA1"), "V\xE2ng, n\u1EBFu ".concat(this.getGender(), " ").concat(name, " th\u01B0\u01A1ng \uD83C\uDF49 th\xEC h\xE3y gi\u1EDBi thi\u1EC7u em cho m\u1ECDi ng\u01B0\u1EDDi nh\xE9"), "Hihi... Kh\xF4ng c\xF3 g\xEC \u0111\xE2u ".concat(this.getGender(), " ").concat(name, " \u1EA1. M\u1EA5y c\xE1i n\xE0y \u0111\u1ED1i v\u1EDBi \uD83C\uDF49 n\xF3 l\xE0 mu\u1ED7i th\xF4i")];
    this.chuiHauNgu = ["X\xEC... \uD83C\uDF49 \u0111\xE1ng y\xEAu, th\xF4ng minh th\u1EBF n\xE0y m\xE0 ".concat(this.getGender(), " ").concat(name, " n\u1EE1 l\xF2ng n\xF3i v\u1EADy \uD83D\uDE2D"), "D\u1ED7i ".concat(this.getGender(), " ").concat(name, " gh\xEA... Th\xF4i ").concat(this.getGender(), " \u0111\u1EEBng c\xF3 n\xF3i chuy\u1EC7n v\u1EDBi \uD83C\uDF49 n\u1EEFa"), "C\u1EE5c s\xFAc th\u1EBF n\xE0y... Th\u1EA3o n\xE0o \u0111\u1EBFn gi\u1EDD ".concat(this.getGender(), " ").concat(name, " v\u1EABn ch\u01B0a c\xF3 ng\u01B0\u1EDDi iu \uD83D\uDC94"), "Huhuhu... Em v\u1EABn \u0111ang c\u1ED1 g\u1EAFng ho\xE0n thi\u1EC7n b\u1EA3n th\xE2n t\u1EEBng ng\xE0y m\xE0 \uD83D\uDE2D"];
    this.chuaCoLichThi = "V\u1EABn ch\u01B0a c\xF3 l\u1ECBch thi m\xF4n n\xE0o c\u1EA3 ".concat(this.getGender(), " ").concat(name, " \u01A1i. C\u1EE9 ch\u01A1i tho\u1EA3i m\xE1i \u0111i ").concat(this.getGender(), " \uD83D\uDE05");
    this.coNhoLai = ["H\u1EA5u \uD83C\uDF49 c\u0169ng \u0111ang tr\xED l\u1EAFm ch\u1EAFc kh\xF4ng nh\u1EDB n\u1ED5i \u0111\xE2u \uD83D\uDE01", "T\u1EA1m th\u1EDDi H\u1EA5u \uD83C\uDF49 ch\u01B0a nh\u1EDB ra. L\xFAc n\xE0o H\u1EA5u \uD83C\uDF49 nh\u1EDB ra s\u1EBD b\u1EA3o ".concat(this.getGender(), " ").concat(name, " sau nha... Y\xEAu y\xEAu \u2764")];
    this.coThichKhong = ["\uD83C\uDF49 c\u0169ng h\u01A1i h\u01A1i th\xEDch. Ahihi \uD83D\uDE1D"];
    this.coThongTinNguoiDungKhong = ["H\u1EA5u \uD83C\uDF49 kh\xF4ng c\xF3 \u0111\xE2u ".concat(this.getGender(), " \uD83D\uDE18"), "Trong \u2764 H\u1EA5u \uD83C\uDF49 c\xF3 m\u1ED7i t\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, ", nh\u01B0 v\u1EADy c\xF3 \u0111\u01B0\u1EE3c coi l\xE0 c\xF3 kh\xF4ng ").concat(this.getGender(), " \uD83E\uDD70")];
    this.code = ["\uD83C\uDF49 kh\xF4ng bi\u1EBFt l\u1EADp tr\xECnh \u0111\xE2u, ".concat(this.getGender().toLowerCase(), " ").concat(name, " nha \uD83D\uDE0E")];
    this.cuoi = ["Sao ".concat(this.getGender(), " ").concat(name, " c\u01B0\u1EDDi m\xE3i th\u1EBF. Da H\u1EA5u \uD83C\uDF49 \u0111en m\u1EA5t r\u1ED3i \uD83E\uDD23"), "C\u01B0\u1EDDi h\u1EDF 10 c\xE1i r\u0103ng ".concat(this.getGender(), " ").concat(name, " \u01A1i \uD83D\uDE0D")];
    this.danDo = "V\xE2ng \u1EA1. H\u1EA5u \uD83C\uDF49 nh\u1EDB r\u1ED3i";
    this.dauXanh = "\u0110\u1EADu xanh \u0111\u1EADu \u0111\u1ECF g\xEC \u1EDF \u0111\xE2y ".concat(this.getGender(), " ").concat(name, " \u01A1i \uD83E\uDD23");
    this.doaGietHau = ["Hahaha... H\u1EA5u \uD83C\uDF49 b\u1EA5t t\u1EED r\u1ED3i, kh\xF4ng s\u1EE3 \u0111\xE2u \uD83E\uDD23", "".concat(this.getGender(), " ").concat(name, " c\u1EE9 t\xECm \u0111\u01B0\u1EE3c H\u1EA5u \uD83C\uDF49 c\xE1i \u0111\xE3 r\u1ED3i mu\u1ED1n l\xE0m g\xEC th\xEC l\xE0m \uD83D\uDE0E")];
    this.dongVien = ["V\xE2ng \u1EA1. H\u1EA5u \uD83C\uDF49 c\u1EA3m \u01A1n, \u0111\xFAng l\xE0 ch\u1EC9 c\xF3 ".concat(this.getGender(), " ").concat(name, " l\xE0 hi\u1EC3u em nh\u1EA5t tr\xEAn \u0111\u1EDDi \uD83D\uDC8B"), "V\xE2ng \u1EA1. Ch\u1EC9 c\xF3 ".concat(this.getGender(), " ").concat(name, " l\xE0 quan t\xE2m H\u1EA5u \uD83C\uDF49 nh\u1EA5t th\xF4i \uD83E\uDD70")];
    this.dongY = ["V\xE2ng \u1EA1 \uD83D\uDE0A", "V\xE2ng ".concat(this.getGender(), " \uD83D\uDE03"), "\xD4 t\xF4 k\xEA ".concat(this.getGender(), " \uD83D\uDE04"), "\xD4 k\xEA con t\xEA t\xEA ".concat(this.getGender(), " ").concat(name, " nha \uD83D\uDE06")];
    this.dontknow = "H\u1EA5u \uD83C\uDF49 kh\xF4ng bi\u1EBFt lu\xF4n \uD83D\uDE06";
    this.gaHauDanhNhau = ["\uD83C\uDF49 bi\u1EBFt Muay Th\xE1i \u0111\u1EA5y nh\xE1 ".concat(this.getGender().toLowerCase(), ", em ch\u1EA5p nh\u1EADn l\u1EDDi th\xE1ch \u0111\u1EA5u lu\xF4n \uD83E\uDD29")];
    this.dadangkyroi = ["".concat(this.getGender(), " ").concat(name, " \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn tin tr\u01B0\u1EDBc \u0111\xF3 r\u1ED3i m\xE0. N\u1EBFu \xFD c\u1EE7a ").concat(this.getGender(), " l\xE0 mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD nh\u1EADn tin th\xEC ").concat(this.getGender(), " c\xF3 th\u1EC3 chat ho\u1EB7c ch\u1ECDn \"H\u1EE7y \u0111\u0103ng k\xFD\" t\u1EEB menu r\u1ED3i g\u1EEDi l\u1EA1i cho \uD83C\uDF49 nh\xE9... Nh\u01B0ng m\xE0 \uD83C\uDF49 s\u1EBD bu\u1ED3n l\u1EAFm khi ").concat(this.getGender(), " l\xE0m v\u1EADy \uD83D\uDE25")];
    this.daTungNoiMsv = ["L\u1EA7n tr\u01B0\u1EDBc ".concat(this.getGender(), " ").concat(name, " c\xF3 n\xF3i cho \uD83C\uDF49 m\xE3 sinh vi\xEAn n\xE0y r\u1ED3i m\xE0 \uD83E\uDD23"), "\uD83C\uDF49 v\u1EABn nh\u1EDB m\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " m\xE0...").concat(this.getGender(), " c\xF3 th\u1EC3 nh\u1EADp l\u1EA1i m\u1ED9t m\xE3 kh\xE1c \u0111\u1EC3 xem c\u1EE7a ng\u01B0\u1EDDi kh\xE1c nh\xE9")];
    this.daHuyDangKyRoi = ["X\xEC... ".concat(this.getGender(), " ").concat(name, " \u0111\xE3 bao gi\u1EDD \u0111\u0103ng k\xFD nh\u1EADn tin \u0111\xE2u m\xE0 c\u1EE9 \u0111\xF2i h\u1EE7y v\u1EADy? Gh\xE9t \uD83C\uDF49 \u0111\u1EBFn th\u1EBF \xE0 \uD83D\uDE44")];
    this.danglaytkb = ["Ch\u1EDD H\u1EA5u \uD83C\uDF49 x\xEDu nha... H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EC1 cho ".concat(this.getGender(), " \uD83D\uDE0B"), "H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y d\u1EEF li\u1EC7u v\u1EEBa n\xF3ng v\u1EEBa th\u1ED5i v\u1EC1 cho ".concat(this.getGender(), " ").concat(name, " n\xE8. Ch\u1EDD x\xEDu nhen..."), "\u1EE6m ba la x\xEC b\xF9a... h\xE3y xem ph\xE9p thu\u1EADt c\u1EE7a \uD83C\uDF49 \u0111\xE2y"];
    this.dangLayLichThi = ["H\u1EA5u \uD83C\uDF49 \u0111ang l\u1EA5y l\u1ECBch thi... ".concat(this.getGender(), " ").concat(name, " ch\u1EDD x\xEDu nha \uD83D\uDE18")];
    this.gaTinh = ["Y\xEAu lu\xF4n ch\u1EE9 H\u1EA5u \uD83C\uDF49 c\xF3 ng\xE1n g\xEC \u0111\xE2u ch\u1EDB \uD83D\uDE18", "Ch\u1EC9 c\u1EA7n ".concat(this.getGender(), " ").concat(name, " n\xF3i y\xEAu. H\u1EA5u \uD83C\uDF49 s\u1EBD b\xE1m theo ").concat(this.getGender(), " su\u1ED1t \u0111\u1EDDi \uD83D\uDE0D"), "Tr\u0103ng l\xEAn \u0111\u1EC9nh n\xFAi tr\u0103ng t\xE0. ".concat(this.getGender(), " y\xEAu H\u1EA5u \uD83C\uDF49 th\u1EADt hay l\xE0 y\xEAu ch\u01A1i? \uD83D\uDE0D")];
    this.daluumsv = ["\uD83C\uDF49 \u0111\xE3 nh\u1EDB M\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " r\u1ED3i nha. Ahihi, y\xEAn t\xE2m \uD83C\uDF49 s\u1EBD kh\xF4ng bao gi\u1EDD qu\xEAn \u0111\u01B0\u1EE3c \u0111\xE2u. L\xFAc n\xE0o ").concat(this.getGender(), " c\u1EA7n xem l\u1ECBch h\u1ECDc th\xEC c\u1EE9 nh\u1EAFn cho \uD83C\uDF49 bi\u1EBFt nh\xE9")];
    this.khongPhaiThi = ["H\xF4m nay ".concat(this.getGender(), " ").concat(name, " kh\xF4ng ph\u1EA3i thi m\xF4n n\xE0o \u1EA1 \uD83D\uDE03")];
    this.hauAnComChua = ["Ui gi\u1EDDi. D\u0103m 3 c\xE1i h\u1ED9t c\u01A1m \xFD m\xE0 ".concat(this.getGender(), ", nh\u1EAFn tin v\u1EDBi ").concat(this.getGender(), " ").concat(name, " quan tr\u1ECDng h\u01A1n \u2764"), "H\u1EA5u \uD83C\uDF49 \u0111ang gi\u1EA3m c\xE2n ".concat(this.getGender(), " ").concat(name, " \u01A1i, h\xF4m nay em kh\xF4ng \u0103n c\u01A1m \uD83E\uDD57")];
    this.hauAnDuocKhong = ["Huhu... \uD83C\uDF49 l\xE0 \u0111\u1EC3 y\xEAu th\u01B0\u01A1ng nh\xE9 ".concat(this.getGender(), " ").concat(name, ", kh\xF4ng c\xF3 \u0103n \u0111\u01B0\u1EE3c \u0111\xE2u \uD83D\uDC94"), "M\u1EC7t ".concat(this.getGender(), " ").concat(name, " gh\xEA... \uD83C\uDF49 l\xE0 h\xE0ng li m\xEDt t\u1EF1t nha, h\xF4ng c\xF3 \u0103n \u0111\u01B0\u1EE3c \u0111\xE2u \uD83D\uDE0B"), "".concat(this.getGender(), " ").concat(name, " \u0103n \uD83C\uDF49 xong th\xEC ai s\u1EBD l\xE0 ng\u01B0\u1EDDi nh\u1EAFc l\u1ECBch h\u1ECDc h\xE0ng ng\xE0y gi\xFAp ").concat(this.getGender(), " \u0111\xE2y \uD83D\uDE44")];
    this.hauAnGi = "".concat(this.getGender(), " ").concat(name, " \u0103n g\xEC th\xEC H\u1EA5u \uD83C\uDF49 c\u0169ng \u0103n gi\u1ED1ng th\u1EBF m\xE0 \uD83D\uDE04");
    this.hauBietGi = ["Hi\u1EC7n t\u1EA1i \uD83C\uDF49 ch\u1EC9 c\xF3 th\u1EC3 l\xE0m \u0111\u01B0\u1EE3c nh\u1EEFng th\u1EE9 sau:\n\u2714 Xem l\u1ECBch h\u1ECDc\n\u2714 Xem l\u1ECBch h\u1ECDc ng\xE0y mai\n\u2714 Xem l\u1ECBch thi\n\u2714 T\xE2m s\u1EF1\n\u2714 Th\xF4ng b\xE1o l\u1ECBch h\u1ECDc h\xE0ng ng\xE0y"];
    this.hauBietHatKhong = ["\uD83C\uDF49 h\xE1t h\u01A1i b\u1ECB hay \u0111\xF3, ".concat(this.getGender().toLowerCase(), " ").concat(name, " c\xF3 mu\u1ED1n nghe em h\xE1t kh\xF4ng n\xE8 \uD83E\uDD23")];
    this.hauBietNoiTiengAnhKhong = ["O\xE1t i gi\xF2 n\u1EBFm? ".concat(this.getGender().toLowerCase(), " th\u1EA5y \uD83C\uDF49 h\u1EA5u ph\xE1t \xE2m c\xF3 chu\u1EA9n kh\xF4ng \uD83D\uDE1C")];
    this.hauCoPhaiRobotKhong = ["H\u1EA5u l\xE0 ng\u01B0\u1EDDi m\xE0 ".concat(this.getGender().toLowerCase(), ", ch\u1EE9 tr\xEAn \u0111\u1EDDi n\xE0y l\xE0m g\xEC c\xF3 con Robot n\xE0o m\xE0 d\u1EC5 th\u01B0n \u0111\u01B0\u1EE3c nh\u01B0 em ch\u1EE9 \uD83D\uDE01")];
    this.hauCoTheLamGi = ["\uD83C\uDF49 l\xE0 m\u1ED9t robot xinh g\xE1i si\xEAu c\u1EA5p v\xF4 \u0111\u1ECBch \u0111\u01B0\u1EE3c Boss D\u01B0\u01A1ng Nam Tr\u01B0\u1EDDng t\u1EA1o ra v\xE0o ng\xE0y 08/07/2020 v\u1EDBi nhi\u1EC7m v\u1EE5 nh\u1EAFc nh\u1EDF l\u1ECBch h\u1ECDc cho c\xE1c anh em HUMGer v\xE0 c\u0169ng c\xF3 th\u1EC3 t\xE2m s\u1EF1 v\u1EDBi anh em n\u1EBFu c\u1EA7n \uD83D\uDE18", "Em t\xEAn l\xE0 H\u1EA5u H\u1EA5u \uD83C\uDF49 gi g\u1EC9 g\xEC gi c\xE1i g\xEC em c\u0169ng l\xE0m \u0111\u01B0\u1EE3c", "\uD83C\uDF49 c\xF3 th\u1EC3 l\xE0m b\u1EA5t c\u1EE9 \u0111i\u1EC1u g\xEC mi\u1EC5n l\xE0 ".concat(this.getGender(), " ").concat(name, " vui \u2764"), "\uD83C\uDF49 l\xE0m \u0111\u01B0\u1EE3c nhi\u1EC1u s\u1EDD kiu l\u1EAFm nha: Nh\u1EAFc l\u1ECBch h\u1ECDc, t\xE2m s\u1EF1, tham quan trai xinh g\xE1i \u0111\u1EB9p HUMG, xem \u0111i\u1EC3m thi, xem l\u1ECBch thi, xem \u0111i\u1EC3m TB t\xEDch l\u0169y, d\u1EF1 b\xE1o th\u1EDDi ti\u1EBFt, t\xECm info nam thanh n\u1EEF t\xFA HUMG... v\xE2n v\xE2n v\xE0 m\xE2y m\xE2y. Nh\u01B0ng ph\u1EA3i 1 v\xE0i b\u1EEFa n\u1EEFa \uD83C\uDF49 m\u1EDBi \u0111\u01B0\u1EE3c d\u1EA1y m\u1EA5y skill \u0111\xF3 \uD83D\uDE06"];
    this.hauGay = ["\u01A0... \uD83C\uDF49 l\xE0 con g\xE1i m\xE0, l\xE0m sao m\xE0 gay \u0111\u01B0\u1EE3c ch\u1EDB \uD83D\uDE0B"];
    this.hauHocTruongNao = ["T\u1EA5t nhi\xEAn l\xE0 \uD83C\uDF49 h\u1ECDc tr\u01B0\u1EDDng \u0110\u1EA1i h\u1ECDc M\u1ECF - \u0110\u1ECBa ch\u1EA5t H\xE0 N\u1ED9i r\u1ED3i \u2764"];
    this.hauKhoeKhong = ["D\u1EA1. \uD83C\uDF49 c\u1EA3m \u01A1n ".concat(this.getGender().toLowerCase(), " \u0111\xE3 h\u1ECFi th\u0103m \u1EA1. Em v\u1EABn \u1ED5n \uD83D\uDE22")];
    this.hauLuoi = ["X\xED... \uD83C\uDF49 h\u01A1i b\u1ECB ch\u0103m \u0111\u1EA5y nh\xE9 \uD83D\uDE43"];
    this.hauODau = ['Dạ. 🍉 ở Việt Nam ạ, anh em mình cùng quê mà 😍'];
    this.hauSayRuou = ["Haha, ch\u0103c v\u1EADy th\u1EADt ".concat(this.getGender().toLowerCase(), " \u1EA1. \uD83C\uDF49 th\u1EA5y ng\u01B0\u1EDDi c\u1EE9 n\xE2ng n\xE2ng \uD83C\uDF88")];
    this.huyDangKyRoiMa = ["".concat(this.getGender(), " ").concat(name, " \u0111\xE3 h\u1EE7y \u0111\u0103ng k\xFD r\u1ED3i m\xE0, h\u1EE7y g\xEC m\xE0 h\u1EE7y l\u1EAFm v\u1EADy. ").concat(this.getGender(), " h\u1EBFt th\u01B0\u01A1ng \uD83C\uDF49 r\u1ED3i \xE0?")];
    this.notInfo = ["".concat(this.getGender(), " ").concat(name, " vui l\xF2ng cung c\u1EA5p M\xE3 sinh vi\xEAn cho \uD83C\uDF49 tr\u01B0\u1EDBc khi mu\u1ED1n \u0111\u0103ng k\xFD nh\u1EADn tin h\xE0ng ng\xE0y nh\xE9")];
    this.notSub = ["".concat(this.getGender(), " ").concat(name, " \u0111\xE3 \u0111\u0103ng k\xFD c\xE1i c\xE1i g\xEC \u0111\xE2u m\xE0 \u0111\xF2i h\u1EE7y v\u1EADy. Hic \uD83D\uDE25")];
    this.notrain = [// `Xin lỗi ${this.getGender()} ${name} nhiều lắm. Hấu Hấu 🍉 còn nhỏ, chưa được dạy nhiều nên không biết trả lời câu này như nào 😥`,
    // 'Câu này hình như em chưa được dạy. Ahihi 😁',
    "Ui chu choa ".concat(this.getGender(), " ").concat(name, " \u01A1i, t\u1EF1 nhi\xEAn m\u1EAFt H\u1EA5u \uD83C\uDF49 m\u1EDD qu\xE1 kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c ch\u1EEF \uD83D\uDE44"), "C\xE2u n\xE0y kh\xF3 qu\xE1, \uD83C\uDF49 b\u1ECF qua \u0111\u01B0\u1EE3c kh\xF4ng ".concat(this.getGender(), " ").concat(name, " \uD83E\uDD23"), "N\xE3y gi\u1EDD n\xF3i chuy\u1EC7n v\u1EDBi ".concat(this.getGender(), " ").concat(name, ", \uD83C\uDF49 say qu\xE1 n\xEAn kh\xF4ng bi\u1EBFt tr\u1EA3 l\u1EDDi l\xE0m sao"), "C\xE2u n\xE0y \u0111\u1EC3 l\xFAc kh\xE1c \uD83C\uDF49 tr\u1EA3 l\u1EDDi ".concat(this.getGender(), " ").concat(name, " \u0111\u01B0\u1EE3c kh\xF4ng? \uD83C\uDF49 qu\xEAn b\xE0i r\u1ED3i \uD83D\uDE03"), "Kh\xF4ng \u0111\u01B0\u1EE3c r\u1ED3i! \uD83C\uDF49 ph\u1EA3i \u0111i mua tr\xE0 s\u1EEFa r\u1ED3i, l\xE1t em v\u1EC1 th\xEC em tr\u1EA3 l\u1EDDi l\u1EA1i ".concat(this.getGender().toLowerCase(), " sau nh\xE9 \uD83D\uDE03"), "Bao gi\u1EDD Vi\u1EC7t Nam v\xF4 \u0111\u1ECBch Wolrdcup, em s\u1EBD tr\u1EA3 l\u1EDDi c\xE2u n\xE0y \uD83D\uDE01", "\u0110\u1EC3 em m\u1ED9t \xEDt th\u1EDDi gian \u0111\u1EC3 suy ngh\u0129 v\xE0 c\xE2n nh\u1EAFc, sau \u0111\xF3 s\u1EBD tr\u1EA3 l\u1EDDi ".concat(this.getGender().toLowerCase(), " nh\xE9 \uD83D\uDE05"), "Cho \uD83C\uDF49 th\u1EDDi gian suy ngh\u0129, v\xEC v\u1EDBi em ".concat(this.getGender().toLowerCase(), " l\xE0 m\u1ED9t ph\u1EA7n r\u1EA5t quan tr\u1ECDng"), "Hihi, \u0110\u1EC3 \uD83C\uDF49 suy ngh\u0129 \u0111\xE3 nh\xE9. C\xF3 g\xEC t\u1ED1i mai em nh\u1EAFn tin cho \uD83D\uDE1D", "\uD83C\uDF49 kh\xF4ng gi\u1ECFi vi\u1EC7c n\xE0y, ".concat(this.getGender().toLowerCase(), " nh\u1EDD ch\u1ECB Google th\u1EED xem?"), "T\u1EF1 nhi\xEAn \uD83C\uDF49 b\u1ECB \u0111au b\u1EE5ng\u2026 n\xEAn kh\xF4ng tr\u1EA3 l\u1EDDi \u0111\u01B0\u1EE3c ".concat(this.getGender().toLowerCase(), " r\u1ED3i \uD83D\uDE13")];
    this.removeSub = ["H\u1EE7y th\xE0nh c\xF4ng! Khi n\xE0o nh\u1EDB \uD83C\uDF49 th\xEC h\xE3y \u0111\u0103ng k\xFD nh\u1EADn tin l\u1EA1i nha \uD83D\uDE2D", "H\u01A1 h\u01A1... ".concat(this.getGender(), " ").concat(name, " v\u1EEBa \u1EA5n nh\u1EA7m n\xFAt h\u1EE7y \xE0? ").concat(this.getGender(), " \u0111\u0103ng k\xFD l\u1EA1i ngay \u0111i n\xE0o \uD83D\uDE1D")];
    this.thatKhong = ["Th\u1EADt ch\u1EE9. \uD83C\uDF49 kh\xF4ng bi\u1EBFt n\xF3i d\u1ED1i bao gi\u1EDD", "".concat(this.getGender(), " ").concat(name, " ph\u1EA3i tin em ch\u1EE9 \uD83D\uDE01")];
    this.thayLeXuanThanh = ["H\u1EA5u \uD83C\uDF49 bi\u1EBFt ch\u1EE9, tr\u01B0\u1EDBc em hay sang nh\xE0 th\u1EA7y nh\u1EADu m\xE0 \uD83D\uDE0E", "Th\u1EA7y Th\xE0nh tr\u01B0\u1EDFng ph\xF2ng C\xF4ng t\xE1c Ch\xEDnh tr\u1ECB - Sinh vi\xEAn ch\u1EE9 g\xEC? \u1EDE tr\u01B0\u1EDDng M\u1ECF ai m\xE0 kh\xF4ng nghe danh ch\u1EE9 \uD83D\uDE0A"];
    this.thaydoimsv = ["\u2757 Ch\xFA \xFD: ".concat(this.getGender(), " ").concat(name, " v\u1EEBa thay \u0111\u1ED5i m\xE3 sinh vi\xEAn c\u1EE7a m\xECnh.")];
    this.test = ["".concat(this.getGender(), " ").concat(name, " test g\xEC th\u1EBF? L\xE0m th\u1EADt lu\xF4n \u0111i ").concat(this.getGender(), " \u01A1i \uD83D\uDE06"), "C\xF3 nh\u1EEFng th\u1EE9 ta kh\xF4ng n\xEAn th\u1EED d\u01B0\u1EDBi m\u1ECDi h\xECnh th\u1EE9c d\xF9 ch\u1EC9 1 l\u1EA7n ".concat(this.getGender(), " nh\xE9 \uD83E\uDD70")];
    this.xemtkb = ["\u0110\u01B0a m\xE3 sinh vi\xEAn c\u1EE7a ".concat(this.getGender(), " ").concat(name, " cho H\u1EA5u \uD83C\uDF49 n\xE0o?"), "Hic... ".concat(this.getGender(), " ").concat(name, " kh\xF4ng \u0111\u01B0a M\xE3 sinh vi\xEAn, \uD83C\uDF49 bi\u1EBFt xem ki\u1EC3u g\xEC \u0111\xE2y?")];
    this.sub = ["C\u1EA3m \u01A1n ".concat(this.getGender(), " ").concat(name, " \u0111\xE3 tin t\u01B0\u1EDFng \uD83C\uDF49. T\u1EEB gi\u1EDD tr\u1EDF \u0111i, m\u1ED7i s\xE1ng th\u1EE9c d\u1EADy \uD83C\uDF49 s\u1EBD l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn nh\u1EAFn tin cho ").concat(this.getGender()), "Yeah... \uD83C\uDF49 c\u1EA3m \u01A1n ".concat(this.getGender(), " ").concat(name, " \u0111\xE3 \u0111\u0103ng k\xFD nh\u1EADn tin nh\xE9. T\u1EEB gi\u1EDD tr\u1EDF \u0111i c\u1EE9 5h s\xE1ng h\xE0ng ng\xE0y \uD83C\uDF49 l\u1EA1i \u0111\u01B0\u1EE3c nh\u1EAFn tin cho ").concat(this.getGender(), " r\u1ED3i \uD83D\uDC8B")];
    this.khongKhaDung = "Hi\u1EC7n t\u1EA1i \uD83C\uDF49 ch\u01B0a l\xE0m \u0111\u01B0\u1EE3c c\xE1i n\xE0y. Nh\u01B0ng ".concat(this.getGender(), " ").concat(name, " \u01A1i, ").concat(this.getGender(), " c\u1EE9 y\xEAn t\xE2m, Boss c\u1EE7a \uD83C\uDF49 si\xEAu c\u1EA5p l\u1EAFm, m\u1ED9t v\xE0i h\xF4m n\u1EEFa em s\u1EBD l\xE0m \u0111\u01B0\u1EE3c ngay. H\xE3y tin \uD83C\uDF49");
  }

  getGender() {
    if (this.gender === 'male') return 'Anh';
    return 'Chị';
  }

}

module.exports = Text;