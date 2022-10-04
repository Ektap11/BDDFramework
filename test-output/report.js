$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/BDDFramework/src/main/java/Features/dealmap.feature");
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
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "ektap11",
        "qwerty@11"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user Is on home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user move to the new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters contacts details",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 17
    },
    {
      "cells": [
        "testdeal1",
        "1000",
        "50",
        "10"
      ],
      "line": 18
    },
    {
      "cells": [
        "testdeal2",
        "2000",
        "60",
        "20"
      ],
      "line": 19
    },
    {
      "cells": [
        "testdeal3",
        "3000",
        "70",
        "30"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 7107889200,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 36066800,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 303699300,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 3060987300,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_Is_on_home_Page()"
});
formatter.result({
  "duration": 3016184200,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_move_to_the_new_contact_page()"
});
formatter.result({
  "duration": 4083047600,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 5352610600,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1374973800,
  "status": "passed"
});
});