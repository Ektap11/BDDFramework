package stepDefinantions;


import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealMapStepDefination {
	WebDriver driver;
	@Given("^User IS already on Login Page$")
	public void user_already_login_page() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://classic.freecrm.com/index.html");
	}
	@When("^title of loging page is free CRM$")
	public void title_of_login_page_is_free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM - CRM software for customer relationship management, sales, and support.", title);
	}
	@Then("^user enters usename and password$")
	public void user_enters_username_and_password(DataTable	dealData) {
		for(Map<String,String> data: dealData.asMaps(String.class, String.class)) {
	   driver.findElement(By.name("username")).sendKeys(data.get("username"));
	   driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}
	@Then("^user click on login button$")
	public void user_click_on_login_button() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		Thread.sleep(3000);
	}
	@Then("^user Is on home Page$")
	public void user_Is_on_home_Page() throws InterruptedException {
		String t1 = driver.getTitle();
		Thread.sleep(3000);
		System.out.println(t1);
		Assert.assertEquals("CRMPRO" , t1);
	}
	@Then("^user move to the new deal page$")
	public void user_move_to_the_new_contact_page() throws InterruptedException{
		Thread.sleep(3000);
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}
	@Then("^user enters contacts details$")
	public void user_enters_contacts_details(DataTable dealData){
		for(Map<String , String> dealValue : dealData.asMaps(String.class, String.class)) {
			driver.findElement(By.id("title")).sendKeys(dealValue.get("Title"));
			driver.findElement(By.id("amount")).sendKeys(dealValue.get("Amount"));
			driver.findElement(By.id("probability")).sendKeys(dealValue.get("Probability"));
			driver.findElement(By.id("commission")).sendKeys(dealValue.get("Commission"));
			driver.findElement(By.xpath("//input[@type='submit' and @value ='Save']")).click();
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}
		
		
		
	}
	@Then("^close the browser$")
	public void close_the_browser() {
		  driver.close();
		  }
	
	
}
