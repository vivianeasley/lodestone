APP.MainParentPart = (function ( ) {

  function initSelf ( ) {
    var fData = [ ];
    var self;

    init( );

    return ;

    function init ( ) {
      var listItem   = false;
      var topNode    = [ ];
      var targetNode = document.querySelector('#uber-part');
      var partHTML   = HTML( );
      var events     = [ ];
      var subParts   = [
        { partPathInit:APP.MainHeaderPart.initSelf, target:'.main-header-part', data:fData, topSelfNode:topNode },
      ];

      APP.RenderModule.render( partHTML, targetNode, events, subParts, listItem );

    }

    function HTML ( ) {
      return "<div class='uber-part'>\
          <div class='main-header-part'>\
          </div>\
          <div class='main-body-part'>\
          </div>\
          </div>\
        </div>\
      ";
    }

  }

  return {
    initSelf:initSelf,

  };

})( );




