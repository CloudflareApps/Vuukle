window.isVuukle = window.isVuukle || (function() {
  var URL_FOR_IMAGES = "https://vuukle.com/CSS/shapes_and_icons/";
  var VUUKLE_BUTTON_ID = 'vuukle-button';
  var VUUKLE_MODAL_BLOCKER_ID = 'vuukle-modal-blocker';
  var VUUKLE_MODAL_ID = 'vuukle-modal';
  var VUUKLE_MODAL_SCROLL_WRAPPER_ID = 'vuukle-modal-scroll-wrapper';
  var VUUKLE_MODAL_CLOSE_ID = 'vuukle-close';
  var VUUKLE_PARRENT_HOST = window.location.hostname;

  function windowWidth() {
    return isMobile ? window.innerWidth : document.documentElement.clientWidth
  };

  function windowHeight() {
    return window.innerHeight
  };

  function $(id) {
    return document.getElementById(id)
  };

  function addListener(node, event, listener) {
    if (node.addEventListener) node.addEventListener(event, listener, false);
    else if (node.attachEvent) node.attachEvent('on' + event, listener);
  };

  function removeListener(node, event, listener) {
    if (node.removeEventListener) node.removeEventListener(event, listener, false);
    else if (node.detachEvent) node.detachEvent('on' + event, listener);
  };
  var callMeOnce = function(f, wait) {
    var now = Date.now || function() {
      return new Date().getTime()
    };
    var timeout, args, context, timestamp, result;
    var later = function() {
      var last = now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = f.apply(context, args);
        context = args = null;
      }
    };
    return function() {
      timestamp = now();
      context = this;
      args = arguments;
      if (!timeout)
        timeout = setTimeout(later, wait);
      return result;
    };
  };

  var isMobile = (function(a) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
  })(navigator.userAgent || navigator.vendor || window.opera);

  function isSmallWindow() {
    return isMobile || windowWidth() <= 640
  };
  var isIPhone = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
  var zIndex = 10000;
  var _padding = 10;

  function correctModalSize(modal) {
    var s = modal.style;
    if (!isSmallWindow()) {
      var w = 600,
        h = 400;
      s.width = w + 'px';
      s.height = h + 'px';
      s.top = s.left = '50%';
      s.borderRadius = '4px';
      s.marginTop = (-h / 2 - _padding) + 'px';
      s.marginLeft = (-w / 2 - _padding) + 'px';
    } else {
      var _minus = _padding * 2;
      s.width = windowWidth() - _minus + 'px';
      s.height = windowHeight() - _minus + 'px';
      s.top = s.left = 0;
      s.borderRadius = 0;
      s.marginTop = s.marginLeft = '';
    }
  };

  function correctCloseButtonPosition(close) {
    var s = isSmallWindow();
    close.style.left = (s ? 3 : -15) + 'px';
    close.style.top = (s ? 4 : -13) + 'px';
  };

  function createAndShowModalWindow() {
    var blocker = document.createElement('div');
    blocker.id = VUUKLE_MODAL_BLOCKER_ID;
    blocker.style.cssText = '' +
      'visibility: hidden;' +
      'opacity: 0;' +
      'position: fixed;' +
      'top: 0; right: 0; bottom: 0; left: 0;' +
      'background: rgba(0,0,0, 0.75);' +
      'transition: opacity 200ms ease-in;' +
      'z-index: ' + zIndex + ';'

    var modal = document.createElement('div');
    modal.id = VUUKLE_MODAL_ID;
    modal.style.cssText = '' +
      'visibility: hidden;' +
      'opacity:0;' +
      'position: fixed;' +
      'background: #fff;' +
      'z-index: ' + (zIndex + 1) + ';' +
      'padding: ' + _padding + 'px;' +
      'box-shadow: rgb(0,0,0) 0px 0px 10px;' +
      'transition: opacity 400ms ease-in;' +
      'box-sizing: content-box;'

    var innerModal = '<a href="javascript:;" title="Close" id="vuukle-close" style="z-index:100;position:absolute;width:30px;height:30px;background-image:url(' + URL_FOR_IMAGES + 'close.png);"></a>';
    if (isIPhone)
      innerModal += '<div id="' + VUUKLE_MODAL_SCROLL_WRAPPER_ID + '" style="-webkit-overflow-scrolling:touch;overflow-y:scroll;width:100%;height:100%;"></div>';
    modal.innerHTML = innerModal;
    var df = document.createDocumentFragment();
    df.appendChild(blocker);
    df.appendChild(modal);
    document.getElementsByTagName('body')[0].appendChild(df);
    var close = $(VUUKLE_MODAL_CLOSE_ID);

    function _corrector() {
      correctModalSize(modal);
      correctCloseButtonPosition(close);
    };
    _corrector();
    var funcForResize = callMeOnce(_corrector, 77);
    addListener(window, 'resize', funcForResize);

    function _close() {
      modal.parentNode.removeChild(modal);
      blocker.parentNode.removeChild(blocker);
      removeListener(window, 'resize', funcForResize);
      return false;
    };
    addListener(blocker, 'click', _close);
    addListener(close, 'click', _close);

    function _show(n) {
      n.style.visibility = 'visible';
      n.style.opacity = 1;
    };
    _show(blocker);
    _show(modal);
  };
  var vuukleButton = (function() {
    var button = document.createElement('div');
    button.className = VUUKLE_BUTTON_ID;
    var css = '' +
      'display: block;' +
      'outline: none;' +
      'position: fixed;' +
      'background-repeat: no-repeat;' +
      'cursor: pointer;' +
      'z-index: ' + (zIndex - 1) + ';';
    var orientation = window._VUUKLE_LEGACY ? window._VUUKLE_LEGACY.orientation : 'right'

    if (!isMobile) {
      if (orientation === "left") {
        css += '' +
          'width: 32px;' +
          'height: 131px;' +
          'top: 30%;' +
          'left: 0;' +
          'background-image: url(' + URL_FOR_IMAGES + 'button_vertical_2.png);'
      } else {
        css += '' +
          'width: 32px;' +
          'height: 131px;' +
          'top: 30%;' +
          'right: 0;' +
          'background-image: url(' + URL_FOR_IMAGES + 'button_vertical_2.png);'
      }
    } else {
      css += '' +
        'width: 131px;' +
        'height: 32px;' +
        'bottom: 7px;' +
        'right: 7px;' +
        'background-image: url(' + URL_FOR_IMAGES + 'button_vertical_3.png);'
    }
    button.style.cssText = css;
    return document.body.appendChild(button);
  })();
  addListener(vuukleButton, 'click', function(e) {
    var vuuklePlatformLoaded = false,
      ratingUrl = "https://vuukle.com/rating.aspx?uri=",
      iframeVuukle;

    function vuukleWrapper(apiPageInfo) {
      if (vuuklePlatformLoaded)
        return;
      var vuukdiv = document.createElement("div");
      if (apiPageInfo.title != null) {
        apiPageInfo.title = apiPageInfo.title.replace("&nbsp;", " ");
        apiPageInfo.title = apiPageInfo.title.replace(/&[^;]+;/g, '');
        apiPageInfo.title = apiPageInfo.title.replace(/(<([^>]+)>)/ig, "");
        vuukdiv.innerHTML = apiPageInfo.title;
        apiPageInfo.title = vuukdiv.textContent || vuukdiv.innerText || "";
      }
      iframeVuukle = document.createElement('iframe');
      var url = document.URL.split('#')[0];
      if (apiPageInfo.url != null) {
        url = apiPageInfo.url;
      }
      iframeVuukle.src = ratingUrl + escape(url) + '&h=' + escape(apiPageInfo.title) + '&img=' + escape(apiPageInfo.img) + '&host=' + VUUKLE_PARRENT_HOST + '&vv=3.20';
      iframeVuukle.style.overflow = 'hidden';
      iframeVuukle.name = 'vuukle_proxy';
      iframeVuukle.id = 'vuukle_proxy';
      iframeVuukle.frameBorder = 0;
      if (!isIPhone) {
        iframeVuukle.scrolling = 'yes';
        iframeVuukle.style.cssText += ';width:100%;height:100%;';
      } else {
        iframeVuukle.scrolling = 'no';
        iframeVuukle.style.cssText += ';width:100%;min-width:100%;width:100px;*width:100%;';
      }
      $(!isIPhone ? VUUKLE_MODAL_ID : VUUKLE_MODAL_SCROLL_WRAPPER_ID).appendChild(iframeVuukle);
      vuuklePlatformLoaded = true;
    }

    function createVuuklePlatform() {
      var vuuklepageInfo = new Object();
      var metas = document.getElementsByTagName('head')[0].getElementsByTagName('meta');
      for (var i = 0, L = metas.length; i < L; i++) {
        if (metas[i].name === 'description') {} else {
          var p = metas[i].getAttribute("property");
          var c = metas[i].content;
          if (p === 'og:title') {
            vuuklepageInfo.title = c;
          } else if (p === 'og:image') {
            vuuklepageInfo.img = c;
          } else if (p === 'og:url') {
            vuuklepageInfo.url = c;
          }
        }
      }
      vuukleWrapper(vuuklepageInfo);
    };;
    createAndShowModalWindow();
    createVuuklePlatform();
  });
  return true;
})(window);
