package com.sl.assessment.onlinetest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="test")
public class TestPaperQuestion {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int AS_SERIAL_NO;
	private int SERIAL_NO;
	private String SUBJECT_NAME;
	private int SUBJECT_NO;
	private int SUBJECT_SERIAL_NO;
	private String QT1;
	private String QT2;
	private String QT3;
	private String QT4;
	private String QT5;
	private String QT6;
	private String QT7;
	private String QT8;
	private String QT9;
	private String QT10;
	private String I1;
	private String I2;
	private String I3;
	private String I4;
	private String I5;
	private String I6;
	private String I7;
	private String I8;
	private String I9;
	private String I10;
	private String O1;
	private String O2;
	private String O3;
	private String O4;
	private String O5;
	private String O6;
	private String O7;
	private String O8;
	private String O9;
	private String O10;
	private String A1;
	private String A2;
	private String A3;
	private String A4;
	private String A5;
	private String A6;
	private String A7;
	private String A8;
	private String A9;
	private String A10;
	private String AS1;
	private String AS2;
	private String AS3;
	private String AS4;
	private String AS5;
	private String AS6;
	private String AS7;
	private String AS8;
	private String AS9;
	private String AS10;
	private double SCORE;
	private double SCOREINEXAM;
	
	public int getAS_SERIAL_NO() {
		return AS_SERIAL_NO;
	}
	public void setAS_SERIAL_NO(int aS_SERIAL_NO) {
		AS_SERIAL_NO = aS_SERIAL_NO;
	}
	public int getSERIAL_NO() {
		return SERIAL_NO;
	}
	public void setSERIAL_NO(int sERIAL_NO) {
		SERIAL_NO = sERIAL_NO;
	}
	public String getSUBJECT_NAME() {
		return SUBJECT_NAME;
	}
	public void setSUBJECT_NAME(String sUBJECT_NAME) {
		SUBJECT_NAME = sUBJECT_NAME;
	}
	public int getSUBJECT_NO() {
		return SUBJECT_NO;
	}
	public void setSUBJECT_NO(int sUBJECT_NO) {
		SUBJECT_NO = sUBJECT_NO;
	}
	public int getSUBJECT_SERIAL_NO() {
		return SUBJECT_SERIAL_NO;
	}
	public void setSUBJECT_SERIAL_NO(int sUBJECT_SERIAL_NO) {
		SUBJECT_SERIAL_NO = sUBJECT_SERIAL_NO;
	}
	public String getQT1() {
		return QT1;
	}
	public void setQT1(String qT1) {
		QT1 = qT1;
	}
	public String getQT2() {
		return QT2;
	}
	public void setQT2(String qT2) {
		QT2 = qT2;
	}
	public String getQT3() {
		return QT3;
	}
	public void setQT3(String qT3) {
		QT3 = qT3;
	}
	public String getQT4() {
		return QT4;
	}
	public void setQT4(String qT4) {
		QT4 = qT4;
	}
	public String getQT5() {
		return QT5;
	}
	public void setQT5(String qT5) {
		QT5 = qT5;
	}
	public String getQT6() {
		return QT6;
	}
	public void setQT6(String qT6) {
		QT6 = qT6;
	}
	public String getQT7() {
		return QT7;
	}
	public void setQT7(String qT7) {
		QT7 = qT7;
	}
	public String getQT8() {
		return QT8;
	}
	public void setQT8(String qT8) {
		QT8 = qT8;
	}
	public String getQT9() {
		return QT9;
	}
	public void setQT9(String qT9) {
		QT9 = qT9;
	}
	public String getQT10() {
		return QT10;
	}
	public void setQT10(String qT10) {
		QT10 = qT10;
	}
	public String getI1() {
		return I1;
	}
	public void setI1(String i1) {
		I1 = i1;
	}
	public String getI2() {
		return I2;
	}
	public void setI2(String i2) {
		I2 = i2;
	}
	public String getI3() {
		return I3;
	}
	public void setI3(String i3) {
		I3 = i3;
	}
	public String getI4() {
		return I4;
	}
	public void setI4(String i4) {
		I4 = i4;
	}
	public String getI5() {
		return I5;
	}
	public void setI5(String i5) {
		I5 = i5;
	}
	public String getI6() {
		return I6;
	}
	public void setI6(String i6) {
		I6 = i6;
	}
	public String getI7() {
		return I7;
	}
	public void setI7(String i7) {
		I7 = i7;
	}
	public String getI8() {
		return I8;
	}
	public void setI8(String i8) {
		I8 = i8;
	}
	public String getI9() {
		return I9;
	}
	public void setI9(String i9) {
		I9 = i9;
	}
	public String getI10() {
		return I10;
	}
	public void setI10(String i10) {
		I10 = i10;
	}
	public String getO1() {
		return O1;
	}
	public void setO1(String o1) {
		O1 = o1;
	}
	public String getO2() {
		return O2;
	}
	public void setO2(String o2) {
		O2 = o2;
	}
	public String getO3() {
		return O3;
	}
	public void setO3(String o3) {
		O3 = o3;
	}
	public String getO4() {
		return O4;
	}
	public void setO4(String o4) {
		O4 = o4;
	}
	public String getO5() {
		return O5;
	}
	public void setO5(String o5) {
		O5 = o5;
	}
	public String getO6() {
		return O6;
	}
	public void setO6(String o6) {
		O6 = o6;
	}
	public String getO7() {
		return O7;
	}
	public void setO7(String o7) {
		O7 = o7;
	}
	public String getO8() {
		return O8;
	}
	public void setO8(String o8) {
		O8 = o8;
	}
	public String getO9() {
		return O9;
	}
	public void setO9(String o9) {
		O9 = o9;
	}
	public String getO10() {
		return O10;
	}
	public void setO10(String o10) {
		O10 = o10;
	}
	public String getA1() {
		return A1;
	}
	public void setA1(String a1) {
		A1 = a1;
	}
	public String getA2() {
		return A2;
	}
	public void setA2(String a2) {
		A2 = a2;
	}
	public String getA3() {
		return A3;
	}
	public void setA3(String a3) {
		A3 = a3;
	}
	public String getA4() {
		return A4;
	}
	public void setA4(String a4) {
		A4 = a4;
	}
	public String getA5() {
		return A5;
	}
	public void setA5(String a5) {
		A5 = a5;
	}
	public String getA6() {
		return A6;
	}
	public void setA6(String a6) {
		A6 = a6;
	}
	public String getA7() {
		return A7;
	}
	public void setA7(String a7) {
		A7 = a7;
	}
	public String getA8() {
		return A8;
	}
	public void setA8(String a8) {
		A8 = a8;
	}
	public String getA9() {
		return A9;
	}
	public void setA9(String a9) {
		A9 = a9;
	}
	public String getA10() {
		return A10;
	}
	public void setA10(String a10) {
		A10 = a10;
	}
	public String getAS1() {
		return AS1;
	}
	public void setAS1(String aS1) {
		AS1 = aS1;
	}
	public String getAS2() {
		return AS2;
	}
	public void setAS2(String aS2) {
		AS2 = aS2;
	}
	public String getAS3() {
		return AS3;
	}
	public void setAS3(String aS3) {
		AS3 = aS3;
	}
	public String getAS4() {
		return AS4;
	}
	public void setAS4(String aS4) {
		AS4 = aS4;
	}
	public String getAS5() {
		return AS5;
	}
	public void setAS5(String aS5) {
		AS5 = aS5;
	}
	public String getAS6() {
		return AS6;
	}
	public void setAS6(String aS6) {
		AS6 = aS6;
	}
	public String getAS7() {
		return AS7;
	}
	public void setAS7(String aS7) {
		AS7 = aS7;
	}
	public String getAS8() {
		return AS8;
	}
	public void setAS8(String aS8) {
		AS8 = aS8;
	}
	public String getAS9() {
		return AS9;
	}
	public void setAS9(String aS9) {
		AS9 = aS9;
	}
	public String getAS10() {
		return AS10;
	}
	public void setAS10(String aS10) {
		AS10 = aS10;
	}
	public double getSCORE() {
		return SCORE;
	}
	public void setSCORE(double sCORE) {
		SCORE = sCORE;
	}
	public double getSCOREINEXAM() {
		return SCOREINEXAM;
	}
	public void setSCOREINEXAM(double sCOREINEXAM) {
		SCOREINEXAM = sCOREINEXAM;
	}
	
	

}
