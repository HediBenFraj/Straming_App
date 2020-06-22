# Straming_App
this is a streaming app made using Reactjs for the front-end, a simple json file as a database, and an rtmp server for connecting the stream

this a demo of a streaming app with CRUD operations for the users and streams managment.
in this app i used a simple Google Oauth for the authentication method.

TO get this app working on your computer you need to follow these steps : 
    1) clone the project on your machine.
    2) navigate to the client, api, rtmpserver sub-folders in the command prompt and run npm install on all of them.
    3) after that you need to run npm start in those 3 directories.
    ----At this point you should have the application rendered in your browser with the streams available you can now create , edit ,             delete streams.
    4) to start broadcasting a stream, you need a streaming software such as OBS Open Broadcast Studio.
    5) after setting the scene in obs you need to go to the streaming setting select a custom server with this url :rtmp://localhost/live
    6) in the stream key you need to enter the id of the stream you want to stream to ( it appears in the url section when you click on a     stream)
    7) apply setting and start streaming and everything should work fine.
