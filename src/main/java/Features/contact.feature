#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: free CRM contact feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Free CRM Login Scenario
    Given User IS already on Login Page
    When title of loging page is free CRM
    Then user enters "<username>" and "<password>"
    Then user click on login button
		Then user Is on home Page 
		Then user move to the new contact page
		Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
		Then verify user created
		Then close the browser

  
   Examples:
   	| username | password | firstname | lastname | position |
   	| ektap11 |	qwerty@11| eku			 | desai		| manager  |
   	| ektap11 | qwerty@11|pooja      | sanghani | devloper |