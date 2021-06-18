module.exports = {
  'Onsen Button Input Toolbar Tabber Tab  must be used': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .verify.elementPresent('ons-input')
      .verify.elementPresent('ons-button')
      .verify.elementPresent('ons-toolbar')
      .verify.elementPresent('ons-tabbar')
      .verify.elementPresent('ons-tab')
      .end();
  },

  'On initail render login component': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .verify.containsText('ons-toolbar > div', 'Login')
      .verify.containsText('ons-button', 'Login')
      .click('ons-button')
      .assert.cssClassPresent('ons-tab:nth-of-type(1)', 'tabbar__item active')
      .assert.cssClassPresent('ons-tab:nth-of-type(2)', 'tabbar__item')
      .verify.containsText('ons-tab:nth-of-type(1) > button > div', 'Login')
      .verify.containsText('ons-tab:nth-of-type(2) > button > div', 'Register')
      .end();
  },

  'On Successfully Registered': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .verify.containsText('ons-toolbar > div', 'Login')
      .click('ons-tab:nth-of-type(2) > button')
      .verify.containsText('ons-toolbar > div', 'Register')
      .assert.cssClassPresent('ons-tab:nth-of-type(1)', 'tabbar__item')
      .assert.cssClassPresent('ons-tab:nth-of-type(2)', 'tabbar__item active')
      .setValue('ons-input[name=userName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=password] > input:nth-of-type(1)', '123')
      .setValue('ons-input[name=confirmPassword] > input:nth-of-type(1)', '123')
      .click('#Register')
      .verify.containsText('ons-toolbar > div', 'Login')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('Successfully Registered')
        );
        console.log(
          result.value.toString().includes('Successfully Registered')
        );
        console.log(result.value.toString());
        this.end();
      })

      .end();
  },

  'Empty fields': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .verify.containsText('ons-toolbar > div', 'Login')
      .click('ons-tab:nth-of-type(2) > button')
      .verify.containsText('ons-toolbar > div', 'Register')
      .assert.cssClassPresent('ons-tab:nth-of-type(1)', 'tabbar__item')
      .assert.cssClassPresent('ons-tab:nth-of-type(2)', 'tabbar__item active')
      .setValue('ons-input[name=userName] > input:nth-of-type(1)', 'Thanu')
      .click('#Register')
      .verify.containsText('ons-toolbar > div', 'Register')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('Empty fields or Password mismatch')
        );
        console.log(result.value.toString());
        this.end();
      })
      .end();
  },

  'Password mismatch': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .verify.containsText('ons-toolbar > div', 'Login')
      .click('ons-tab:nth-of-type(2) > button')
      .verify.containsText('ons-toolbar > div', 'Register')
      .setValue('ons-input[name=userName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=password] > input:nth-of-type(1)', '123')
      .setValue(
        'ons-input[name=confirmPassword] > input:nth-of-type(1)',
        '1233'
      )
      .click('#Register')
      .verify.containsText('ons-toolbar > div', 'Register')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('Empty fields or Password mismatch')
        );
        this.end();
      })
      .end();
  },

  'On Successfully Login': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .click('ons-tab:nth-of-type(2) > button')
      .verify.containsText('ons-toolbar > div', 'Register')
      .setValue('ons-input[name=userName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=password] > input:nth-of-type(1)', '123')
      .setValue('ons-input[name=confirmPassword] > input:nth-of-type(1)', '123')
      .click('#Register')
      .verify.containsText('ons-toolbar > div', 'Login')
      .verify.visible('ons-alert-dialog')
      .click('ons-alert-dialog-button')
      .waitForElementNotPresent('ons-alert-dialog')
      .setValue('ons-input[name=loginUserName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=loginPassword] > input:nth-of-type(1)', '123')
      .click('#Login')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('You are now signed in!')
        );
        this.end();
      })
      .end();
  },

  'Empty login fields': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .click('#Login')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('Username or password incorrect!')
        );
        this.end();
      })
      .end();
  },

  'On incorrect password': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .click('ons-tab:nth-of-type(2) > button')
      .verify.containsText('ons-toolbar > div', 'Register')
      .setValue('ons-input[name=userName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=password] > input:nth-of-type(1)', '123')
      .setValue('ons-input[name=confirmPassword] > input:nth-of-type(1)', '123')
      .click('#Register')
      .verify.containsText('ons-toolbar > div', 'Login')
      .verify.visible('ons-alert-dialog')
      .click('ons-alert-dialog-button')
      .waitForElementNotPresent('ons-alert-dialog')
      .setValue('ons-input[name=loginUserName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=loginPassword] > input:nth-of-type(1)', '12')
      .click('#Login')
      .verify.visible('ons-alert-dialog')
      .getAttribute('.alert-dialog-content', 'textContent', function (result) {
        this.verify.ok(
          result.value.toString().includes('Username or password incorrect!')
        );
        this.end();
      })
      .end();
  },

  'Clear the input fields when tabber swtich': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body')
      .setValue('ons-input[name=loginUserName] > input:nth-of-type(1)', 'Thanu')
      .setValue('ons-input[name=loginPassword] > input:nth-of-type(1)', '123')
      .click('ons-tab:nth-of-type(2) > button')
      .click('ons-tab:nth-of-type(1) > button')
      .assert.value('ons-input[name=loginUserName]', '')
      .assert.value('ons-input[name=loginPassword]', '');
  }
};
