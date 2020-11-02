<!---		this file is automatically called by index.cfm. the pupose of this file is to register the REST service --->
<cfcomponent output="false">
	<cfset this.ressettings.skipcfcwitherror = true>
	<cffunction name="onApplicationStart" returntype="boolean">
		<cfset restInitApplication(getDirectoryFromPath(getCurrentTemplatePath()) & 'restapi', 'controller')>
		<cfreturn true>
	</cffunction>
</cfcomponent>