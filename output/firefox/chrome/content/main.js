// True if the current version of the extension has something to show in an update notification
var hasReleaseNotes = false;

var options, viewWindow = null;

var lastOpen = 0;

var windowInterval, tabInterval;

// Performs an ajax request
function ajaxRequest(request, callback) {
    var xhr = kango.xhr.getXMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            } else {
                callback(null);
            }
        }
    };
    xhr.open(request.method, request.url, true);
    for (var i in request.headers) {
        xhr.setRequestHeader(request.headers[i].header, request.headers[i].value);
    }
    xhr.send(request.data);
}

function init() {
    // Load options
    options = loadOptions();

    // Bind events
	kango.addMessageListener('ajaxGet', function(message) {
		ajaxRequest({url: message.data.url, method:'GET'}, function(response){
			message.target.dispatchMessage('ajaxGet', response);
		});
	});
    
	kango.addMessageListener('ajaxRequest', function(message) {
		ajaxRequest(message.data, function(response){
			message.target.dispatchMessage('ajaxRequest', response);
		});
	});
        
	kango.addMessageListener('getOptions', function(message) {
		message.target.dispatchMessage('getOptions', options);
	});
	
	kango.addMessageListener('setOption', function(message) {
		request = message.data;
	    options[request.name] = request.value;
	    kango.storage.setItem('options', JSON.stringify(options));
	    sendOptions(request.options);		
	});
	
	kango.addMessageListener('optionsChanged', function(message) {
		kango.console.log('Options changed!');
		request = message.data;
	    options = request.options;	
	});
	
	kango.addMessageListener('saveOptions', function(message) {
		request = message.data;
        kango.storage.setItem('options', JSON.stringify(request.options));
        sendOptions(request.options);	
	});	
	
	kango.addMessageListener('setItem', function(message) {
		request = message.data;
        kango.storage.setItem(request.id, request.data);
	});	
	
	kango.addMessageListener('getItem', function(message) {
		request = message.data;
		message.target.dispatchMessage('getItem', kango.storage.getItem(request.id));
	});
	
	
	kango.addMessageListener('removeItem', function(message) {
		request = message.data;
        kango.storage.removeItem(request.id);
	});	
	
	kango.addMessageListener('openViewWindow', function(message) {
		request = message.data;
		var timeNow = new Date().getTime();
		if(timeNow>(lastOpen+2000)){
			kango.browser.windows.create(request.createData);
			lastOpen = timeNow;
			
				var runCount = 0;
				windowInterval = setInterval(function() {
					runCount++;
					if(runCount > 10) clearInterval(windowInterval);
						kango.browser.tabs.getCurrent(function(tab) {
						kango.console.log('Dispatching message to window: ' + tab.getUrl());
						tab.dispatchMessage('createdWindowOrTab', 'Window');
						});	
				}, 500);									
			
		}
	});
	
	kango.addMessageListener('openViewTab', function(message) {
		request = message.data;
		var timeNow = new Date().getTime();
		if(timeNow>(lastOpen+2000)){
			kango.browser.tabs.create(request.createData);
			lastOpen = timeNow;
				var runCount = 0;
				tabInterval = setInterval(function() {
					runCount++;
					if(runCount > 10) clearInterval(tabInterval);
								kango.browser.tabs.getCurrent(function(tab) {
						kango.console.log('Dispatching message to tab: ' + tab.getUrl());
						tab.dispatchMessage('createdWindowOrTab', 'Tab');
						});
				}, 500);									
				
		}
	});	
	
	kango.addMessageListener('windowRecieved', function(message) {
		clearInterval(windowInterval);
	});
	
	kango.addMessageListener('tabRecieved', function(message) {
		kango.console.log('Got tab message');
		clearInterval(tabInterval);
	});
	
}

init();