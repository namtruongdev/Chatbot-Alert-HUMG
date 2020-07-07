const getHomePage = async (req, res) => {
  res.send('<h1>EM ĐANG CHẠY RỒI NHÉ BÀ CON!</h1>');
};

module.exports = { getHomePage: getHomePage };
