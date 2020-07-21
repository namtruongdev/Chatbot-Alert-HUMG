class Text {
  constructor(name, gender = null) {
    this.gender = gender;
    this.aiChoYeu = [
      `🍉 thích thì Hấu iu thôi ❤`,
      `${this.getGender().toLowerCase()} thì trả dép 🍉 về`,
    ];
    this.anUi = [
      `Vâng ạ, 🍉 yêu ${this.getGender().toLowerCase()} ${name} nhất trên đời 💋`,
    ];
    this.aoTuong = [
      `Hahaha... ${this.getGender()} ${name} đang mơ à 🤣`,
      `Dạ. Chắc vậy ${this.getGender()} ạ... 😂`,
      `${this.getGender()} ${name} có bạn tên là "Ảo tưởng" phải không? Ahihi 😋`,
    ];
    this.baoCaoMsv = `Nếu 🍉 có bất cứ sự sai xót nhầm lẫn nào. ${this.getGender()} ${name} vui lòng báo cáo qua form bên dưới giúp em nhé ❤ \n https://forms.gle/fL4XB5vqHqyzDnrP6`;
    this.baoHauKhongBietGi = [
      `🍉 có mấy ngày tuổi thôi ${this.getGender()} ${name} nên nhiều cái em vẫn còn chưa biết 😥`,
      `Vì chưa hiểu biết nhiều nên 🍉 rất cần ${this.getGender()} ${name} dạy Hấu 😁`,
      `Kiến thức là biển, làm thao mà 🍉 biết hết được hả ${this.getGender()} ${name} dễ thưn`,
      `Hic... 🍉 cũng biết một chút xíu chứ bộ 🙄`,
      `🍉 cũng đang cố gắng học ngày học đêm để phục vụ lại ${this.getGender()} ${name} mừ 😭`,
    ];
    this.blabla = `Vân vân và mấy mây 😜`;
    this.bye = [
      `Vâng. Em chào ${this.getGender()} ${name} ạ 🙌`,
      `Tạm biệt ${this.getGender()} ${name} nha... Mèo méo meo mèo meo`,
      `Si diu ờ gên ${this.getGender()} ${name} nhé 👌`,
    ];
    this.canGiup = [
      `🍉 đây... ${this.getGender()} ${name} cần em giúp gì nào?`,
      `Cứ vào thẳng luôn vấn đề đi ${this.getGender()} ${name} ơi 😎`,
      `Được giúp ${this.getGender()} ${name} là vinh dự của 🍉. A cứ hỏi đi`,
    ];
    this.chanNan = [
      `Ủa... Sao ${this.getGender()} ${name} lại chán vậy, không sao có 🍉 ở đây rồi nụ cười sẽ lại nở trôi môi ${this.getGender()} thôi 😎`,
      `Mình cứ phải vui lên ${this.getGender()} ${name} ạ. Cuộc sống mà 🤣`,
      `Nhà ${this.getGender()} ${name} có gần cổng trường Mỏ không? Nếu rảnh thì ra quán nước đối diện bắn 1 bi thuốc Lào với 🍉 cho vui 🤩`,
    ];
    this.chaoHoi = [
      `Hê hê, baaaaaby 😘`,
      `Hấu 🍉 chào ${this.getGender()} ${name} nha. Mèo méo meo mèo meo 🤷‍♀️`,
      `Chào ${this.getGender()} ${name}, em tên là Hấu 🍉`,
      `Xin chào, ${this.getGender()} ${name} cần Hấu 🍉 giúp gì nào?`,
      `Hế nhô ${this.getGender()} ${name} kute phô mai que 🧀`,
      `Ơn giời ${this.getGender()} ${name} đây rồi 😂`,
      `Ngoài kia gió thổi rì rào...Đầu tiên xin gửi lời chào thân thương 👋`,
      `Bữa nay Hấu 🍉 gửi lời chào. Cùng nhau tương tác ta càng thêm thân ❤`,
      `Konnichiwa ${this.getGender()} ${name} 😊`,
      `Có rất nhiều cách để hạnh phúc. Trực tiếp nhất chính là nhìn thấy ${this.getGender()} ${name} 👋`,
    ];
    this.chuiBay = [
      `Hmm. Hấu 🍉 không thích ai nói bậy đâu. Hấu giận đấy 🤬`,
      `Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau. Nếu ${this.getGender()} ${name} vẫn tiếp tục nói bậy thì Hấu 🍉 xin phép không phục vụ ${this.getGender()} trong 1 khoảng thời gian ạ 👿`,
      `Hmm... ${this.getGender()} ${name} cứ nói bậy như này thì 🍉 không thể nào yêu thưn được ${this.getGender()} đâu 😥`,
      `Có thể ${this.getGender()} ${name} chưa biết. Hấu 🍉 ghét nói tục lắm`,
      `Ơ... ${this.getGender()} ${name} nói thế mà cũng nói được à? Hết yêu thưn ${this.getGender()} luôn 🙄`,
    ];
    this.chuiHau = [
      `Này nhớ... ${this.getGender()} ${name} không được nói 🍉 như thế đâu 😓`,
    ];
    this.camOn = [
      `Vâng ạ. Không có gì đâu ${this.getGender()} 👌`,
      `Giúp được ${this.getGender()} là 🍉 vui lắm rồi ạ`,
      `Vâng, nếu ${this.getGender()} ${name} thương 🍉 thì hãy giới thiệu em cho mọi người nhé`,
      `Hihi... Không có gì đâu ${this.getGender()} ${name} ạ. Mấy cái này đối với 🍉 nó là muỗi thôi`,
    ];
    this.chuiHauNgu = [
      `Xì... 🍉 đáng yêu, thông minh thế này mà ${this.getGender()} ${name} nỡ lòng nói vậy 😭`,
      `Dỗi ${this.getGender()} ${name} ghê... Thôi ${this.getGender()} đừng có nói chuyện với 🍉 nữa`,
      `Cục súc thế này... Thảo nào đến giờ ${this.getGender()} ${name} vẫn chưa có người iu 💔`,
      `Huhuhu... Em vẫn đang cố gắng hoàn thiện bản thân từng ngày mà 😭`,
    ];
    this.chuaCoLichThi = `Vẫn chưa có lịch thi môn nào cả ${this.getGender()} ${name} ơi. Cứ chơi thoải mái đi ${this.getGender()} 😅`;
    this.coNhoLai = [
      `Hấu 🍉 cũng đang trí lắm chắc không nhớ nổi đâu 😁`,
      `Tạm thời Hấu 🍉 chưa nhớ ra. Lúc nào Hấu 🍉 nhớ ra sẽ bảo ${this.getGender()} ${name} sau nha... Yêu yêu ❤`,
    ];
    this.coThichKhong = [`🍉 cũng hơi hơi thích. Ahihi 😝`];
    this.coThongTinNguoiDungKhong = [
      `Hấu 🍉 không có đâu ${this.getGender()} 😘`,
      `Trong ❤ Hấu 🍉 có mỗi tên của ${this.getGender()} ${name}, như vậy có được coi là có không ${this.getGender()} 🥰`,
    ];
    this.code = [
      `🍉 không biết lập trình đâu, ${this.getGender().toLowerCase()} ${name} nha 😎`,
    ];
    this.cuoi = [
      `Sao ${this.getGender()} ${name} cười mãi thế. Da Hấu 🍉 đen mất rồi 🤣`,
      `Cười hở 10 cái răng ${this.getGender()} ${name} ơi 😍`,
    ];
    this.danDo = `Vâng ạ. Hấu 🍉 nhớ rồi`;
    this.dauXanh = `Đậu xanh đậu đỏ gì ở đây ${this.getGender()} ${name} ơi 🤣`;
    this.doaGietHau = [
      `Hahaha... Hấu 🍉 bất tử rồi, không sợ đâu 🤣`,
      `${this.getGender()} ${name} cứ tìm được Hấu 🍉 cái đã rồi muốn làm gì thì làm 😎`,
    ];
    this.dongVien = [
      `Vâng ạ. Hấu 🍉 cảm ơn, đúng là chỉ có ${this.getGender()} ${name} là hiểu em nhất trên đời 💋`,
      `Vâng ạ. Chỉ có ${this.getGender()} ${name} là quan tâm Hấu 🍉 nhất thôi 🥰`,
    ];
    this.dongY = [
      `Vâng ạ 😊`,
      `Vâng ${this.getGender()} 😃`,
      `Ô tô kê ${this.getGender()} 😄`,
      `Ô kê con tê tê ${this.getGender()} ${name} nha 😆`,
    ];
    this.dontknow = `Hấu 🍉 không biết luôn 😆`;
    this.gaHauDanhNhau = [
      `🍉 biết Muay Thái đấy nhá ${this.getGender().toLowerCase()}, em chấp nhận lời thách đấu luôn 🤩`,
    ];
    this.dadangkyroi = [
      `${this.getGender()} ${name} đã đăng ký nhận tin trước đó rồi mà. Nếu ý của ${this.getGender()} là muốn hủy đăng ký nhận tin thì ${this.getGender()} có thể chat hoặc chọn "Hủy đăng ký" từ menu rồi gửi lại cho 🍉 nhé... Nhưng mà 🍉 sẽ buồn lắm khi ${this.getGender()} làm vậy 😥`,
    ];
    this.daTungNoiMsv = [
      `Lần trước ${this.getGender()} ${name} có nói cho 🍉 mã sinh viên này rồi mà 🤣`,
      `🍉 vẫn nhớ mã sinh viên của ${this.getGender()} ${name} mà...${this.getGender()} có thể nhập lại một mã khác để xem của người khác nhé`,
    ];
    this.daHuyDangKyRoi = [
      `Xì... ${this.getGender()} ${name} đã bao giờ đăng ký nhận tin đâu mà cứ đòi hủy vậy? Ghét 🍉 đến thế à 🙄`,
    ];
    this.danglaytkb = [
      `Chờ Hấu 🍉 xíu nha... Hấu 🍉 đang lấy dữ liệu về cho ${this.getGender()} 😋`,
      `Hấu 🍉 đang lấy dữ liệu vừa nóng vừa thổi về cho ${this.getGender()} ${name} nè. Chờ xíu nhen...`,
      `Ủm ba la xì bùa... hãy xem phép thuật của 🍉 đây`,
    ];
    this.dangLayLichThi = [
      `Hấu 🍉 đang lấy lịch thi... ${this.getGender()} ${name} chờ xíu nha 😘`,
    ];
    this.dangLayDiem = [
      `🍉 đang lấy điểm thi... ${this.getGender()} ${name} chờ xíu nha 😎`,
    ];
    this.dangLayTinTuc = [
      `${this.getGender()} ${name} chờ 🍉 xíu nha... Em đang chạy đi lấy tin về cho ${this.getGender().toLowerCase()} đây 🥵`,
    ];
    this.gaTinh = [
      `Yêu luôn chứ Hấu 🍉 có ngán gì đâu chớ 😘`,
      `Chỉ cần ${this.getGender()} ${name} nói yêu. Hấu 🍉 sẽ bám theo ${this.getGender()} suốt đời 😍`,
      `Trăng lên đỉnh núi trăng tà. ${this.getGender()} yêu Hấu 🍉 thật hay là yêu chơi? 😍`,
    ];
    this.daluumsv = [
      `🍉 đã nhớ Mã sinh viên của ${this.getGender()} ${name} rồi nha. Ahihi, yên tâm 🍉 sẽ không bao giờ quên được đâu. Lúc nào ${this.getGender()} cần xem lịch học thì cứ nhắn cho 🍉 biết nhé`,
    ];
    this.khongPhaiThi = [
      `Hôm nay ${this.getGender()} ${name} không phải thi môn nào ạ 😃`,
    ];
    this.luaChonTinhNang = [
      `🍉 xin mời ${this.getGender().toLowerCase()} ${name} lựa chọn 1 trong các tính năng bên dưới:`,
    ];
    this.hauAnComChua = [
      `Ui giời. Dăm 3 cái hột cơm ý mà ${this.getGender()}, nhắn tin với ${this.getGender()} ${name} quan trọng hơn ❤`,
      `Hấu 🍉 đang giảm cân ${this.getGender()} ${name} ơi, hôm nay em không ăn cơm 🥗`,
    ];
    this.hauAnDuocKhong = [
      `Huhu... 🍉 là để yêu thương nhé ${this.getGender()} ${name}, không có ăn được đâu 💔`,
      `Mệt ${this.getGender()} ${name} ghê... 🍉 là hàng li mít tựt nha, hông có ăn được đâu 😋`,
      `${this.getGender()} ${name} ăn 🍉 xong thì ai sẽ là người nhắc lịch học hàng ngày giúp ${this.getGender()} đây 🙄`,
    ];
    this.hauAnGi = `${this.getGender()} ${name} ăn gì thì Hấu 🍉 cũng ăn giống thế mà 😄`;
    this.hauBietGi = [
      `Hiện tại 🍉 chỉ có thể làm được những thứ sau:\n✔ Xem lịch học\n✔ Xem lịch học ngày mai\n✔ Xem lịch thi\n✔ Tâm sự\n✔ Thông báo lịch học hàng ngày`,
    ];
    this.hauBietHatKhong = [
      `🍉 hát hơi bị hay đó, ${this.getGender().toLowerCase()} ${name} có muốn nghe em hát không nè 🤣`,
    ];
    this.hauBietNoiTiengAnhKhong = [
      `Oát i giò nếm? ${this.getGender().toLowerCase()} thấy 🍉 hấu phát âm có chuẩn không 😜`,
    ];
    this.hauCoPhaiRobotKhong = [
      `Hấu là người mà ${this.getGender().toLowerCase()}, chứ trên đời này làm gì có con Robot nào mà dễ thưn được như em chứ 😁`,
    ];
    this.hauCoTheLamGi = [
      `🍉 là một robot xinh gái siêu cấp vô địch được Boss Dương Nam Trường tạo ra vào ngày 08/07/2020 với nhiệm vụ nhắc nhở lịch học cho các anh em HUMGer và cũng có thể tâm sự với anh em nếu cần 😘`,
      `Em tên là Hấu Hấu 🍉 gi gỉ gì gi cái gì em cũng làm được`,
      `🍉 có thể làm bất cứ điều gì miễn là ${this.getGender()} ${name} vui ❤`,
      `🍉 làm được nhiều sờ kiu lắm nha: Nhắc lịch học, tâm sự, tham quan trai xinh gái đẹp HUMG, xem điểm thi, xem lịch thi, xem điểm TB tích lũy, dự báo thời tiết, tìm info nam thanh nữ tú HUMG... vân vân và mây mây. Nhưng phải 1 vài bữa nữa 🍉 mới được dạy mấy skill đó 😆`,
    ];
    this.hauGay = [`Ơ... 🍉 là con gái mà, làm sao mà gay được chớ 😋`];
    this.hauHocTruongNao = [
      `Tất nhiên là 🍉 học trường Đại học Mỏ - Địa chất Hà Nội rồi ❤`,
    ];
    this.hauKhoeKhong = [
      `Dạ. 🍉 cảm ơn ${this.getGender().toLowerCase()} đã hỏi thăm ạ. Em vẫn ổn 😢`,
    ];
    this.hauLuoi = [`Xí... 🍉 hơi bị chăm đấy nhé 🙃`];
    this.hauODau = ['Dạ. 🍉 ở Việt Nam ạ, anh em mình cùng quê mà 😍'];
    this.hauSayRuou = [
      `Haha, chăc vậy thật ${this.getGender().toLowerCase()} ạ. 🍉 thấy người cứ nâng nâng 🎈`,
    ];
    this.huyDangKyRoiMa = [
      `${this.getGender()} ${name} đã hủy đăng ký rồi mà, hủy gì mà hủy lắm vậy. ${this.getGender()} hết thương 🍉 rồi à?`,
    ];
    this.notInfo = [
      `${this.getGender()} ${name} vui lòng cung cấp Mã sinh viên cho 🍉 trước khi muốn đăng ký nhận tin hàng ngày nhé`,
    ];
    this.notSub = [
      `${this.getGender()} ${name} đã đăng ký cái cái gì đâu mà đòi hủy vậy. Hic 😥`,
    ];
    this.notrain = [
      // `Xin lỗi ${this.getGender()} ${name} nhiều lắm. Hấu Hấu 🍉 còn nhỏ, chưa được dạy nhiều nên không biết trả lời câu này như nào 😥`,
      // 'Câu này hình như em chưa được dạy. Ahihi 😁',
      `Ui chu choa ${this.getGender()} ${name} ơi, tự nhiên mắt Hấu 🍉 mờ quá không đọc được chữ 🙄`,
      `Câu này khó quá, 🍉 bỏ qua được không ${this.getGender()} ${name} 🤣`,
      `Nãy giờ nói chuyện với ${this.getGender()} ${name}, 🍉 say quá nên không biết trả lời làm sao`,
      `Câu này để lúc khác 🍉 trả lời ${this.getGender()} ${name} được không? 🍉 quên bài rồi 😃`,
      `Không được rồi! 🍉 phải đi mua trà sữa rồi, lát em về thì em trả lời lại ${this.getGender().toLowerCase()} sau nhé 😃`,
      `Bao giờ Việt Nam vô địch Wolrdcup, em sẽ trả lời câu này 😁`,
      `Để em một ít thời gian để suy nghĩ và cân nhắc, sau đó sẽ trả lời ${this.getGender().toLowerCase()} nhé 😅`,
      `Cho 🍉 thời gian suy nghĩ, vì với em ${this.getGender().toLowerCase()} là một phần rất quan trọng`,
      `Hihi, Để 🍉 suy nghĩ đã nhé. Có gì tối mai em nhắn tin cho 😝`,
      `🍉 không giỏi việc này, ${this.getGender().toLowerCase()} nhờ chị Google thử xem?`,
      `Tự nhiên 🍉 bị đau bụng… nên không trả lời được ${this.getGender().toLowerCase()} rồi 😓`,
    ];
    this.removeSub = [
      `Hủy thành công! Khi nào nhớ 🍉 thì hãy đăng ký nhận tin lại nha 😭`,
      `Hơ hơ... ${this.getGender()} ${name} vừa ấn nhầm nút hủy à? ${this.getGender()} đăng ký lại ngay đi nào 😝`,
    ];
    this.tamSu = [
      `Hấu 🍉 luôn ở đây để lắng nghe và thấu hiểu ${this.getGender().toLowerCase()} ${name}. ${this.getGender()} cứ trả lòng hết đi ạ 😁`,
      `Nếu ngoài kia nhiều bão tố, thì về đây với 🍉. ${this.getGender()} ${name} có tâm tư gì thì cứ nói cho em nghe nhé 😂`,
      `Say men rượu ngày mai sẽ tỉnh
    say men tình mãi mãi vẫn còn say. ${this.getGender()} ${name} có chuyện gì cần một người bầu bạn thì 🍉 luôn sẵn lòng ạ 💋`,
    ];
    this.thatKhong = [
      `Thật chứ. 🍉 không biết nói dối bao giờ`,
      `${this.getGender()} ${name} phải tin em chứ 😁`,
    ];
    this.thayLeXuanThanh = [
      `Hấu 🍉 biết chứ, trước em hay sang nhà thầy nhậu mà 😎`,
      `Thầy Thành trưởng phòng Công tác Chính trị - Sinh viên chứ gì? Ở trường Mỏ ai mà không nghe danh chứ 😊`,
    ];
    this.thaydoimsv = [
      `❗ Chú ý: ${this.getGender()} ${name} vừa thay đổi mã sinh viên của mình.`,
    ];
    this.test = [
      `${this.getGender()} ${name} test gì thế? Làm thật luôn đi ${this.getGender()} ơi 😆`,
      `Có những thứ ta không nên thử dưới mọi hình thức dù chỉ 1 lần ${this.getGender()} nhé 🥰`,
    ];
    this.xemtkb = [
      `Đưa mã sinh viên của ${this.getGender()} ${name} cho Hấu 🍉 nào?`,
      `Hic... ${this.getGender()} ${name} không đưa Mã sinh viên, 🍉 biết xem kiểu gì đây?`,
    ];
    this.sub = [
      `Cảm ơn ${this.getGender()} ${name} đã tin tưởng 🍉. Từ giờ trở đi, mỗi sáng thức dậy 🍉 sẽ là người đầu tiên nhắn tin cho ${this.getGender()}`,
      `Yeah... 🍉 cảm ơn ${this.getGender()} ${name} đã đăng ký nhận tin nhé. Từ giờ trở đi cứ 5h sáng hàng ngày 🍉 lại được nhắn tin cho ${this.getGender()} rồi 💋`,
    ];
    this.khongKhaDung = `Hiện tại 🍉 chưa làm được cái này. Nhưng ${this.getGender()} ${name} ơi, ${this.getGender()} cứ yên tâm, Boss của 🍉 siêu cấp lắm, một vài hôm nữa em sẽ làm được ngay. Hãy tin 🍉`;
    this.err = [
      `Huhu... 🍉 xin lỗi ${this.getGender()} ${name} nhé. Có vẻ như trang datao đang lỗi hay sao ý nên em không lấy được điểm về. ${this.getGender()} thử lại phát nữa xem sao 🤣`,
    ];
  }
  getGender() {
    if (this.gender === 'male') return 'Anh';
    return 'Chị';
  }
}

module.exports = Text;
