let tapDefaults = {
  time: 250,
  offset: 10
};

/**
 * 移动端点击 tap事件
 * @param node
 * @param a
 * @param b
 */

function tap(node, a, b) {
  let st, sx, sy;
  let opts, callback;
  if (typeof a === 'function') {
    callback = a;
    opts = Object.assign({}, tapDefaults, b);
  } else {
    callback = b;
    opts = Object.assign({}, tapDefaults, a);
  }

  node.addEventListener('touchstart', e => {
    "use strict";
    e.preventDefault();
    const touch = e.targetTouches[0];
    st = e.timeStamp;
    sx = touch.pageX;
    sy = touch.pageY;
  }, false)

  node.addEventListener('touchend', e => {
    "use strict";
    const touch = e.changedTouches[0];
    if (e.timeStamp - st <= opts.time &&
      Math.abs(touch.pageX - sx) <= opts.offset &&
      Math.abs(touch.pageY - sy) <= opts.offset) {
      callback && callback();
    }
  }, false)
}

function handler(node, inject) {
  let st, sx, sy

  node.addEventListener('touchstart', (e) => {
    e.preventDefault()

    const touch = e.targetTouches[0]
    st = e.timeStamp
    sx = touch.pageX
    sy = touch.pageY
  }, false)

  node.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0]

    inject({
      time: e.timeStamp - st,
      offsetX: Math.abs(touch.pageX - sx),
      offsetY: Math.abs(touch.pageY - sy)
    })
  }, false)
}

/**
 * 双击事件
 * @param node
 * @param a
 * @param b
 */
function doubletap(node, a, b) {
  let opts, callback;
  let status = 0;

  if (typeof a === 'function') {
    callback = a;
    opts = Object.assign({}, tapDefaults, b)
  } else {
    callback = b;
    opts = Object.assign({}, tapDefaults, a)
  }

  handler(node, (info) => {
    if (
      info.time <= opts.time &&
      info.offsetX <= opts.offset &&
      info.offsetY <= opts.offset
    ) {
      if (status === 0) {
        status = 1;
        setTimeout(() => {
          status = 0
        }, opts.time)
      } else if (status === 1) {
        callback && callback()
        status = 0
      }
    } else {
      status = 0
    }
  })
}

let longTapDefaults = {
  time: 350,
  offset: 10
};

/**
 * 长按事件
 * @param node
 * @param a
 * @param b
 */
function longtap(node, a, b) {
  let st, sx, sy;
  let opts, callback;
  if (typeof a === 'function') {
    callback = a;
    opts = Object.assign({}, longTapDefaults, b);
  } else {
    callback = b;
    opts = Object.assign({}, longTapDefaults, a);
  }

  node.addEventListener('touchstart', e => {
    "use strict";
    e.preventDefault();
    const touch = e.targetTouches[0];
    st = e.timeStamp;
    sx = touch.pageX;
    sy = touch.pageY;
  }, false)

  node.addEventListener('touchend', e => {
    "use strict";
    const touch = e.changedTouches[0];
    if (e.timeStamp - st > opts.time &&
      Math.abs(touch.pageX - sx) <= opts.offset &&
      Math.abs(touch.pageY - sy) <= opts.offset) {
      callback && callback();
    }
  }, false)
}

/**
 * 按压事件 按住超过规定事件自动触发，注意和 longtap不同的是，longtap需要等到手指离开时触发，而press在按压时间达到规定值，自动触发，此时手指还在屏幕上。
 * 若按压时间短，则手指离开时定时器已取消，回调不会触发
 * @param node
 * @param a
 * @param b
 */
function press(node, a, b) {
  let opts, callback, sx, sy;
  let timer = null;
  if (typeof a === 'function') {
    callback = a;
    opts = Object.assign({}, longTapDefaults, b);
  } else {
    callback = b;
    opts = Object.assign({}, longTapDefaults, a);
  }

  node.addEventListener('touchstart', e => {
    "use strict";
    e.preventDefault();
    const touch = e.targetTouches[0];
    sx = touch.pageX;
    sy = touch.pageY;
    timer = setTimeout(() => {
      callback && callback();
    }, opts.time)
  }, false)

  node.addEventListener('touchmove', e => {
    "use strict";
    const touch = e.targetTouches[0];
    if (Math.abs(touch.pageX - sx) > opts.offset ||
      Math.abs(touch.pageY - sy) > opts.offset) {
      clearTimeout(timer)
    }
  }, false)

  node.addEventListener('touchend', () => {
    "use strict";
    clearTimeout(timer)
  }, false)
}

let swipeDefaults = {
  direction: 'horizontal',//vertical 切换纵横状态
  speed: 200,
  offset: 100,
  prevent: true
}

function swipe(node, a, b) {
  let opts, callback, sTime, sTouch, eTouch;
  if (typeof a === 'function') {
    callback = a;
    opts = Object.assign({}, swipeDefaults, b)
  } else {
    callback = b;
    opts = Object.assign({}, swipeDefaults, a)
  }

  node.addEventListener('touchstart', e => {
    "use strict";
    if (opts.prevent) {
      e.preventDefault()
    }
    sTime = e.timeStamp;
    sTouch = eTouch = e.targetTouches[0];
  }, false)

  if (typeof opts.touchmove === 'function') {
    node.addEventListener('touchmove', e => {
      "use strict";
      eTouch = e.targetTouches[0];
      if (opts.direction === 'horizontal') {
        opts.touchmove(eTouch.pageX - sTouch.pageX)
      } else {
        opts.touchmove(eTouch.pageY - sTouch.pageY)
      }
    }, false)
  }

  node.addEventListener('touchend', e => {
    "use strict";
    eTouch = e.changedTouches[0];
    let time = e.timeStamp - sTime;
    let offset, direction;
    if (opts.direction === 'horizontal') {
      offset = eTouch.pageX - sTouch.pageX;
      direction = offset > 0 ? 'right' : 'left';
    } else {
      offset = eTouch.pageY - sTouch.pageY;
      direction = offset > 0 ? 'down' : 'up';
    }
    if (Math.abs(offset) >= opts.offset ||
      Math.abs(offset) / time * 1000 >= opts.spee) {
      callback && callback(direction)
    }
  }, false)
}

export default {
  tap,
  longtap,
  doubletap,
  press,
  swipe
}

