# 🌞 solar-todo

## 배포주소

https://pjainxido.github.io/hayanmind-front-1/

## start

```
yarn
yarn start
```

## build & deploy

```
yarn build
yarn depoly
```

## 요구사항

### 완성 및 기능추가

- [x] Todo List 현재시간 표시
- [x] Todo 버튼 클릭시 완료 가능

- [x] 완료목표일 기입, 입력항목 근처 입력가능하게 ux 구성(antd/date-picker 사용)

- [x] 완료 목표일 렌더링

### 예외사항

- todo text 미입력후 todo 생성시 알림 모달로 예외 표시

- 완료목표일(deadline) 입력시 현재 날짜보다 과거날짜 입력시 알림 모달로 예외 표시

### 버그픽스

- 기존 id생성 로직으로 인해 id값이 중복되어 발생하는 문제들 수정
