import Page from "./page";

class SearchPage extends Page{

    //GET CONSENT BUTTON
    public get consentBtn () {
        return $('.modal-footer .agree-consent--all');
    }

    //GET INPUT FIELD
    public get inputField(){
        return $('#searchInput');
    }

    //GET SEARCH BUTTON
    public get searchBtn(){
        return $('.search-button');
    }

    //GET EXPECTED RESULT 1

    public get firstResult(){
       return $('=Dr. Peter Test');;
    }

    //GET EXPECTED RESULT 2

    public get secondResult(){
        return $('=Dr. Peter Test ABD');
    }

    //OPEPN URL
    public async open(){
        return await super.open('cd-de');
    }

    //ACCEPT CONSENT
    public async acceptConsent(){
        (await this.consentBtn).click();
    }

    //PUT SEARCH STRING
    public async setSearchText(){
        (await this.inputField).setValue('Peter Test');
    }

    //PERFORM SEARCH
    public async performSearch(){
        await this.searchBtn.click();
    }

    //Mathe Expected Results

    public async matchFirstResults(){
        return await this.firstResult;
    }

    public async matchSecondResults(){
        return await this.secondResult;
    }

}

export default new SearchPage();