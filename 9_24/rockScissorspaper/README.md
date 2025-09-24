박스 안에 win/lose/tie 결과 나오는 부분이 한박자 늦게 찍히는 문제 발생.

→ 상태업데이트 헷갈렸음.

setJudge(judgement(userChoice, computerChoice));
위와 같이 했을때 두 userChoice와 computerChoice값이 바로 바뀌는게 아니라 다음 렌더링때 바뀐다. 따라서 버튼을 눌렀을때의 값은 여전히 이전 값이므로 judge가 늦게 찍히는 문제 발생.

🚨 핵심 포인트
state 값은 업데이트 직후엔 곧바로 못 쓰고,
그 순간에 쓰고 싶으면 변수에 먼저 담아서 계산해야 한다.
