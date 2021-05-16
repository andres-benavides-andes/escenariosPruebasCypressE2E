/// <reference types="cypress" />
import {GhostTester} from '../page-object/tags-page';
import config from '../config'

context('Checking tag association functionality...', () => {

    let testerObject = new GhostTester(
        config.email,
        config.password,
        "http://localhost:2368/ghost/#/signin",
        new Date().toISOString().replace(/:/g,".")
    );

    describe('Scenario 1: Associate a tag to a post', ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle = 'My testting';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario("scenario1");
        });
    
        it('(Before) Create a tag', () => {
            testerObject.setStep(1);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.setStep(2);
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });
    
        it('Associate a tag to a draft post and publish it', () => {
            testerObject.setStep(3);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });
    
        it('Check the tag association', ()=>{
            testerObject.setStep(4);
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle);
        });
    
        it('(After) Delete post', () =>{
            testerObject.setStep(5);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.setStep(6);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    });
    
    describe('Scenario 2: Associate 3 tags to a post', ()=> {
        let testTags = ['testtag1', 'testtag2', 'testtag3'];
        let tagSlugs = testTags;
        let testTagDescriptions = ['Description for testtag-1', 'Description for testtag-2', 'Description for testtag-3'];
        let postTitle = 'My testting 2'

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario("scenario2");
        });

        it('(Before) Create tag 1', () => {
            testerObject.setStep(1);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[0],tagSlugs[0],testTagDescriptions[0]);
        });

        it('(Before) Create tag 2', () => {
            testerObject.setStep(2);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[1],tagSlugs[1],testTagDescriptions[1]);
        });

        it('(Before) Create tag 3', () => {
            testerObject.setStep(3);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[2],tagSlugs[2],testTagDescriptions[2]);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.setStep(4);
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });

        it('Associate multiples tags to a draft post and publish it', () => {
            testerObject.setStep(5);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            for(let i = 0; i < testTags.length; i++){
                testerObject.associatedTagToPost(testTags[i]);
            }
            testerObject.publishAPost();
        });

        it('Check tags association', ()=>{
            testerObject.setStep(6);
            for(let i = 0; i < testTags.length; i++){
                testerObject.selectTagsFromManageMenu();
                testerObject.validateTagAssociation(testTags[i], postTitle);
            }
        });

        it('(After) Delete post', () =>{
            testerObject.setStep(7);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag 1', () => {
            testerObject.setStep(8);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[0]);
        });

        it('(After) Delete tag 2', () => {
            testerObject.setStep(9);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[1]);
        });

        it('(After) Delete tag 3', () => {
            testerObject.setStep(10);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[2]);
        });

    });
    
    describe('Scenario 3: Detach a tag from a post', () => {
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle = 'My Testing';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario("scenario3");
        });
    
        it('(Before) Create a tag', () => {
            testerObject.setStep(1);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.setStep(2);
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });
    
        it('(Before) Associate a tag to a draft post and publish it', () => {
            testerObject.setStep(3);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Detach tag from the post', ()=>{
            testerObject.setStep(4);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.detachLastTagFromPost();
            testerObject.publishAPost();
        });

        it('Check that the tag is no asosiated with the post', ()=>{
            testerObject.setStep(5);
            testerObject.selectTagsFromManageMenu();
            testerObject.checkTagDontHavePostsRelated(tagSlug);
        });

        it('(After) Delete post', () =>{
            testerObject.setStep(6);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.setStep(7);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    });

    describe('Scenario 4: Assosiate a tag to 2 posts', ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle1 = 'My First Post';
        let postTitle2 = 'My Second Post';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario("scenario4");
        });
    
        it('(Before) Create a tag', () => {
            testerObject.setStep(1);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create the first draft post', ()=>{
            testerObject.setStep(2);
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle1);
        });

        it('(Before) Create the second draft post', ()=>{
            testerObject.setStep(3);
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle2);
        });

        it('Associate a tag to the first draft post and publish it', () => {
            testerObject.setStep(4);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle1);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Associate a tag to the second draft post and publish it', () => {
            testerObject.setStep(5);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle2);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Validate that the tag is asociated with the two posts', () => {
            testerObject.setStep(6);
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle1);
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle2);         
        });

        it('(After) Delete post 1', () =>{
            testerObject.setStep(7);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle1);
            testerObject.removePost();
        });

        it('(After) Delete post 2', () =>{
            testerObject.setStep(8);
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle2);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.setStep(9);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });

    });

    describe('Scenario 5: Assosiate a tag to a pages', ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let pageName = 'My new Page';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario("scenario5");
        });
    
        it('(Before) Create a tag', () => {
            testerObject.setStep(1);
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });

        it('(Before) Create a page', () =>{
            testerObject.setStep(2);
            testerObject.selectPagesFromManageMenu();
            testerObject.createAPage(pageName);
        });

        it('Associate a tag to the page', () => {
            testerObject.setStep(3);
            testerObject.selectPagesFromManageMenu();
            testerObject.selectAPageWithItsTitle(pageName);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Check the tag association', ()=>{
            testerObject.setStep(4);
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociationWithPage(testTag);
        });

        it('(After) Delete page', () => {
            testerObject.setStep(5);
            testerObject.selectPagesFromManageMenu();
            testerObject.selectAPageWithItsTitle(pageName);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.setStep(6);
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    })
})