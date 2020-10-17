<cfhttp url="https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv">
<cfset startString = cfhttp.filecontent>
<cfset startTag = FindNoCase('<tbody>', startString)+7>
<cfset tempString = RemoveChars(StartString,1, startTag)>
<cfset endTag = FindNoCase("</tbody>", tempString)>
<cfset finalString = RemoveChars(tempString,endTag-7,len(tempString))>
<cfset removeTRID = REReplace(finalString,'<tr id="LC[0-9]+" class="js-file-line">',"","all")>
<cfset removeTDID = REReplace(removeTRID,'<td id="L[0-9]+" class="blob-num js-line-number" data-line-number="[0-9]+"></td>',"","all")>
<cfset removeTD = replace(removeTDID,"<td>","","all")>
<cfset triStateArea = "New Jersey,New York,Connecticut">
	<cfloop list="#triStateArea#" index="i">
	<cfoutput> #i#</cfoutput>
</cfloop>
<cfset CSVdata=listToArray(removeTD,"</tr>",false,true)>
<cfloop array = #CSVdata# index="ListItem">
	<cfset temp=listToArray(#ListItem#,"</td>",true,true)>
		
	<!---	if state of current row is in the tri state area	--->
		<cfoutput>#temp[3]#</cfoutput>
	<cfif #ListContains(triStateArea,temp[3])#>
		<cfoutput>WORKS</cfoutput>
		<!---	get county id	--->
		<cfset stateCounty = temp[3] & ":" & temp[2]>
		<cfquery datasource="covid-database" name=countyID>
			SELECT id FROM Counties WHERE Name ="#stateCounty#";
		</cfquery>
		<cfset id = CountyID.id>
		
		<!---	insert/update Cases entry for current day	--->
		<cfquery datasource="covid-database" name=checkCases>
			SELECT * FROM Cases WHERE Date = "#temp[1]#" AND CountyID = #id#;
		</cfquery>

		<cfif checkCases.recordcount GT 0>
			<cfquery datasource="covid-database">
				UPDATE Cases
				SET Count = #temp[5]#
				WHERE Date = "#temp[1]#" AND CountyID = #id#;
			</cfquery>
		<cfelse>
			<cfquery datasource="covid-database">
			INSERT INTO Cases (Date, CountyID, Count)
			VALUES ('#temp[1]#', #id#, #temp[5]#);
			</cfquery>
		</cfif>


		<!---	insert/update Deaths entry for current day	--->
		<cfquery datasource="covid-database" name=checkDeaths>
			SELECT * FROM Deaths WHERE Date = "#temp[1]#" AND CountyID = #id#;
		</cfquery>

		<cfif checkDeaths.recordcount GT 0>
			<cfquery datasource="covid-database">
				UPDATE Deaths
				SET Count = #temp[6]#
				WHERE Date = "#temp[1]#" AND CountyID = #id#;
			</cfquery>
		<cfelse>
			<cfquery datasource="covid-database">
				INSERT INTO Deaths (Date, CountyID, Count)
				VALUES ('#temp[1]#', #id#, #temp[6]#);
			</cfquery>
		</cfif>
	</cfif>
</cfloop>
	
	<!---

<cfoutput>
   #test3#
</cfoutput>

<cfscript>
  
</cfscript>
--->
	