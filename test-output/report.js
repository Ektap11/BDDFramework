$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/BDDFramework/src/main/java/Features/deal.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Free CRM create new Deal Scenario",
  "description": "",
  "id": "title-of-your-feature;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User IS already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of loging page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters usename and password",
  "rows": [
    {
      "cells": [
        "ektap11",
        "qwerty@11"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user Is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user move to the new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters contacts details",
  "rows": [
    {
      "cells": [
        "testdeal",
        "2000",
        "50",
        "10"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinations.user_already_login_page()"
});
formatter.result({
  "duration": 7977762300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 14875600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 297796300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_click_on_login_button()"
});
formatter.result({
  "duration": 3072906800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_Is_on_home_Page()"
});
formatter.result({
  "duration": 3030753400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_move_to_the_new_contact_page()"
});
formatter.result({
  "duration": 4677622800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 1586125500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.cloase_the_browser()"
});
formatter.result({
  "duration": 1533422300,
  "status": "passed"
});
});