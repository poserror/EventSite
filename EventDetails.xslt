<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Event Details</title> 
                <style>
                    table {
                        font-family: arial, sans-serif;
                        border-collapse: collapse;
                        width: 70%;
                        float: center;
                        margin: 0 auto;
                    }

                    td, th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: lightgray;
                    }
                    tr:nth-child(odd) {
                        background-color: gray;
                    }
                    body{
                        background-image: url("background.jpg");
                    }
                    tr:hover{
                         background-color: #A0A0A0;
                    }
                    #eventDetails:link, #eventDetails:visited {
                        color: wheat;
                        padding: 14px 25px;
                        text-align: center;
                        font-size: 20px;
                        text-decoration: none;
                    }
                    #eventDetails:hover, #eventDetails:active {
                        background-color: brown;
                        border-radius: 50px;
                    }
                </style>
            </head>
            <body>
			<h1 align="center">
                <font face = "Algerian" size="5" color="white">Details of Upcoming Events</font>
            </h1>
                <a href="EventManagementWePage.html" id="eventDetails">Go Back</a>
                <table>
                    <tr>
                        <th><font size="5">Name</font></th>
                        <th><font size="5">Date</font></th>
                        <th><font size="5">Fees</font></th>
                        <th><font size="5">Category </font></th>
                    </tr>
                    <xsl:for-each select="EventDetails/event">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="date"/></td>
                            <td><xsl:value-of select="fees"/></td>
                            <td><xsl:value-of select="category"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>