
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario:  Free CRM create new Deal Scenario
    Given User IS already on Login Page
    When title of loging page is free CRM
    Then user enters usename and password
    | ektap11 | qwerty@11 |
    Then user click on login button
		Then user Is on home Page 
		Then user move to the new deal page
		Then user enters contacts details
		| testdeal | 2000 | 50 | 10 |
		Then close the browser

  