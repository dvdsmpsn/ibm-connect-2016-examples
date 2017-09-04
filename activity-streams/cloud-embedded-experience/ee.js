/*************
 * POLYFILLS - for older browsers
 *************/

/**
 * Console-polyfill. MIT license.
 * https://github.com/paulmillr/console-polyfill
 * Make it safe to do console.log() always.
 */
(function(global) {
	'use strict';
	global.console = global.console || {};
	var con = global.console;
	var prop, method;
	var empty = {};
	var dummy = function() {};
	var properties = 'memory'.split(',');
	var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
		'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
		'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
	while (method = methods.pop()) if (!con[method]) con[method] = dummy;
	})(typeof window === 'undefined' ? this : window);

/**
 * String.endsWith polyfill 
 * See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 */
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(searchString, position) {
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}


/*************
 * MAIN LOGIC
 *************/

$(function(){
	
	var Connect2016 = {
		embeddedExperience: {
			
			/**
			 * Load the results into the DOM
			 */
			loadData: function (data) {	
				
				if (typeof data.context === 'string') {
					data.context = JSON.parse(data.context); // context data in string form :(
				}
							
				if (typeof data.context.customPayload.videoId === 'string') {	
					$('iframe:first').attr('src', '//www.youtube.com/embed/' + data.context.customPayload.videoId );	
					$('a:first').attr('href', '//www.youtube.com/watch?v=' + data.context.customPayload.videoId)
					  .html(data.context.customPayload.title);	
				} else {
					console.error(' ++ customPayload.videoId not found in the context: ', data.context);
				}		
			},
			
			/**
			 * Processes the events from the pubsub
			 * 
			 * @param event
			 */
			receiveMessage: function (event) {
				console.log('event received: ' + event.origin);
				
				// only accept messages from IBM Connections Cloud domains
				if (event.origin.endsWith('.collabservnext.com') || event.origin.endsWith('.collabserv.com')) {
					var data = JSON.parse(event.data);
					console.log('Event Data:', data);
					Connect2016.embeddedExperience.loadData(data);									
				} else {
					console.log(' ++ Event from Unsupported Domain ' + event.origin);
				}
			},
			
			/**
			 * Receives the published message
			 * Adds the event listener that takes a message from any pubsub producer.
			 */
			loadMessages: function() {
				// Assumes IE9+
				window.addEventListener('message', Connect2016.embeddedExperience.receiveMessage, false);
			}	
		}
	};
	
	
	Connect2016.embeddedExperience.loadMessages();
	
	
	/*********************
	 * TESTING LOGIC HERE
	 *********************/
	if (window.top === window.self) {
		// for testing, load example data
		Connect2016.embeddedExperience.loadData({
			context: {
				customPayload: {
					"videoId": "aKdV5FvXLuI",
					"title": "DR does Alphabet Aerobics"
				}
			}
		});
	}	
	
	$('#resizeEe').on('click', function (e) {
		e.preventDefault();
		var height = $('#eeHeight').val();
		
		parent.postMessage({
			command: 'adjustHeight',
			height: height			
		}, '*');
	});
});	
