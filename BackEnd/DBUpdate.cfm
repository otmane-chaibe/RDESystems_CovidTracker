<cfschedule
action = "run"
task = "statUpdate">
	
<cffile action="read"
	file="C:/ColdFusion2018/cfusion/wwwroot/Covid App/DBTables.sql"
	variable="Tables">
<cfset tableSQL = listToArray(Tables,";",false,true)>
<!---				create tables						--->

<cfloop array = #tableSQL# index="SQL">
	<cfquery datasource="covid-database">
		#SQL#;
	</cfquery>
</cfloop>
	
<!---				populating database						--->

<cfhttp url="https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv">
<cfset startString = cfhttp.filecontent>
<cfset startTag = FindNoCase('deaths', startString)+6>
<cfset finalString = RemoveChars(startString,1, startTag)>
<cfset triStateArea = "36103, 36059, 34023, 34025, 34029, 34035, 34013, 34039, 34027, 34037, 34019, 42103, 36087, 36079, 34031, 34017, 34003, 36119">
<cfset countiesInDB = "">
<cfset csvData = listToArray(finalString,"#Chr(10)#",false,true)>

<cfloop array = #csvData# index="ListItem">
	<!---	index: 1:date 2:county 3:state 4:fips 5:cases 6:deaths	--->
	<cfset temp = listToArray(#ListItem#,",",true,true)>
		
	<!---	for counties labled "Unknown"	--->
	<cfif temp[2] neq "Unknown">
		<!---	if fips of current row is in the tri state area	--->
		<cfif #ListContains(triStateArea,temp[4])# || temp[2] eq "New York City">
			<!---	if county has been added to the database already	--->
			<cfif 0 eq #ListContains(countiesInDB,temp[2])#>
				<cfif IsDefined("countyInsert")>
				 	<cfset countyInsert=listAppend(countyInsert,"('#temp[2]#')",",")>
				<cfelse>
					<cfset countyInsert="INSERT INTO Counties (Name) VALUES ('#temp[2]#')">
				</cfif>
				<cfset countiesInDB = listAppend(countiesInDB, #temp[2]#)>
			</cfif>
			<cfset id = ListFind(countiesInDB, temp[2])>
				
			<!---	if cases arent recorded	--->
			<cfif temp[5] eq "">
			  <cfset temp[5]=0>
			</cfif>
			<!---	if deaths arent recorded	--->
			<cfif temp[6] eq "">
			  <cfset temp[6]=0>
			</cfif>
				
			<cfif IsDefined("casesInsert")>
				<cfset casesInsert=listAppend(casesInsert,"('#temp[1]#', #id#, #temp[5]#)",",")>
			<cfelse>	<!---	for first entry	--->
				<cfset casesInsert="INSERT INTO Cases (Date, CountyID, Count) VALUES ('#temp[1]#', #id#, #temp[5]#)">
			</cfif>
			
			<cfif IsDefined("deathsInsert")>
				<cfset deathsInsert=listAppend(deathsInsert,"('#temp[1]#', #id#, #temp[6]#)",",")>
			<cfelse>	<!---	for first entry	--->
				<cfset deathsInsert="INSERT INTO Deaths (Date, CountyID, Count) VALUES ('#temp[1]#', #id#, #temp[6]#)">
			</cfif>
		</cfif>
	</cfif>
</cfloop>
		
<cfquery datasource="covid-database">
	#preserveSingleQuotes(countyInsert)#;
</cfquery>
<cfquery datasource="covid-database">
	#preserveSingleQuotes(casesInsert)#;
</cfquery>
<cfquery datasource="covid-database">
	#preserveSingleQuotes(deathsInsert)#;
</cfquery>
					
					
<!---	populate recovery table	--->
<!---	getting all county ID's	--->
<cfquery datasource="covid-database" name=CountyIDs>
	SELECT id FROM Counties;
</cfquery>	

<cfloop query="CountyIDs" group="id">
	<cfquery datasource="covid-database" name ="caseCount">
		SELECT Date,Count FROM Cases where CountyID = #id#;
	</cfquery>	
	<cfquery datasource="covid-database" name ="deathCount">
		SELECT Date,Count FROM Deaths where CountyID = #id#;
	</cfquery>	
	<cfset i=1>
	<!---	for some reason the query loop below forgets what #id# is so i set CountyID to #id#	--->
	<cfset countyID=id>
	<cfloop query="caseCount">
		<cfif #i# lt 15>			
			<cfif IsDefined("recoveriesInsert")>
				<cfset recoveriesInsert=listAppend(recoveriesInsert,"('#caseCount.Date[i]#', #countyID#, 0)",",")>
			<cfelse>	<!---	for first entry	--->
				<cfset recoveriesInsert="INSERT INTO Recoveries (Date, CountyID, Count) VALUES ('#caseCount.Date[i]#', #countyID#, 0)">
			</cfif>
		<cfelse>
			<cfset recoveryCount = caseCount.Count[i-14] - deathCount.Count[i]>
			<cfif recoveryCount lt 0>
				<cfset recoveryCount = 0>
			</cfif>
			<cfset recoveriesInsert=listAppend(recoveriesInsert,"('#caseCount.Date[i]#', #countyID#, #recoveryCount#)",",")>
		</cfif>
		<cfset i=IncrementValue(i)>
	</cfloop>
</cfloop>
			
<cfquery datasource="covid-database">
	#preserveSingleQuotes(recoveriesInsert)#;
</cfquery>
				
				
<!---	updating current date stat	--->
<cfhttp url="https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv">
<cfset startString = cfhttp.filecontent>
<cfset startTag = FindNoCase('<tbody>', startString)+7>
<cfset tempString = RemoveChars(StartString,1, startTag)>
<cfset endTag = FindNoCase("</tbody>", tempString)>
<cfset finalString = RemoveChars(tempString,endTag-7,len(tempString))>
<cfset removeTRID = REReplace(finalString,'<tr id="LC[0-9]+" class="js-file-line">',"","all")>
<cfset removeTDID = REReplace(removeTRID,'<td id="L[0-9]+" class="blob-num js-line-number" data-line-number="[0-9]+"></td>',"","all")>
<cfset removeTD = replace(removeTDID,"<td>","","all")>
<cfset CSVdata=listToArray(removeTD,"</tr>",false,true)>
<cfloop array = #CSVdata# index="arrayItem">
	<cfset temp=listToArray(#arrayItem#,"</td>",true,true)>
		<!---	the delimiter above does not capture the whitespace before each string. for times sake, I am using trim to remove the white space--->
		<cfset temp[1] = trim(temp[1])>
		<cfset temp[2] = trim(temp[2])>
		<cfset temp[4] = trim(temp[4])>
		<cfset temp[7] = trim(temp[7])>
		<cfset temp[8] = trim(temp[8])>
	<!---	for counties labled "Unknown"	--->
	<cfif temp[2] neq "Unknown">
		<!---	if state of current row is in the tri state area	--->
		<cfif #ListContains(triStateArea,temp[4])# || temp[2] eq "New York City">
			<!---	get county id	--->
			<cfquery datasource="covid-database" name=countyID>
				SELECT id FROM Counties WHERE Name ="#temp[2]#";
			</cfquery>
			<cfset id = CountyID.id>
				
			<!---	if cases arent recorded	--->
			<cfif temp[7] eq "">
			  <cfset temp[7]=0>
			</cfif>
			<!---	if deaths arent recorded	--->
			<cfif temp[8] eq "">
			  <cfset temp[8]=0>
			</cfif>
			<!---	insert/update Cases entry for current day	--->
			<cfif IsDefined("currentCasesInsert")>
				<cfset currentCasesInsert=listAppend(currentCasesInsert,"('#temp[1]#', #id#, #temp[7]#)",",")>
			<cfelse>	<!---	for first entry	--->
				<cfset currentCasesInsert="INSERT INTO Cases (Date, CountyID, Count) VALUES ('#temp[1]#', #id#, #temp[7]#)">
			</cfif>

			<!---	insert/update Deaths entry for current day	--->
			<cfif IsDefined("currentDeathsInsert")>
				<cfset currentDeathsInsert=listAppend(currentDeathsInsert,"('#temp[1]#', #id#, #temp[8]#)",",")>
			<cfelse>	<!---	for first entry	--->
				<cfset currentDeathsInsert="INSERT INTO Deaths (Date, CountyID, Count) VALUES ('#temp[1]#', #id#, #temp[8]#)">
			</cfif>
		</cfif>
	</cfif>
</cfloop>

<cfquery datasource="covid-database">
	#preserveSingleQuotes(currentCasesInsert)#;
</cfquery>
<cfquery datasource="covid-database">
	#preserveSingleQuotes(currentDeathsInsert)#;
</cfquery>
				
<cfloop query="CountyIDs" group="id">
	
	<cfquery datasource="covid-database" name ="currentCaseCount">
		SELECT Date,Count from Cases where CountyID = #id# order by Date desc limit 15;
	</cfquery>	
	<cfquery datasource="covid-database" name ="currentDeathCount">
		SELECT Date,Count from Deaths where CountyID = #id# order by Date desc limit 15;
	</cfquery>	
	
	<cfset recoveryCount = currentCaseCount.Count[15] - currentDeathCount.Count[1]>
	<cfif recoveryCount lt 0>
		<cfset recoveryCount = 0>
	</cfif>
		
	<cfif IsDefined("currentRecoveriesInsert")>
		<cfset currentRecoveriesInsert=listAppend(currentRecoveriesInsert,"('#currentCaseCount.Date[1]#', #id#, #recoveryCount#)",",")>
	<cfelse>	<!---	for first entry	--->
		<cfset currentRecoveriesInsert="INSERT INTO Recoveries (Date, CountyID, Count) VALUES ('#currentCaseCount.Date[1]#', #id#, #recoveryCount#)">
	</cfif>
	
</cfloop>
			
<cfquery datasource="covid-database">
	#preserveSingleQuotes(currentRecoveriesInsert)#;
</cfquery>
