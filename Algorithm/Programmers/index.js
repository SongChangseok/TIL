const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// const addMsg = (msgArray, state, uid) => [...msgArray, { state, uid }];
// const changeName = (uidList, uid, name) => ({ ...uidList, [uid]: name });
// const convertState = (state) => {
//   if (state === "Enter") return "님이 들어왔습니다.";
//   if (state === "Leave") return "님이 나갔습니다.";
//   return "";
// };

// const solution = (record, msgArray = [], uidList = {}) => {
//   if (!record.length)
//     return msgArray.map(
//       ({ uid, state }) => `${uidList[uid]}${convertState(state)}`
//     );

//   const [target, ...other] = record;
//   const [state, uid, name = ""] = target.split(" ");

//   switch (state) {
//     case "Enter":
//       return solution(
//         other,
//         addMsg(msgArray, state, uid),
//         changeName(uidList, uid, name)
//       );
//     case "Leave":
//       return solution(other, addMsg(msgArray, state, uid), uidList);
//     case "Change":
//       return solution(other, msgArray, changeName(uidList, uid, name));
//     default:
//       break;
//   }
// };


console.log(solution(record));
