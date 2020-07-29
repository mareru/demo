class LoginPage {

    get loginButton() {
        return $('#SubmitLogin > span');
    }

    get emailField() {
        return $('#email');
    }

    get passwordField() {
        return $('#passwd');
    }

    verify() {
        this.loginButton.isDisplayed().should.be.true;
    }

    enterCredentials(username, password) {
        this.emailField.waitForDisplayed();
        this.emailField.clearValue();
        this.emailField.setValue(username);

        this.passwordField.waitForDisplayed();
        this.passwordField.clearValue();
        this.passwordField.setValue(password);
    }

    clickLoginButton() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }
}

export default new LoginPage();
