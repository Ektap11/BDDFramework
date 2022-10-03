/*
 * package stepDefinantions;
 * 
 * import org.junit.Assert;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.JavascriptExecutor;
 * import org.openqa.selenium.WebDriver; import org.openqa.selenium.WebElement;
 * 
 * import org.openqa.selenium.firefox.FirefoxDriver; import
 * org.openqa.selenium.interactions.Actions;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When;
 * 
 * 
 * public class LoginStepDefinition { WebDriver driver;
 * 
 * @Given("^User IS already on Login Page$") public void
 * user_already_login_page() {
 * 
 * System.setProperty("webdriver.gecko.driver",
 * "C:\\SeleniumJars\\geckodriver.exe"); driver = new FirefoxDriver();
 * driver.get("https://classic.freecrm.com/index.html"); }
 * 
 * @When("^title of loging page is free CRM$") public void
 * title_of_login_page_is_free_CRM() { String title = driver.getTitle();
 * System.out.println(title); Assert.
 * assertEquals("Free CRM - CRM software for customer relationship management, sales, and support."
 * , title); }
 * 
 * @Then("^user enters \"(.*)\" and \"(.*)\"$") public void
 * user_enters_username_and_password(String username , String password) {
 * driver.findElement(By.name("username")).sendKeys(username);
 * driver.findElement(By.name("password")).sendKeys(password);
 * 
 * }
 * 
 * @Then("^user click on login button$") public void
 * user_click_on_login_button() throws InterruptedException { WebElement
 * loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
 * JavascriptExecutor js = (JavascriptExecutor)driver;
 * js.executeScript("arguments[0].click();", loginBtn); Thread.sleep(3000); }
 * 
 * @Then("^user Is on home Page$") public void user_Is_on_home_Page() throws
 * InterruptedException { String t1 = driver.getTitle(); Thread.sleep(3000);
 * System.out.println(t1); Assert.assertEquals("CRMPRO" , t1); }
 * 
 * @Then("^user move to the new contact page$") public void
 * user_move_to_the_new_contact_page() throws InterruptedException{
 * Thread.sleep(3000); driver.switchTo().frame("mainpanel"); Actions action =
 * new Actions(driver); action.moveToElement(driver.findElement(By.xpath(
 * "//a[contains(text(),'Contacts')]"))).build().perform();
 * driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
 * }
 * 
 * @Then("^user enters contacts details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
 * public void user_enters_contacts_details(String firstname , String lastname ,
 * String position){
 * driver.findElement(By.id("first_name")).sendKeys(firstname);
 * driver.findElement(By.id("surname")).sendKeys(lastname);
 * driver.findElement(By.id("company_position")).sendKeys(position);
 * driver.findElement(By.xpath("//input[@type='submit' and @value ='Save']")).
 * click();
 * 
 * }
 * 
 * @Then("^verify user created$") public void verify_user_created() throws
 * InterruptedException { Thread.sleep(3000);
 * 
 * driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
 * Thread.sleep(2000); String s1 =
 * driver.findElement(By.xpath("//a[contains(text(),'pooja sanghani')]")).
 * getText(); System.out.println(s1); Assert.assertEquals("pooja sanghani", s1);
 * }
 * 
 * 
 * @Then("^close the browser$") public void cloase_the_browser() {
 * driver.close(); }
 * 
 * 
 * }
 */