APP.RenderModule = (function ( ) {

    var fListItem ;

    return {
      render:render,
      initSubParts:initSubParts,

    };

    function render ( partHTML, targetNode, events, subParts, listItem, callback ) {
      var empty ;
      fListItem = listItem;

      var tempNode       = document.createElement( 'div' );
      tempNode.innerHTML = partHTML;
      var newNode        = tempNode.firstChild;
      var childNodes     = newNode.childNodes.length;
      if ( events.length !== 0 ) {
        attachEvents( newNode, events );
      }

      targetNode.appendChild( newNode );

      if ( subParts.length !== 0 ) {
        empty = newNode.childNodes.length < 2;
        initSubParts( newNode, subParts, empty );
      }

      if ( callback !== undefined ) {
        callback( newNode );
      }

    }

    function attachEvents( node, events ) {
      var tempNodeTwo ;
      for (var i = 0; i < events.length; i++) {
        tempNodeTwo = node.querySelector( events[i].selector );
        tempNodeTwo.addEventListener(events[i].event, events[i].call, false );
      }
    }

    function initSubParts( node, subParts, empty ) {
      var tempNodeThree ;
      var topNode = [ ];

      if ( fListItem === true ) {
        topNode.push( node );

      }

      for (var i = 0; i < subParts.length; i++) {
        if ( empty === true ) {
          tempNodeThree = node;
        } else {
          tempNodeThree = node.querySelector( subParts[i].target );
        }

        if ( subParts[i].data.length > 1 ) {
          listSubParts( subParts[i] );
        } else {
          subParts[i].partPathInit( tempNodeThree, subParts[i].data, topNode );
        }

      }

      function listSubParts ( part ) {
        var num = 1;
        for (var j = 0; j < part.data.length; j++) {
          part.partPathInit( tempNodeThree, part.data[j], topNode, num );
          num++;
        }
      }

    }

})( );


