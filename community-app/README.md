## Community Apps

As an organization administrator, perform an HTTP POST request using the following information:

* URL: <sc host>/appregistry/api/v1/extensions/
Use the same host name that you specified in the UrlWidget.json file.
* Header: Content-Type: application/json
* Content (body): The content of the UrlWidget.json file.

# Adding Community Apps
## Install


````
# for Basic Auth
export USERNAME=david@appfusions.com
export PASSWORD=******

curl --user $USERNAME:$PASSWORD \
    https://apps.collabservnext.com/appregistry/api/v1/extensions/ \
    -X POST  -L -H "Content-type: application/json" \
    --data-binary @skeleton.json \
    -i -v --insecure
	
````	


If all goes well, you'll get something like this in the response (**201 Created**):

````
* Adding handle: conn: 0x7fe860810800
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7fe860810800) send_pipe: 1, recv_pipe: 0
* About to connect() to apps.collabservnext.com port 443 (#0)
*   Trying 5.10.120.42...
* Connected to apps.collabservnext.com (5.10.120.42) port 443 (#0)
* TLS 1.2 connection using TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
* Server certificate: apps.collabservnext.com
* Server certificate: GeoTrust SSL CA - G3
* Server certificate: GeoTrust Global CA
* Server auth using Basic with user 'david@appfusions.com'
> POST /appregistry/api/v1/extensions/ HTTP/1.1
> Authorization: Basic ****************
> User-Agent: curl/7.30.0
> Host: apps.collabservnext.com
> Accept: */*
> Content-type: application/json
> Content-Length: 923
> 
* upload completely sent off: 923 out of 923 bytes
< HTTP/1.1 201 Created
HTTP/1.1 201 Created
< content-language: en-US
content-language: en-US
< content-type: application/json
content-type: application/json
< date: Thu, 17 Sep 2015 16:36:14 GMT
date: Thu, 17 Sep 2015 16:36:14 GMT
< p3p: CP="NON CUR OTPi OUR NOR UNI"
p3p: CP="NON CUR OTPi OUR NOR UNI"
< vary: Accept-Encoding
vary: Accept-Encoding
< transfer-encoding: chunked
transfer-encoding: chunked
< apim-session-id: 2066165704
apim-session-id: 2066165704
< x-powered-by: Servlet/3.0
x-powered-by: Servlet/3.0
< cache-control: no-cache="set-cookie, set-cookie2", private, must-revalidate
cache-control: no-cache="set-cookie, set-cookie2", private, must-revalidate
< expires: Thu, 01 Dec 1994 16:00:00 GMT
expires: Thu, 01 Dec 1994 16:00:00 GMT
< Set-Cookie: LtpaToken2=****************; Path=/
Set-Cookie: LtpaToken2=****************; Path=/
< Set-Cookie: JSESSIONID=0000rQAPohG0Ng1zqZ0EImM_m9y:19tlvquhf; Path=/
Set-Cookie: JSESSIONID=0000rQAPohG0Ng1zqZ0EImM_m9y:19tlvquhf; Path=/
< Set-Cookie: BIGipServer~CA1A~CA1A-AC-9084=523333642.31779.0000; Path=/
Set-Cookie: BIGipServer~CA1A~CA1A-AC-9084=523333642.31779.0000; Path=/
< Set-Cookie: BIGipServer~CA1A~CA1A-WebSEAL-80=422604810.20480.0000; path=/
Set-Cookie: BIGipServer~CA1A~CA1A-WebSEAL-80=422604810.20480.0000; path=/

< 
* Connection #0 to host apps.collabservnext.com left intact
{"name":"Skeleton App","description":"The most basic app","type":"community_widget","urls":{},"payload":{"defId":"Skeleton App","showInPalette":"true","primaryWidget":"true","modes":"view","themes":"wpthemeThinwpthemeNarrowwpthemeWidewpthemeBanner","url":"https://apps.collabservnext.com/connections/resources/web/com.ibm.social.urliWidget.web.resources/widget/urlWidget.xml","itemSet":[{"value":"https://dl.dropboxusercontent.com/u/658119/ibm-connect-2016/community-app/skeleton.html","name":"url"},{"value":"100%","name":"width"},{"value":"400px","name":"height"}]}}

````	

**Update:** You can now install apps using a UI at https://apps.collabservnext.com/appregistry/#/commonExtension/ 

This method using `curl` is still entirely valid though.

## Check it's installed

If all has gone well, I'd expect the app you added to be listed in:

````
GET https://apps.collabservnext.com/appregistry/api/v1/extensions?limit=500
````
The `?limit=500` query string ensures that you see all (or at least the 500) of the extensions installed for your organisation.

**Update:** Instead you could view the apps here -- https://apps.collabservnext.com/appregistry/#/displayApps -- but beware as it's not fully baked, so not all the apps show up all the time. 

If you are unsure, https://apps.collabservnext.com/appregistry/api/v1/extensions?limit=500 is the source of truth.

Also, if you accidentally add 2 or more apps with the same `defId`, things do not go well in the UI, so go to https://apps.collabservnext.com/appregistry/api/v1/extensions?limit=500, find the `extid` and delete the excess apps (see below).


## Installing Wolfenstein 3D




````
# for Basic Auth
export USERNAME=david@appfusions.com
export PASSWORD=******

curl --user $USERNAME:$PASSWORD \
    https://apps.collabservnext.com/appregistry/api/v1/extensions/ \
    -X POST  -L -H "Content-type: application/json" \
    --data-binary @wolfenstein.json \
    -i -v --insecure	
````	


# Using Community Apps

After ~5 minutes, go to your community and the app should be there. I've not seen this in real life yet.


## Deleting a Community App

````
curl --user USERNAME:PASSWORD \
    https://apps.collabservnext.com/appregistry/api/v1/extensions/{COMMUNITY_APP_ID_HERE} \
    -X DELETE  -L -H "Content-type: application/json" \
    -i -v --insecure
````	



