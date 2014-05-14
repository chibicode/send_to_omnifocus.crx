(function() {
  var name = document.title;
  var note = window.location;
  var selection = window.getSelection().toString();

  if (selection !== '') {
    note += "\n" + selection;
  }

  var url = 'omnifocus:///add?name='+encodeURIComponent(name)+'&note='+encodeURIComponent(note);
  var newWindow =  window.open(url);
  setTimeout(function() { newWindow.close(); }, 1000);

  // window.location = url does not work repetitively because of http://code.google.com/p/chromium/issues/detail?id=104853
  // document.body.insertAdjacentHTML('afterEnd', '<iframe src="'+url+'" style="display:none" />');
})();
