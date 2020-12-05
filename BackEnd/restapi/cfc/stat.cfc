<!--- 	 coldfusion component for retrieving case states for counties (WIP)		--->
<cfcomponent>
  <cffunction name="getStats" access="public" output="false" returntype="struct">
    <cfargument name="structform" required="true" type="any" />
    <cfset var resObj = {}>
 	<cfset queryString  = "WHERE ">
		
	<cfif IsDefined("structform.counties") >
		<cfset queryString  = queryString & "(Co.Name LIKE ">
		<cfloop array = #structform.counties# index="County">
			<cfset queryString  = queryString & "'%#County#'">
			<cfif #County# neq ArrayLast(#structform.counties#)>
				<cfset queryString  = queryString & " OR Co.Name LIKE ">
			</cfif>	
		</cfloop>
		<cfset queryString  = queryString & ") AND ">
	</cfif>
			
	<cfif IsDefined("structform.between")>
			<cfset queryString  = queryString & "Ca.Date BETWEEN '#structform.between[1]#' AND '#structform.between[2]#'">
	</cfif>
		
	<cfif IsDefined("structform.date")>
			<cfset queryString  = queryString & "Ca.Date = '#structform.date#'">
	</cfif>
		
	<cfif IsDefined("structform.range")>
			<cfset queryString  = queryString & "(Ca.Date = '#structform.range[1]#' OR Ca.Date = '#structform.range[2]#')">
	</cfif>
		
	<cfset data = []>
	<cfquery datasource="covid-database" name ="stats">
		select Co.Name as name, Co.ID, Ca.Date as d, Ca.Count as cases, D.Count as deaths, R.Count as recoveries FROM Cases Ca
		JOIN Deaths D
		  ON Ca.CountyID = D.CountyID AND Ca.Date = D.Date
		JOIN Recoveries R
		  ON Ca.CountyID = R.CountyID AND Ca.Date = R.Date
		JOIN Counties Co
		  ON Ca.CountyID = Co.ID
		#preserveSingleQuotes(queryString)#;
	</cfquery>
		
	<cfif IsDefined("structform.range")>
		<cfset countyArray  = []>
		<cfif IsDefined("structform.counties") >
			<cfset countyArray  = #structform.counties#>
		<cfelse>
			
			<cfquery datasource="covid-database" name ="countieNames">
				select Name from Counties; 
			</cfquery>
			
			<cfloop query = "countieNames">
				<cfset ArrayAppend(countyArray, #Name#)>
			</cfloop>
		</cfif>
		
		
		<cfloop array = #countyArray# index="County">
			<cfquery dbtype="query" name ="beginDate">
				select * from stats where name LIKE '%#County#' AND d = '#structform.range[1]#';
			</cfquery>
			
			<cfquery dbtype="query" name ="endDate">
				select * from stats where name LIKE '%#County#' AND d = '#structform.range[2]#';
			</cfquery>
			
			<cfscript>
				stateCounty=listToArray(endDate.name[1],":",false,true);
				
				bCases = ( beginDate.RecordCount > 0 ? beginDate.cases[1] : 0);
				bDeaths = ( beginDate.RecordCount > 0 ? beginDate.deaths[1] : 0);
				bRecoveries = ( beginDate.RecordCount > 0 ? beginDate.recoveries[1] : 0);
				eCases = ( endDate.RecordCount > 0 ? endDate.cases[1] : 0);
				eDeaths = ( endDate.RecordCount > 0 ? endDate.deaths[1] : 0);
				eRecoveries = ( endDate.RecordCount > 0 ? endDate.recoveries[1] : 0);
				
				row = {
				  BeginDate:"#structform.range[1]#",
				  EndDate:"#structform.range[2]#",
				  ID:"#beginDate.ID#",
				  State: "#stateCounty[1]#",
				  Name: "#stateCounty[2]#",
				  Fips:"#stateCounty[3]#",
				  Recoveries: int(eRecoveries - bRecoveries),
				  ConfirmedCases: int(eCases - bCases),
				  ConfirmedDeaths: int(eDeaths - bDeaths)
			   };
				ArrayAppend(data,row,"false");
			</cfscript>
		</cfloop>
	<cfelse>
		<cfloop index="i" from="1" to="#stats.RecordCount#">
		<cfscript>
			stateCounty=listToArray(stats.name[i],":",false,true);
			row = {
			  Date:"#stats.d[i]#",
			  ID:"#stats.ID[i]#",
			  State: "#stateCounty[1]#",
			  Name: "#stateCounty[2]#",
			  Fips:"#stateCounty[3]#",
			  Recoveries: #stats.recoveries[i]#,
			  ConfirmedCases: #stats.cases[i]#,
			  ConfirmedDeaths: #stats.deaths[i]#
		   };
			ArrayAppend(data,row,"false");
		</cfscript>
	</cfloop>
		
		
	</cfif>
	
	<cfset resObj["Response"] = data>
	<cfset resObj["sql"] = queryString>
    <cfreturn resObj>
  </cffunction>
</cfcomponent> 
