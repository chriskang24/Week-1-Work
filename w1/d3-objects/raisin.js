





// 1) identify IF THE cookie has raisins in it = raisin = bad

// 2) search through array = > loop





raisinAlarm = function (cookie) {

  for (let i = 0; i < cookie.length; i++) {

    if (cookie[i] === "🍇") {

      return "Raisin Alert!";
    }
  }

  return 'All good';
};




console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// console.log(raisinAlarmArray(
//   [
//     ["🍫", "🍫", "🍇", "🍫"],
//     ["🍫", "🍇", "🍫", "🍫", "🍇"],
//     ["🍫", "🍫", "🍫"]
//   ]
// ));