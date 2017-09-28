/**
 * @description 基础工具库
 * @author      hugin<hxjlucky@gmail.com>
 * @updateTime  2016-02-17T14:47:51+0800
 */
;
import Toast from 'react-native-root-toast';
import {
  AsyncStorage
} from 'react-native';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return (root.Tools = factory());
    });

  } else if (typeof exports === 'object') {
    module.exports = factory();

  } else {
    root.Tools = factory();
  }
}(this || global, function() {
  var Tools = {};
  Tools.VERSION = '0.0.1';


  /**
   * [getParams description]
   * @param       {[string]}                 url [可传可不传]
   * @return      {[object]}                     [参数对象]
   * @description  获取url的参数
   * @author      hugin<hxjlucky@gmail.com>
   * @updateTime  2016-02-17T14:19:40+0800
   */
  Tools.getParams = function(url) {
    var opts = {},
      name, value, i;
    url = url.split('#')[0];
    var idx = url.indexOf('?'),
      search = idx > -1 ? url.substr(idx + 1) : '',
      arrtmp = search.split('&');
    for (var i = 0; i < arrtmp.length; i++) {
      var paramCount = arrtmp[i].indexOf('=');
      if (paramCount > 0) {
        name = arrtmp[i].substring(0, paramCount);
        value = arrtmp[i].substr(paramCount + 1);
        try {
          if (value.indexOf('+') > -1) {
            value = value.replace(/\+/g, ' ');
          }
          opts[name] = decodeURIComponent(value);
        } catch (exp) {}
      }
    }
    return opts;
  };

  Tools.dtImageTrans = function(url, t, w, h, c) {
    var pathn = url.trim().replace(/^http(s)?:\/\//ig, '');
    var pathn_array = pathn.split('/');
    var domain = pathn_array[0];
    var path = pathn_array[1];
    if (t) {
      w = w || 0;
      h = h || 0;
      c = c ? '_' + c : '';
      return this.dtImageTrans(url).replace(/(\.[a-z_]+)$/ig, '.thumb.' + w + '_' + h + c + '$1');
    } else {
      return url.replace(/(?:\.thumb\.\w+|\.[a-z]+!\w+)(\.[a-z_]+)$/ig, '$1');
    }
  };

  Tools.toast = function(message,duration) {
    duration = duration? duration: 1500;
    let toast = Toast.show(message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          animation: true,
          shadow: false,
          hideOnPress: true,
          delay: 0,
      });
      // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
      setTimeout(function () {
          Toast.hide(toast);
      }, duration);
  };

  /**
   * [dtImageTrans description]
   * @param       {[string]}                 url [图片url]
   * @param       {[boolean]}                t   [是否裁剪]
   * @param       {[string]}                 w   [宽度]
   * @param       {[string]}                 h   [高度]
   * @param       {[string]}                 c   [裁剪区域, c中间, a上面，b下面]
   * @return      {[string]}                     [裁剪后的图片]
   * @description
   * @author      hugin
   * @updateTime  2016-02-03T13:58:54+0800
   */
  Tools.dtImageTrans = function(url, t, w, h, c) {
    var pathn = url.trim().replace(/^http(s)?:\/\//ig, '');
    var pathn_array = pathn.split('/');
    var domain = pathn_array[0];
    var path = pathn_array[1];
    if (t) {
      w = w || 0;
      h = h || 0;
      c = c ? '_' + c : '';
      return this.dtImageTrans(url).replace(/(\.[a-z_]+)$/ig, '.thumb.' + w + '_' + h + c + '$1');
    } else {
      return url.replace(/(?:\.thumb\.\w+|\.[a-z]+!\w+)(\.[a-z_]+)$/ig, '$1');
    }
  };

  Tools.toast = function(message,duration) {
    duration = duration? duration: 1500;
    let toast = Toast.show(message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          animation: true,
          shadow: false,
          hideOnPress: true,
          delay: 0,
      });
      // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
      setTimeout(function () {
          Toast.hide(toast);
      }, duration);
  };

  Tools.setStorage = function(key,object) {
    AsyncStorage.setItem(key, JSON.stringify(object), () => {});
  };

  Tools.getStorage = function(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (error, object) => {
            if (error) {
                resolve('');
            } else {
                resolve(object);
            }
        })
    })
  }
  return Tools;

}));