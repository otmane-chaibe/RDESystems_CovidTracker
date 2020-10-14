<!---				create Deaths table						--->
<!---				create Cases table						--->
<!---				create Recoveries table						--->
<!---				create Counties table						--->
<!---		
<cfquery datasource="Covid_Stats">
CREATE TABLE Deaths
(
	ID INT NOT NULL AUTO_INCREMENT,
	Date DATE,
	County VARCHAR(10),
	Count INT,
	PRIMARY KEY (ID)
)

CREATE TABLE Cases
(
	ID INT NOT NULL AUTO_INCREMENT,
	Date DATE,
	County VARCHAR(10),
	Count INT,
	PRIMARY KEY (ID)
)
CREATE TABLE Recoveries
(
	ID INT NOT NULL AUTO_INCREMENT,
	Date DATE,
	County VARCHAR(10),
	Count INT,
	PRIMARY KEY (ID)
)
CREATE TABLE Counties
(
		ID INT NOT NULL AUTO_INCREMENT,
	Date DATE,
	County VARCHAR(10),
	Count INT,
	PRIMARY KEY (ID),
	FOREIGN KEY (County)
      REFERENCES Deaths(County)
      ON UPDATE CASCADE ON DELETE RESTRICT
)
</cfquery>
--->

<!---				populating database						--->


<cfhttp url="https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv">
<cfset startString = cfhttp.filecontent>
<cfset startTag = FindNoCase('deaths', startString)+6>
<cfset finalString = RemoveChars(startString,1, startTag)>
<cfset triStateArea = "New Jersey,New York,Connecticut">
<cfset countiesInDB = "">
<cfset unknownCountyCounter = 0>
	
<cfscript>
	csvData=listToArray(finalString,"#Chr(10)#",false,true)
</cfscript>
<cfloop array = #csvData# index="ListItem">
	<!---	index: 1:date 2:county 3:state 4:fips 5:cases 6:deaths	--->
	<cfscript>
	temp=listToArray(#ListItem#,",",true,true)
	</cfscript>
	<!---	if state of current row is in the tri state area	--->
	<cfif #ListContains(triStateArea,temp[3])#>
		<!---	if county has been added to the database already. Note that there is an "unkown" county	for each state so i include the name of the state to differentiate between them--->
		<cfif 0 eq #ListContains(countiesInDB,temp[3]&":"&temp[2])#>
			<cfset countiesInDB = listAppend(countiesInDB, #temp[3]#&":"&#temp[2]#)>
			<!---	if fips isn't recorded (unkown counties)	--->
			<cfif "" eq #temp[4]#>
				<cfoutput>
					#temp[3]#:#temp[2]# #temp[4]#<br>
				</cfoutput>
				<cfset temp[4] = unknownCountyCounter>
				<cfset unknownCountyCounter = IncrementValue(unknownCountyCounter)>	
				<cfoutput>
					#temp[3]#:#temp[2]# #temp[4]#<br>
				</cfoutput>
			</cfif>
		</cfif>
			
		<!---	if cases arent recorded	--->
		<cfif "" eq #temp[5]#>
			<cfset temp[5] = 0>
		</cfif>
			
		<!---	if deaths arent recorded	--->
		<cfif "" eq #temp[6]#>
			<cfset temp[6] = 0>
		</cfif>
		
			
			
	</cfif>
</cfloop>
	
<cfscript>
writeDump(#countiesInDB#)
</cfscript>
	
		<!--- 
		
		<cfquery datasource="Counties">
			INSERT INTO Deaths (Date, County, Count)
			VALUES ('#temp[1]#', '#temp[2]#', '#temp[6]#');
		</cfquery>
	<cfquery datasource="Covid_Stats">
		INSERT INTO Deaths (Date, County, Count)
		VALUES ('#temp[1]#', '#temp[2]#', '#temp[6]#');
	</cfquery>
	<cfquery datasource="Covid_Stats">
		INSERT INTO Cases (Date, County, Count)
		VALUES ('#temp[1]#', '#temp[2]#', '#temp[5]#');
	</cfquery>
--->	
	<!---

<cfoutput>
</cfoutput>

<cfscript>
  
</cfscript>
--->
