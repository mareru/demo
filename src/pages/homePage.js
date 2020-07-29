class HomePage {

    get phoneNumber() {
        return $('.shop-phone');
    }

    get signInButton() {
        return $('.login');
    }

    visit(phoneNumber) {
        browser.url('/');
        this.phoneNumber.isDisplayed().should.be.true;
        this.phoneNumber.getText().includes(phoneNumber);
    }

    clickSignInButton() {
        console.log(browser.capabilities);
        this.signInButton.waitForDisplayed();
        this.signInButton.isDisplayed().should.be.true;
        this.signInButton.waitForClickable();
        this.signInButton.click();
    }

}

export default new HomePage();
