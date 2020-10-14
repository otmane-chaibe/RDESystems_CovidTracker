
<cfhttp url="https://github.com/nytimes/covid-19-data/blob/master/live/us-counties.csv">
<cfset sStartString = cfhttp.filecontent>
<cfset sStartTag = FindNoCase('<tbody>', sStartString)+8>
<cfset sTempString = RemoveChars(sStartString,1, sStartTag-1)>
<cfset sEndTag = FindNoCase("</tbody>", sTempString)>
<cfset sFinalString = RemoveChars(sTempString,sEndTag-7,len(sTempString))>
<cfset test = REReplace(sFinalString,'<tr id="LC[0-9]+" class="js-file-line">',"","all")>
<cfset test2 = REReplace(test,'<td id="L[0-9]+" class="blob-num js-line-number" data-line-number="[0-9]+"></td>',"","all")>
<cfset test3 = replace(test2,"<td>","","all")>
	
<cfscript>
	myArray=listToArray(test3,"</tr>",false,true)
</cfscript>
<cfloop array = #myArray# index="ListItem">
	<cfscript>
	temp=listToArray(#ListItem#,"</td>",false,true)
	</cfscript>
	<cfoutput>
	  #temp[10]#<br/>
	 </cfoutput>
</cfloop>
	
	<!---

<cfoutput>
   #test3#
</cfoutput>

<cfscript>
  
</cfscript>
--->
	