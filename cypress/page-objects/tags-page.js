export class GhostTester{
    constructor(email, password, startUrl){
        this.email = email;
        this.password = password;
        this.startUrl = startUrl;
        this.stepCounter = 0;
    }

    resetStepCounter(){
        this.stepCounter = 0;
    }

    setScenario(newScenario){
        this.scenario = newScenario;
    }

    initNavigation(){
        cy.visit(this.startUrl);
        cy.wait(1000);//Delay to about that tests fails
    }

    logIn(){
        cy.get('input[name="identification"]').focus().type(this.email);
        cy.get('input[name="password"]').focus().type(this.password);
        cy.get('button[type="submit"]').click();
    }

    selectTagsFromManageMenu(){
        cy.get('a[href="#/tags/"]').first().click({force: true});
    }

    selectPostsfromManageMenu(){
        cy.get('a[href="#/posts/"]').first().click({force: true});
    }

    selectPagesFromManageMenu(){
        cy.get('a[href="#/pages/"]').first().click({force: true});
    }

    createAPost(postTitle){
        cy.get('a[href="#/editor/post/"]').first().click({force: true});
        cy.get('textarea[placeholder="Post Title"]').focus().type(postTitle);
        this.takeScreenshot();
        cy.get('div[data-placeholder="Begin writing your post..."]').focus();
    }

    createAPage(pageTitle){
        cy.get('a[href="#/editor/page/"]').first().click({force: true});
        cy.get('textarea[placeholder="Page Title"]').focus().type(pageTitle);
        this.takeScreenshot();
        cy.get('div[data-placeholder="Begin writing your page..."]').focus();
    }

    selectAPostWithItsTitle(postTitle){
        cy.contains(postTitle).click({force: true});
    }

    selectAPageWithItsTitle(pageTitle){
        cy.contains(pageTitle).click({force: true});
    }

    publishAPost(){
        cy.get('div.gh-publishmenu-trigger').click({force: true});
        cy.get('button.gh-publishmenu-button').click();
    }

    associatedTagToPost(tagName){
        cy.get('button.post-settings').click();
        cy.get('#tag-input').focus().type(tagName + '{enter}');
        this.takeScreenshot();
        cy.get('button.close').click();
    }

    detachLastTagFromPost(){
        cy.get('button.post-settings').click();
        cy.get('#tag-input').focus().type('{backspace}');
        this.takeScreenshot();
        cy.get('button.close').click();
    }

    checkTagDontHavePostsRelated(tagSlug){
        cy.get(`a.gh-tag-list-posts-count[href="#/tags/${tagSlug}/"] > span`).should('have.text','0 posts');
        this.takeScreenshot();
    }


    createNewTag(tagName, tagSlug,tagDescription){
        cy.get('a[href="#/tags/new/"]').click({force: true});
        cy.get('#tag-name').focus().type(tagName);
        cy.get('#tag-slug').focus().clear().type(tagSlug.toLowerCase());
        cy.get('#tag-description').focus().type(tagDescription);
        this.takeScreenshot();
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    }

    removeATag(tagSlug){
        cy.get(`a[href="#/tags/${tagSlug.toLowerCase()}/"]`).first().click({force: true});
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click()
        this.takeScreenshot();
    }

    validateTagAssociation(tagName, postTitle){
        cy.get(`a[title="List posts tagged with '${tagName}'"]`).click({force: true});
        cy.contains(postTitle);
        this.takeScreenshot();
    }

    validateTagAssociationWithPage(tagName){
        cy.get(`a[title="List posts tagged with '${tagName}'"] > span`).should('have.text','1 post');
        this.takeScreenshot();
    }

    removePost(){
        cy.get('button.post-settings').click();
        cy.get('button.settings-menu-delete-button').click();
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first().click();
        this.takeScreenshot();
    }

    takeScreenshot(){
        this.stepCounter++;
        cy.screenshot(`${this.scenario}_${this.stepCounter}`);
    }
}
