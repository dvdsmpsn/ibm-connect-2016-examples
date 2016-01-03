# IBM Connections Header

Add the IBM Connections Header to an external app

This example uses the [Start Bootstrap Admin](http://startbootstrap.com/template-overviews/sb-admin/) template as an example of a page layout.



## Adding the IBM Connections header into your external app

* Ignore the documentation
* Don't *ever* add the Lotus/OneUI classes to your body tag

Add an empty div as the first body element **only** when you want to display the IBM Connections header in your external app:

````
...
<body>
  <div id="connections-banner" class="lotusui30 lotusui30_body lotusui30_fonts scloud3"></div>
  ...
</body>
...
````


This **one act** isolates the OneUI styles from the rest of your page, removing untold pain.


Test for the presence of this div and only then inject the IBM Connections banner CSS & JS

````
if ($('#connections-banner').length > 0) {
  $('head').append(
    '<link rel="stylesheet" href="//' + connectionsCloudHostname + '/theming/theme/css/3" type="text/css" />' +
    '<script src="//' + connectionsCloudHostname + '/navbar/banner/partner/connections-banner?oneui=3"><\/script>'
  );
}
````

**Note:** You'll need some way of collecting the correct `connectionsCloudHostname`. It will likely be one of these:

* `apps.na.collabserv.com` - North America
* `apps.ce.collabserv.com` - Central Europe
* `apps.ap.collabserv.com` - Asia Pacific

