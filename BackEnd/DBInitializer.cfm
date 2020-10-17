<!---				create Counties table						--->

<cfquery datasource="covid-database">
	CREATE TABLE Counties
	(
		id INT NOT NULL AUTO_INCREMENT,
		Name VARCHAR(30),
		PRIMARY KEY (id)
	);
</cfquery>

<!---				create Deaths table						--->

<cfquery datasource="covid-database">
CREATE TABLE Deaths
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Deaths PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Deaths_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);
</cfquery>

<!---				create Cases table						--->

<cfquery datasource="covid-database">
	CREATE TABLE Cases
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Cases PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Cases_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);
</cfquery>

<!---				create Recoveries table						--->

<cfquery datasource="covid-database">
	CREATE TABLE Recoveries
	(
		Date VARCHAR(20) NOT NULL,
		CountyID 	INT NOT NULL,
		Count		INT,
		CONSTRAINT PK_Recoveries PRIMARY KEY (Date, CountyID),
		CONSTRAINT FK_Recoveries_Counties FOREIGN KEY (CountyID) REFERENCES Counties(id)
	);
</cfquery>


<!---				populating database						--->

<cfhttp url="https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv">
<cfset startString = cfhttp.filecontent>
<cfset startTag = FindNoCase('deaths', startString)+6>
<cfset finalString = RemoveChars(startString,1, startTag)>
<cfset triStateArea = "New Jersey,New York,Connecticut">
<cfset countiesInDB = "">
<cfset csvData = listToArray(finalString,"#Chr(10)#",false,true)>

<cfloop array = #csvData# index="ListItem">
	<!---	index: 1:date 2:county 3:state 4:fips 5:cases 6:deaths	--->
	<cfset temp = listToArray(#ListItem#,",",true,true)>
	<!---	if state of current row is in the tri state area	--->
	<cfif #ListContains(triStateArea,temp[3])#>
		<!---	for counties labled "Unknown"	--->
		<cfif temp[2] neq "Unknown">
			<cfset stateCounty = temp[3] & ":" & temp[2]>
			<!---	if county has been added to the database already	--->
			<cfif 0 eq #ListContains(countiesInDB,stateCounty)#>
				<cfquery datasource="covid-database">
					INSERT INTO Counties (Name)
					VALUES ('#stateCounty#');
				</cfquery>
				<cfset countiesInDB = listAppend(countiesInDB, #stateCounty#)>
			</cfif>
			<cfset id = ListFind(countiesInDB, stateCounty)>
				
			<!---	if cases arent recorded	--->
			<cfif temp[5] eq "">
			  <cfset temp[5]=0>
			</cfif>
			<!---	if deaths arent recorded	--->
			<cfif temp[6] eq "">
			  <cfset temp[6]=0>
			</cfif>
				
			<cfquery datasource="covid-database">
				INSERT INTO Cases (Date, CountyID, Count)
				VALUES ('#temp[1]#', #id#, #temp[5]#);
			</cfquery>
			<cfquery datasource="covid-database">
				INSERT INTO Deaths (Date, CountyID, Count)
				VALUES ('#temp[1]#', #id#, #temp[6]#);
			</cfquery>
		</cfif>
	</cfif>
</cfloop>
