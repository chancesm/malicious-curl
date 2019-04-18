Malicious-Curl
=================

This simple NodeJS with Express application responds on two endpoints: '/', and '/script.sh'.
If the requester is using curl to access the endpoint, a different response will be sent than what would be seen in a browser.


The Idea
------------
My professor pointed out how common it is to see the command: "`curl <SITE> | bash`" in online documentation. In my personal experience I tend to first open the link in a browser to review the script before sending it to bash from curl, just to be safe. We discussed whether or not it would be possible to send a different payload based on whether or not the user is accessing the endpoint from curl. This project is a basic implementation of that concept. While navigating to '/script.sh' in the browser will print out a simple hello world bash script, accessing that endpoint with curl will result in retrieving a simple fork bomb script. The possibilities are endless, and in the future I would like to implement User-Agent level routers for an application, instead of checking for curl in each route definition.


Made by Chance Murray
-------------------


