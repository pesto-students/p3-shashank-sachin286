const findJudge = (N, trust) => {
  let likesCountList = {};
  let beingLikedCountList = {};

  for (let i = 1; i <= N; i++) {
    likesCountList[i] = 0;
    beingLikedCountList[i] = 0;
  }

  for (let ele of trust) {
    likesCountList[ele[0]]++;
    beingLikedCountList[ele[1]]++;
  }

  let judge = 0;

  for (key in likesCountList) {
    if (likesCountList[key] === 0) {
      judge = key;
      if (beingLikedCountList[judge] === N - 1) {
        return judge;
      }
    }
  }
  return -1;
};

let n = 2;
let trust = [[1, 2]];
console.log(findJudge(n, trust));
