function solution(today, terms, privacies) {
  const answer = [];
  const todayDate = new Date(today.replaceAll(".", "-"));
  const termsMap = {};

  for (const term of terms) {
    const [type, period] = term.split(" ");
    termsMap[type] = Number(period);
  }

  console.log(termsMap);

  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const [date, type] = privacy.split(" ");
    const privacyDate = new Date(date.replaceAll(".", "-"));
    const validity = privacyDate;
    validity.setMonth(privacyDate.getMonth() + termsMap[type]);
    validity.setDate(privacyDate.getDate() - 1);

    if (validity < todayDate) answer.push(i + 1);
  }

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
