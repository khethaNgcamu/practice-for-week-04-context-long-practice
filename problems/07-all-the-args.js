function allTheArgs(func, ...args) {
  // Your code here
      return function(...callTimeArgs){
            return func.call(this, ...args, ...callTimeArgs);
    };
  }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;