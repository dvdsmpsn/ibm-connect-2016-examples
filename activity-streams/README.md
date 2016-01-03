# IBM Connections Cloud Activity Streams


## Some initial setup

Rather than exposing user credentials in a presentation, we set them at the beginning and forget them.

We're posting to the activity stream for a community app, so set the UUID first too.

````

# for Basic Auth
export USERNAME=david@appfusions.com
export PASSWORD=******

# for OAuth2
export BEARER=****************************************************************************************************


# Your Couumnity UUID
export COMMUNITY_UUID=bcca6081-d575-499f-829b-9a81550fa612

````


## Retreiving Activity Streams


### Get details of an activity stream

````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -i -v --insecure
````


## Posting Activity Streams



### 1. Basic Activity

Using **Basic Auth:**

````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-01.json \
     -i -v --insecure
````

Using **OAuth2 Bearer Token**:

````
curl https://apps.collabservnext.com/connections/opensocial/oauth/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     -X POST -L \
     -H "Authorization:Bearer $BEARER" \
	 -H "Content-type: application/json" \
	 --data-binary @activity-01.json \
     -i -v --insecure
````

**Result:**

![activity-01.png]

### 2. Basic Activity with title


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-02.json \
     -i -v --insecure
````

**Result:**

![activity-02.png]

### 3. Activity with templated title


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-03.json \
     -i -v --insecure
````

**Result:**

![activity-03.png]

### 4. Activity with templated title & target


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-04.json \
     -i -v --insecure
````


**Result:**

![activity-04.png]

![activity-04.standard-ee.png]

### 5. Activity with templated title & rollup (doesn't work)


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-05.json \
     -i -v --insecure
````


**Result:**

![activity-05.png]


### 6. Activity with generator


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-06.json \
     -i -v --insecure
````


**Result:**

![activity-06.png]


### 7. Activity with basic HTML content


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-07.json \
     -i -v --insecure
````


**Result:**

![activity-07.png]


### 8. Activity with opensocial/embedded experience


````
curl https://apps.collabservnext.com/connections/opensocial/basic/rest/activitystreams/urn:lsid:lconn.ibm.com:communities.community:$COMMUNITY_UUID/@all/@all \
     --user $USERNAME:$PASSWORD \
     -X POST -L -H "Content-type: application/json" \
     --data-binary @activity-08.json \
     -i -v --insecure
````


**Result:**

![activity-08.png]
