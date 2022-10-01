
@tag
Feature: Free Crm Login Feature
  I want to use this template for my feature file

  #@tag1
  # without Example Keyword
 # Scenario: Free CRM Login Scenario
  #  Given User IS already on Login Page
   # When title of loging page is free CRM
    #Then user enters "Ektap11" and "qwerty@11"
   # Then user click on login button
	#	And user Is on home Page
	
	#with example keyword	
		
Scenario Outline: Free CRM Login Scenario
    Given User IS already on Login Page
    When title of loging page is free CRM
    Then user enters "<username>" and "<password>"
    Then user click on login button
		And user Is on home Page
		Then close the browser
		
Examples: 
	
			| username | password |
			| ektap11  | qwerty@11|
			| tom      | asd1     |
			
			
	
  
    