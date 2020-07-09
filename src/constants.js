class Text {
  constructor(name, gender = null) {
    this.gender = gender;
    this.aoTuong = [
      `Hahaha... ${this.getGender()} ${name} đang mơ à 🤣`,
      `Dạ. Chắc vậy ${this.getGender()} ạ... 😂`,
      `${this.getGender()} ${name} có bạn tên là "Ảo tưởng" phải không? Ahihi 😋`,
    ];
    this.baoCaoMsv = `Nếu 🍉 có bất cứ sự sai xót nhầm lẫn nào. ${this.getGender()} ${name} vui lòng báo cáo qua form bên dưới giúp em nhé ❤ \n https://forms.gle/fL4XB5vqHqyzDnrP6`;
    this.bye = [
      `Vâng. Em chào ${this.getGender()} ${name} ạ 🙌`,
      `Tạm biệt ${this.getGender()} ${name} nha... Mèo méo meo mèo meo`,
      `Si diu ờ gên ${this.getGender()} ${name} nhé 👌`,
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
    ];
    this.daluumsv = [
      `🍉 đã nhớ Mã sinh viên của ${this.getGender()} ${name} rồi nha. Ahihi, yên tâm 🍉 sẽ không bao giờ quên được đâu. Lúc nào ${this.getGender()} cần xem lịch học thì cứ nhắn cho 🍉 biết nhé`,
    ];
    this.hauAnDuocKhong = [
      `Huhu... 🍉 là để yêu thương nhé ${this.getGender()} ${name}, không có ăn được đâu 💔`,
    ];
    this.hauCoTheLamGi = [
      `🍉 là một robot xinh gái siêu cấp vô địch được Boss Dương Nam Trường tạo ra vào ngày 08/07/2020 với nhiệm vụ nhắc nhở lịch học cho các anh em HUMGer và cũng có thể tâm sự với anh em nếu cần 😘`,
    ];
    this.huyDangKyRoiMa = [
      `${this.getGender()} ${name} đã hủy đăng ký rồi mà, hủy gì mà hủy lắm vậy. ${this.getGender()} hết thương 🍉 rồi à?`,
    ];
    this.notInfo = [
      `${this.getGender()} ${name} vui lòng cung cấp Mã sinh viên cho 🍉 trước khi muốn đăng ký nhận tin hàng ngày nhé`,
    ];
    this.notrain = [
      `Xin lỗi ${this.getGender()} ${name} nhiều lắm. Hấu Hấu 🍉 còn nhỏ, chưa được Boss Trường dạy nhiều nên không biết trả lời câu này như nào 😥`,
      'Câu này hình như em chưa được dạy. Ahihi 😁',
      `Ui chu choa ${this.getGender()} ${name} ơi, tự nhiên mắt Hấu 🍉 mờ quá không đọc được chữ 🙄`,
    ];
    this.removeSub = [
      `Hủy thành công! Khi nào nhớ 🍉 thì hãy đăng ký nhận tin lại nha 😭`,
    ];
    this.thatKhong = [
      `Thật chứ. 🍉 không biết nói dối bao giờ`,
      `${this.getGender()} ${name} phải tin em chứ 😁`,
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
    ];
    this.sub = [
      `Cảm ơn ${this.getGender()} ${name} đã tin tưởng 🍉. Từ giờ trở đi, mỗi sáng thức dậy 🍉 sẽ là người đầu tiên nhắn tin cho ${this.getGender()}`,
    ];
    this.khongKhaDung = `Hiện tại 🍉 chưa làm được cái này. Nhưng ${this.getGender()} ${name} ơi, ${this.getGender()} cứ yên tâm, Boss của 🍉 siêu cấp lắm, một vài hôm nữa em sẽ làm được ngay. Hãy tin 🍉`;
  }
  getGender() {
    if (this.gender === 'male') return 'anh';
    return 'chị';
  }
}

module.exports = Text;
