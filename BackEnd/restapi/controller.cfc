<!--- 		the REST API (WIP)		--->
<cfcomponent rest="true" restpath="APIroutes">

  <cfobject name="obj" component="cfc.stat">

  <cffunction name="stats" restpath="stats" access="remote" returntype="struct" httpmethod="POST" produces="application/json">

    <cfargument name="structform" type="any" required="yes">
    <cfset var response = {}>
    <cfset response = obj.getStats(structform)>
    <cfreturn response>
		
  </cffunction>
		
</cfcomponent>