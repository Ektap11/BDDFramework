
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @tag1
  Scenario:  Free CRM create new Deal Scenario
    Given User IS already on Login Page
    When title of loging page is free CRM
    Then user enters usename and password
    | username | password |
    | ektap11 | qwerty@11 |
    Then user click on login button
		Then user Is on home Page 
		Then user move to the new deal page
		Then user enters contacts details
		| Title | Amount | Probability  | Commission |
		| testdeal1 | 1000 | 50 | 10 |
		| testdeal2 | 2000 | 60 | 20 |
		| testdeal3 | 3000 | 70 | 30 |
		
		Then close the browser

  