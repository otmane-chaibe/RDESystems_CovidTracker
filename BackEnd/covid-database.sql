/*		create Counties table						*/

	CREATE TABLE Counties
	(
		id INT NOT NULL AUTO_INCREMENT,
		Name VARCHAR(30),
		PRIMARY KEY (id)
	);

/*			create Deaths table						*/


CREATE TABLE Deaths
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Deaths PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Deaths_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);

/*				create Cases table						*/


	CREATE TABLE Cases
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Cases PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Cases_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);


/*			create Recoveries table						*/


	CREATE TABLE Recoveries
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Recoveries PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Recoveries_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);
