/// <reference types="cypress" />
import {GhostTester} from '../page-objects/tags-page';
import config from '../config'

context('Checking tag association functionality...', () => {

    let testerObject = new GhostTester(
        config.email,
        config.password,
        "http://localhost:2368/ghost/#/signin",
    );

    let $scenari1 = "Associate a tag to a post";
    let $scenari2 = "Associate 3 tags to a post";
    let $scenari3 = "Detach a tag from a post";
    let $scenari4 = "Assosiate a tag to 2 posts";
    let $scenari5 = "Assosiate a tag to a page";

    describe(`Scenario 1: ${$scenari1}`, ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle = 'My testting';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario($scenari1);
        });
    
        it('(Before) Create a tag', () => {
            testerObject.resetStepCounter();
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });
    
        it('Associate a tag to a draft post and publish it', () => {
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });
    
        it('Check the tag association', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle);
        });
    
        it('(After) Delete post', () =>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    });
    
    describe(`Scenario 2: ${$scenari2}`, ()=> {
        let testTags = ['01mytesttag', '02mytesttag', '03mytesttag'];
        let tagSlugs = testTags;
        let testTagDescriptions = ['Description for testtag-1', 'Description for testtag-2', 'Description for testtag-3'];
        let postTitle = 'My testting 2'

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario($scenari2);
        });

        it('(Before) Create tag 1', () => {
            testerObject.resetStepCounter();
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[0],tagSlugs[0],testTagDescriptions[0]);
        });

        it('(Before) Create tag 2', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[1],tagSlugs[1],testTagDescriptions[1]);
        });

        it('(Before) Create tag 3', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTags[2],tagSlugs[2],testTagDescriptions[2]);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });

        it('Associate multiples tags to a draft post and publish it', () => {
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            for(let i = 0; i < testTags.length; i++){
                testerObject.associatedTagToPost(testTags[i]);
            }
            testerObject.publishAPost();
        });

        it('Check tags association', ()=>{
            for(let i = 0; i < testTags.length; i++){
                testerObject.selectTagsFromManageMenu();
                testerObject.validateTagAssociation(testTags[i], postTitle);
            }
        });

        it('(After) Delete post', () =>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag 1', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[0]);
        });

        it('(After) Delete tag 2', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[1]);
        });

        it('(After) Delete tag 3', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlugs[2]);
        });

    });
    
    describe(`Scenario 3: ${$scenari3}`, () => {
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle = 'My Testing';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario($scenari3);
        });
    
        it('(Before) Create a tag', () => {
            testerObject.resetStepCounter();
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create a draft post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle);
        });
    
        it('(Before) Associate a tag to a draft post and publish it', () => {
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Detach tag from the post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.detachLastTagFromPost();
            testerObject.publishAPost();
        });

        it('Check that the tag is no asosiated with the post', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.checkTagDontHavePostsRelated(tagSlug);
        });

        it('(After) Delete post', () =>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    });

    describe(`Scenario 4: ${$scenari4}`, ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let postTitle1 = 'My First Post';
        let postTitle2 = 'My Second Post';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario($scenari4);
        });
    
        it('(Before) Create a tag', () => {
            testerObject.resetStepCounter();
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });
    
        it('(Before) Create the first draft post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle1);
        });

        it('(Before) Create the second draft post', ()=>{
            testerObject.selectPostsfromManageMenu();
            testerObject.createAPost(postTitle2);
        });

        it('Associate a tag to the first draft post and publish it', () => {
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle1);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Associate a tag to the second draft post and publish it', () => {

            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle2);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Validate that the tag is asociated with the two posts', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle1);
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociation(testTag, postTitle2);         
        });

        it('(After) Delete post 1', () =>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle1);
            testerObject.removePost();
        });

        it('(After) Delete post 2', () =>{
            testerObject.selectPostsfromManageMenu();
            testerObject.selectAPostWithItsTitle(postTitle2);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });

    });

    describe(`Scenario 5: ${$scenari5}`, ()=>{
        let testTag = 'testtag';
        let tagSlug = 'test-tag'
        let testTagDescription = "A Tag created for testing...";
        let pageName = 'My new Page';

        beforeEach(()=>{
            testerObject.initNavigation();
            testerObject.logIn();
            testerObject.setScenario($scenari5);
        });
    
        it('(Before) Create a tag', () => {
            testerObject.resetStepCounter();
            testerObject.selectTagsFromManageMenu();
            testerObject.createNewTag(testTag,tagSlug,testTagDescription);
        });

        it('(Before) Create a page', () =>{
            testerObject.selectPagesFromManageMenu();
            testerObject.createAPage(pageName);
        });

        it('Associate a tag to the page', () => {
            testerObject.selectPagesFromManageMenu();
            testerObject.selectAPageWithItsTitle(pageName);
            testerObject.associatedTagToPost(testTag);
            testerObject.publishAPost();
        });

        it('Check the tag association', ()=>{
            testerObject.selectTagsFromManageMenu();
            testerObject.validateTagAssociationWithPage(testTag);
        });

        it('(After) Delete page', () => {
            testerObject.selectPagesFromManageMenu();
            testerObject.selectAPageWithItsTitle(pageName);
            testerObject.removePost();
        });
    
        it('(After) Delete tag', () => {
            testerObject.selectTagsFromManageMenu();
            testerObject.removeATag(tagSlug);
        });
    })
})