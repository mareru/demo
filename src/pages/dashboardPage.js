class DashboardPage {

    get loggedInUser() {
        return $('.account > span');
    }

    verify(user) {
        this.loggedInUser.getText().includes(user);
    }

}

export default new DashboardPage();
