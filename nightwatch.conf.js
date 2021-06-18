module.exports = {
  src_folders: ['tests'],
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // args: ['headless', 'no-sandbox', 'disable-gpu']
        }
      }
      // firefox: {
      //     desiredCapabilities: {
      //         browserName: 'firefox'
      //     },
      //     webdriver: { server_path: require('geckodriver').path }
      // }
    }
  }
};
