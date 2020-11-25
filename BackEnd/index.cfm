<!-- used to call application.cfc	---->
<cfoutput>
	<b>REST API</b> is running at <i>http://{your_server}/rest/controller/APIroutes/</i><br>
	<b>Application root:</b> #getPageContext().getRequest().getRequestURI()#
</cfoutput>

<cfschedule
 action="update"
 task="DBUpdate"
 startDate="10/12/2020"
 startTime="12:00 AM"
 url="http://localhost:8500/Covid%20App/DBUpdate.cfm"
 interval="daily" />
