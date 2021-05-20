const schedule = require('node-schedule')
const http = require('http')

const scheduleCronstyle = () => {
  //每分钟的第30秒定时执行一次:
  schedule.scheduleJob('0 0 22 * * *', () => {  // 时间相关设置参考 https://www.jianshu.com/p/8d303ff8fdeb
    http
      .get(
        'http://127.0.0.1:8080/3rfdbN72TLvuXRCdL8jWk/该健身了',
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
