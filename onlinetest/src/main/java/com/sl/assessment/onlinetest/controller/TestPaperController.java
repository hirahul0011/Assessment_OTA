package com.sl.assessment.onlinetest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sl.assessment.onlinetest.model.TestPaperQuestion;
import com.sl.assessment.onlinetest.repository.TestPaperQuestionRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class TestPaperController {
	
	@Autowired
	TestPaperQuestionRepository testPaperQuestionRepository;
	
	@GetMapping("/testPaperQuestions")
	  public List<TestPaperQuestion> getAllTestPaperQuestions(@RequestParam(required = false) String title) {
		 return testPaperQuestionRepository.findAll();	    
	  }

	  @GetMapping("/testPaperQuestions/{id}")
	  public TestPaperQuestion getTestPaperQuestionById(@PathVariable("id") long id) {
	    return testPaperQuestionRepository.getById(id);
	  }

	  @PostMapping("/testPaperQuestions")
	  public void createTestPaperQuestion(@RequestBody TestPaperQuestion testPaperQuestion) {
		  testPaperQuestionRepository.save(testPaperQuestion);	    
	  }

//	  @PutMapping("/testPaperQuestions/{id}")
//	  public void updateTestPaperQuestion(@PathVariable("id") long id, @RequestBody TestPaperQuestion testPaperQuestion) {
//	    TestPaperQuestion tpq=getTestPaperQuestionById(id);
//	    tpq.setTestPaper_name(testPaperQuestion.getTestPaper_name());
//	    tpq.setTestPaper_email(testPaperQuestion.getTestPaper_email());
//	    tpq.setTestPaper_branch(testPaperQuestion.getTestPaper_branch());
//	    testPaperQuestionRepository.save(tpq);
//	  }
	  
	  @PutMapping("/testPaperQuestions/{id}")
	  public void updateTestPaperQuestion(@PathVariable("id") long id, @RequestBody TestPaperQuestion testPaperQuestion) {
		TestPaperQuestion tpq=getTestPaperQuestionById(id);
		tpq.setAS1(testPaperQuestion.getAS1());
	    tpq.setAS2(testPaperQuestion.getAS2());
	    tpq.setAS3(testPaperQuestion.getAS3());
	    tpq.setAS4(testPaperQuestion.getAS4());
	    tpq.setAS5(testPaperQuestion.getAS5());
	    tpq.setAS6(testPaperQuestion.getAS6());
	    tpq.setAS7(testPaperQuestion.getAS7());
	    tpq.setAS8(testPaperQuestion.getAS8());
	    tpq.setAS9(testPaperQuestion.getAS9());
	    tpq.setAS10(testPaperQuestion.getAS10());
	    tpq.setSCORE(testPaperQuestion.getSCORE());
	    testPaperQuestionRepository.save(tpq);
	  }

	  @DeleteMapping("/testPaperQuestions/{id}")
	  public void deleteTestPaperQuestion(@PathVariable("id") long id) {
		  testPaperQuestionRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/testPaperQuestions")
	  public void deleteAllTestPaperQuestions() {
		  testPaperQuestionRepository.deleteAll();	    
	  }

}
