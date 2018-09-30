
    var feed = new Instafeed({
        get: 'user',
        userId: '1500802915',
        clientId: '250d10fbfe054e14ac868426179b2f7b',
        accessToken:'1500802915.1677ed0.b9a04e0ff89b42e7976f339beaf42b34',
        resolution:'standard_resolution',
        sortBy:'most-liked',
        template: '<div class="col-sm-6 col-md-6 col-lg-4 p-3" style="padding-bottom:15px;"><a href="{{image}}"><div class="imgcontainer"><img src="{{image}}" /></div></a></div>'
    });
    feed.run();
    
 // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
    type:'image',
    
      delegate: 'a',
      gallery:{
        enabled:true
      }
    });

      