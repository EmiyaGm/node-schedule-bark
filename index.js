const schedule = require('node-schedule')
const http = require('http')
const url = 'http://127.0.0.1:8080'

const scheduleCronstyle = () => {
  // 每日十点提现健身
  schedule.scheduleJob('0 0 22 * * *', () => {  // 时间相关设置参考 https://www.jianshu.com/p/8d303ff8fdeb
    http
      .get(
        `${url}/3rfdbN72TLvuXRCdL8jWk/该健身了`,
        (res) => {
          console.log(`Got response: ${res.statusCode}`)
          // consume response body
          res.resume()
        },
      )
      .on('error', (e) => {
        console.log(`Got error: ${e.message}`)
      })
  })
  // 2021年6月2日提醒抢电影节的票
  schedule.scheduleJob('0 0 0 2 6 * 2021', () => {  // 时间相关设置参考 https://www.jianshu.com/p/8d303ff8fdeb
    http
      .get(
        `${url}/3rfdbN72TLvuXRCdL8jWk/该抢电影节票了`,
        (res) => {
          console.log(`Got response: ${res.statusCode}`)
          // consume response body
          res.resume()
        },
      )
      .on('error', (e) => {
        console.log(`Got error: ${e.message}`)
      })
  })
}

scheduleCronstyle()
