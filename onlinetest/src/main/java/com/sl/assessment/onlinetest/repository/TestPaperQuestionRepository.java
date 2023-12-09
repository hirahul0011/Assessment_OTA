package com.sl.assessment.onlinetest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sl.assessment.onlinetest.model.TestPaperQuestion;

public interface TestPaperQuestionRepository extends JpaRepository<TestPaperQuestion, Long>{

}
