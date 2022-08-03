import searchPage from "../pageobjects/search.page";

describe('', async() => {
    it('Navigate to search page', async() => {
        searchPage.open();
    });

    it('Accept consent', async() => {
        searchPage.acceptConsent();
    });

    it('Input search string', async() => {
        searchPage.setSearchText();
        await browser.pause(3000);
    });

    it('Click on search button', async() => {
        searchPage.performSearch();
        await browser.pause(3000);
    });

    it('Expected result is: Dr. Peter Test', async() => {
        await expect(searchPage.matchFirstResults()).toHaveTextContaining('Dr. Peter Test');
    });

    it('Expected result is: Dr. Peter Test ABD', async() => {
        await expect(searchPage.matchSecondResults()).toHaveTextContaining('Dr. Peter Test ABD');
    });
});