<!--- 	 coldfusion component for retrieving case states for counties (WIP)		--->
<cfcomponent>
  <cffunction name="getStats" access="public" output="false" returntype="struct">
    <cfargument name="structform" required="true" type="any" />
    <cfset var resObj = {}>
	<cfquery datasource="covid-database" name ="ID">
		SELECT ID FROM Counties where Name = "#structform.county#";
	</cfquery>	
	<cfquery datasource="covid-database" name ="test">
		SELECT * FROM Cases where CountyID = "#ID.id#" LIMIT 20;
	</cfquery>	
	<cfset resObj[structform.county] = test>
    <cfreturn resObj>
  </cffunction>
</cfcomponent> 