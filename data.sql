
CREATE TABLE `test` (
  `AS_SERIAL_NO` int NOT NULL AUTO_INCREMENT,
  `SERIAL_NO` int DEFAULT NULL,
  `SUBJECT_NAME` varchar(200) DEFAULT NULL,
  `SUBJECT_NO` int DEFAULT NULL,
  `SUBJECT_SERIAL_NO` int DEFAULT NULL,
  `QT1` text,
  `QT2` text,
  `QT3` text,
  `QT4` text,
  `QT5` text,
  `QT6` text,
  `QT7` text,
  `QT8` text,
  `QT9` text,
  `QT10` text,
  `O1` varchar(500) DEFAULT NULL,
  `O2` varchar(500) DEFAULT NULL,
  `O3` varchar(500) DEFAULT NULL,
  `O4` varchar(500) DEFAULT NULL,
  `O5` varchar(500) DEFAULT NULL,
  `O6` varchar(500) DEFAULT NULL,
  `O7` varchar(500) DEFAULT NULL,
  `O8` varchar(500) DEFAULT NULL,
  `O9` varchar(500) DEFAULT NULL,
  `O10` varchar(500) DEFAULT NULL,
  `A1` varchar(500) DEFAULT NULL,
  `A2` varchar(500) DEFAULT NULL,
  `A3` varchar(500) DEFAULT NULL,
  `A4` varchar(500) DEFAULT NULL,
  `A5` varchar(500) DEFAULT NULL,
  `A6` varchar(500) DEFAULT NULL,
  `A7` varchar(500) DEFAULT NULL,
  `A8` varchar(500) DEFAULT NULL,
  `A9` varchar(500) DEFAULT NULL,
  `A10` varchar(500) DEFAULT NULL,
  `AS1` varchar(500) DEFAULT NULL,
  `AS2` varchar(500) DEFAULT NULL,
  `AS3` varchar(500) DEFAULT NULL,
  `AS4` varchar(500) DEFAULT NULL,
  `AS5` varchar(500) DEFAULT NULL,
  `AS6` varchar(500) DEFAULT NULL,
  `AS7` varchar(500) DEFAULT NULL,
  `AS8` varchar(500) DEFAULT NULL,
  `AS9` varchar(500) DEFAULT NULL,
  `AS10` varchar(500) DEFAULT NULL,
  `SCORE` double DEFAULT NULL,
  `SCOREINEXAM` double DEFAULT NULL,
  `I1` longblob,
  `I2` longblob,
  `I3` longblob,
  `I4` longblob,
  `I5` longblob,
  `I6` longblob,
  `I7` longblob,
  `I8` longblob,
  `I9` longblob,
  `I10` longblob,
  PRIMARY KEY (`AS_SERIAL_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM sys.`test`
LIMIT 0, 1000

-- Date: 2021-01-24 13:54
*/
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (1,2,'S1',1,2,'(1Z0-808)What is the result of running the following as java Copier?<br>package duplicate;<br>public class Copier {<br>  public static void main(String... original) {<br>      String... copy = original;<br>      out.println(copy.length +   + copy[0]);<br>   }<br>}<br>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'The code does not compile.','0 followed by an exception','0','1 followed by an exception',NULL,NULL,NULL,NULL,NULL,NULL,'The code does not compile.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (2,43,'S2',2,8,'(1Z0-808)Place the fragments into the code to produce the output 33. Note that you must use each fragment exactly once.','FRAGMENTS:','Solution:','Determine whether the given solution is correct?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Correct','Incorrect',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Correct',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Correct',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (3,72,'S3',3,2,'Given the code fragments:','What is the result?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Contract Contract Super','Compilation fails at line n1','Super Sub Sub','Compilation fails at line n2',NULL,NULL,NULL,NULL,NULL,NULL,'Compilation fails at line n2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Compilation fails at line n1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (4,122,'S4',4,17,'Given:','What is the result?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1 1 3 3 9 9','Compilation fails','1 1 1 3 3 3 9 9 9','1 3 3 9 9','5 5 7 7','1 3 9',NULL,NULL,NULL,NULL,'1 1 3 3 9 9',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1 1 1 3 3 3 9 9 9',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (5,141,'S5',5,1,'Which two will compile, and can be run successfully using the command: Java fred1 hello walls',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Option B','Option D','Option A','Option C',NULL,NULL,NULL,NULL,NULL,NULL,'Option D','Option C',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (6,197,'S6',6,22,'What is the output of the following application?<br>package reality;<br>public class Equivalency {<br>   public static void main(String[] edges) {<br>      final String ceiling = up;<br>      String floor = new String(up);<br>      final String wall = new String(floor);<br>      out.print((ceiling==wall)          + +(floor==wall)          + +ceiling.equals(wall));<br>   }<br>}<br>',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'false false true','It does not compile.','false true true','false false false','true true true',NULL,NULL,NULL,NULL,NULL,'false false true',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (7,215,'S7',7,5,'Given the SampleClass, what is the output of this code segment?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Setting size Using default values','Using default values Setting size','Compiler error','Using default values','Setting size',NULL,NULL,NULL,NULL,NULL,'Setting size Using default values',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (8,253,'S8',8,8,'What is required to define a valid Java class file?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A package statement','A class declaration','At least one import statement','The public modifier',NULL,NULL,NULL,NULL,NULL,NULL,'A class declaration',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (9,313,'S9',9,33,'Given the following line of code, which of the next lines of code listed are incorrect?<br>char c;',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'c = Yes;','c = \'Y\';','c = \'u0056\';','c = new char();',NULL,NULL,NULL,NULL,NULL,NULL,'c = Yes;','c = new char();',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
INSERT INTO `test` (`AS_SERIAL_NO`,`SERIAL_NO`,`SUBJECT_NAME`,`SUBJECT_NO`,`SUBJECT_SERIAL_NO`,`QT1`,`QT2`,`QT3`,`QT4`,`QT5`,`QT6`,`QT7`,`QT8`,`QT9`,`QT10`,`I1`,`I2`,`I3`,`I4`,`I5`,`I6`,`I7`,`I8`,`I9`,`I10`,`O1`,`O2`,`O3`,`O4`,`O5`,`O6`,`O7`,`O8`,`O9`,`O10`,`A1`,`A2`,`A3`,`A4`,`A5`,`A6`,`A7`,`A8`,`A9`,`A10`,`AS1`,`AS2`,`AS3`,`AS4`,`AS5`,`AS6`,`AS7`,`AS8`,`AS9`,`AS10`,`SCORE`,`SCOREINEXAM`) VALUES (10,320,'S10',10,5,'Given the following code, what will be the result?',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'NOVEMBER 1937 is printed to standard output.','NOVEMBER 1927 is printed to standard output.','JANUARY 1940 is printed to standard output.','JANUARY 18 1940 is printed to standard output.',NULL,NULL,NULL,NULL,NULL,NULL,'NOVEMBER 1937 is printed to standard output.',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10);
