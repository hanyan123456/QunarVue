
if (process.env.NODE_ENV !== 'production') {
  const Mock = require('mockjs');
  const data = require('./data.json');
  const city = require('./city.json');


  Mock.mock('/home/sliderList', {
    code: 0,
    codeMsg: '成功',
    data: data.sliderList
  })

  Mock.mock('/home/recommendList', {
    code: 0,
    codeMsg: '成功',
    data: data.recommendList
  })

  Mock.mock('/home/iconList', {
    code: 0,
    codeMsg: '成功',
    data: data.iconList
  })
  Mock.mock('/city/cityList', {
    code: 0,
    codeMsg: '成功',
    data: city.cityList
  })

}
