# stall-monitor-node
node.js web service for stall monitor

## What is stall monitor?
Stall Monitor is a project using a [spark](http://spark.io), a mac OS menubar app built in Swift, and this node.js web service.
The spark core detects when the bathroom stall door is locked (via reed switch) and relays the status to a web service which then feeds the OS X app.

- Reed switch opens/closes
- Relays status update to web service
- Web service stores status in mongodb
- OS X app pings webservice on regular intervals to check for changes in status
- OS X app shows icon in menubar indicating if the stall door is open or closed
