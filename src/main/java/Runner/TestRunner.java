package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Selenium_Workspace\\BDDFramework\\src\\main\\java\\Features\\deal.feature"
		,glue= {"stepDefinantions"}
		,plugin= {"pretty","html:test-output"}
		,strict = true
		,dryRun = false
		,monochrome = true 
		)
public class TestRunner {

}
