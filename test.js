const schedule = require('node-schedule')
const http = require('http')
const url = ''

const scheduleCronstyle = () => {
  // 每日十点提现健身
  schedule.scheduleJob('30 * * * * *', () => {  // 时间相关设置参考 https://www.jianshu.com/p/8d303ff8fdeb
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
}

scheduleCronstyle()
