

# Self study answers

1. What is the purpose of using _sessions_?
	The purpose of sessions is to give access to a sever to store information about a client. It is used to persist authentication information during the client’s use of an app without having to re-log in when new endpoints and client choices are made during browsing a web app. Each session should be unique when a client is using sessions. Cookies help to transmit information between the server and client. 

2. What does bcrypt do to help us store passwords in a secure manner.
	bcrypt helps by using functions that hash passwords.

3. What does bcrypt do to slow down attackers?
Bcrypt implements salt for the developer, which is used to force uniqueness to the hashing process and adds a lot of data to make passwords difficult to decrypt. 

4. What are the three parts of the JSON Web Token?

The three parts of a JSON web token are the header, the payload and signature. 