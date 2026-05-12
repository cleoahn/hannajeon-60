# hannajeon-60

한나전 60기 온라인 작업실 정적 웹사이트입니다.

## 로컬 미리보기

```bash
python3 -m http.server 4173
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:4173/index.html
```

## GitHub Pages 배포

이 저장소에는 `.github/workflows/pages.yml` 워크플로가 포함되어 있습니다. `main` 또는 `master` 브랜치에 푸시하면 GitHub Actions가 정적 파일을 GitHub Pages로 배포합니다.

### 최초 1회 설정

1. GitHub 저장소의 **Settings → Pages**로 이동합니다.
2. **Build and deployment**의 Source를 **GitHub Actions**로 선택합니다.
3. `main` 또는 `master` 브랜치에 변경사항을 푸시합니다.
4. **Actions** 탭에서 `Deploy static site to GitHub Pages` 워크플로가 성공했는지 확인합니다.
5. 배포가 완료되면 Actions 실행 화면 또는 Settings → Pages에 표시되는 `https://<계정명>.github.io/<저장소명>/` 주소로 접속합니다.

## 운영자가 자주 수정할 곳

`script.js` 상단의 `CONFIG` 객체에서 아래 값을 바꾸면 됩니다.

- `currentLesson`: 현재 진행 차시
- `cafeMissionUrl`: 네이버카페 미션 인증 게시판 링크
- `lessons`: 차시별 제목, 목표, 유튜브 임베드 URL, 미션, 참고자료, FAQ
- `notices`: 공지사항
- `students`: 작업 현황판 샘플/운영 데이터
- `resources`: 자료실 카드

### 작업 현황판 운영 방식

작업 현황판은 자동 연동이 아니라 네이버카페 미션 인증을 기준으로 운영자가 수동 업데이트합니다. `students` 배열에는 실명이 아닌 닉네임만 입력하고, 아래처럼 `name`, `status`, `note` 세 항목만 수정하면 됩니다.

```js
{ name: "엄마의노트", status: "목차 작성 중", note: "흩어진 경험이 정리되는 중" }
```

현재 MVP에는 회원가입, 로그인, 데이터베이스, 사용자 저장 기능, 자동 인증 연동이 없습니다. 추후 필요할 경우 “60기 입장코드 입력” 영역에 간단한 입장코드 확인 방식만 추가하는 방향을 권장합니다.
