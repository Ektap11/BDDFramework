$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/BDDFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "free CRM contact feature",
  "description": "I want to use this template for my feature file",
  "id": "free-crm-contact-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Free CRM Login Scenario",
  "description": "",
  "id": "free-crm-contact-feature;free-crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User IS already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of loging page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user Is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user move to the new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify user created",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "free-crm-contact-feature;free-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 37,
      "id": "free-crm-contact-feature;free-crm-login-scenario;;1"
    },
    {
      "cells": [
        "ektap11",
        "qwerty@11",
        "eku",
        "desai",
        "manager"
      ],
      "line": 38,
      "id": "free-crm-contact-feature;free-crm-login-scenario;;2"
    },
    {
      "cells": [
        "ektap11",
        "qwerty@11",
        "pooja",
        "sanghani",
        "devloper"
      ],
      "line": 39,
      "id": "free-crm-contact-feature;free-crm-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Free CRM Login Scenario",
  "description": "",
  "id": "free-crm-contact-feature;free-crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User IS already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of loging page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"ektap11\" and \"qwerty@11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user Is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user move to the new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enters contacts details \"eku\" and \"desai\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify user created",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 10370618000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 24181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ektap11",
      "offset": 13
    },
    {
      "val": "qwerty@11",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 318334100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 3080977300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Is_on_home_Page()"
});
formatter.result({
  "duration": 3027425000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_to_the_new_contact_page()"
});
formatter.result({
  "duration": 5104626000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eku",
      "offset": 30
    },
    {
      "val": "desai",
      "offset": 40
    },
    {
      "val": "manager",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 1759231300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_user_created()"
});
formatter.result({
  "duration": 6037804600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.cloase_the_browser()"
});
formatter.result({
  "duration": 1634169700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Free CRM Login Scenario",
  "description": "",
  "id": "free-crm-contact-feature;free-crm-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User IS already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "title of loging page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"ektap11\" and \"qwerty@11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user Is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user move to the new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enters contacts details \"pooja\" and \"sanghani\" and \"devloper\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify user created",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 7517051200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 8882000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ektap11",
      "offset": 13
    },
    {
      "val": "qwerty@11",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 319573500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 3075274000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Is_on_home_Page()"
});
formatter.result({
  "duration": 3016124600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_to_the_new_contact_page()"
});
formatter.result({
  "duration": 5135475700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pooja",
      "offset": 30
    },
    {
      "val": "sanghani",
      "offset": 42
    },
    {
      "val": "devloper",
      "offset": 57
    }
  ],
  "location": "LoginStepDefinition.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 1832019000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_user_created()"
});
formatter.result({
  "duration": 6423603400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.cloase_the_browser()"
});
formatter.result({
  "duration": 1569773700,
  "status": "passed"
});
});