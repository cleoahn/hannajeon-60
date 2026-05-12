/*
  한나전 60기 온라인 작업실 설정값
  - 링크/영상/공지/미션은 아래 값만 바꾸면 화면에 반영됩니다.
  - 서버, 데이터베이스, 로그인이 없는 정적 웹사이트입니다.
*/
const CONFIG = {
  currentLesson: 1,
  cafeMissionUrl: "https://cafe.naver.com/mission-board-sample",
  noticeUrl: "#notice",
  resourcesBaseUrl: "#resources",
  lessons: [
    {
      round: 1,
      title: "크몽 시작과 판매 구조 이해하기",
      goal: "크몽에 가입하고 전문가 등록을 시작하며, 전자책 판매 흐름을 가볍게 이해합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["크몽 회원가입하기", "크몽 전문가 등록하기", "크몽 판매 구조 이해하기"],
      core: "오늘은 전자책을 올릴 장소를 먼저 익히는 날입니다. 모든 메뉴를 완벽히 알 필요는 없습니다. 회원가입, 전문가 등록, 판매 구조만 확인하면 충분합니다.",
      mission: "크몽 회원가입하고 전문가 등록 시작하기",
      cheer: "크몽은 처음 시작하는 사람도 자신의 경험을 하나씩 꺼내볼 수 있도록 도와주는 플랫폼입니다.",
      downloads: ["크몽 가입 체크리스트", "전문가 등록 준비표"],
      faqs: [
        ["크몽 가입이 꼭 필요한가요?", "이번 과정은 크몽 등록까지 경험하는 흐름이라 가입을 권장합니다."],
        ["전문가 등록을 오늘 끝내야 하나요?", "아니요. 시작만 해도 충분합니다. 막히는 부분은 질문방에 남겨주세요."]
      ]
    },
    {
      round: 2,
      title: "신뢰감 있는 전문가 소개 만들기",
      goal: "내가 어떤 경험을 가진 사람인지 정리하고, 낯선 사람에게도 이해되는 소개 초안을 씁니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["전문가 소개 작성하기", "내가 어떤 경험을 가진 사람인지 정리하기", "신뢰감 있는 전문가 프로필 만들기"],
      core: "대단한 경력보다 중요한 것은 내가 해온 일을 상대가 알아듣게 정리하는 것입니다. 작고 구체적인 경험부터 적어보세요.",
      mission: "전문가 소개 초안 작성하기",
      cheer: "대단한 이력이 아니어도 괜찮습니다. 내가 해온 일을 신뢰감 있게 정리하는 것이 시작입니다.",
      downloads: ["전문가 소개 문장 예시", "내 경험 정리 질문지"],
      faqs: [["쓸 이력이 없으면 어떡하나요?", "이력보다 경험, 관찰, 해결해본 문제를 먼저 적어도 됩니다."]]
    },
    {
      round: 3,
      title: "전자책 기획안 작성하기",
      goal: "내 경험이 누구에게 도움이 될지 정하고, 고객의 문제와 해결 방향을 정리합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["전자책 기획안 작성하기", "타겟 고객 정하기", "고객의 문제와 해결 방향 정리하기"],
      core: "기획안은 완벽한 계획서가 아닙니다. 내가 도울 수 있는 사람을 찾는 지도입니다.",
      mission: "전자책 기획안 작성하기",
      cheer: "기획안은 완벽한 계획서가 아니라, 내 경험이 누구에게 도움이 될지 찾아보는 지도입니다.",
      downloads: ["전자책 기획안 양식", "타겟 고객 정리표"],
      faqs: [["타겟을 좁히면 독자가 줄지 않나요?", "처음에는 좁게 잡을수록 글의 방향이 선명해집니다."]]
    },
    {
      round: 4,
      title: "전자책 제목 후보 만들기",
      goal: "독자가 클릭하고 싶은 제목 후보를 만들고 메인 제목과 부제를 정리합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["전자책 제목 정하기", "독자가 클릭하고 싶은 제목 후보 만들기", "메인 제목과 부제 정리하기"],
      core: "제목은 한 번에 정답을 찾는 작업이 아닙니다. 여러 후보를 꺼내며 독자의 언어에 가까워지는 과정입니다.",
      mission: "전자책 제목 후보 5개 작성하기",
      cheer: "제목은 한 번에 정해지지 않습니다. 후보를 많이 꺼내는 사람이 결국 좋은 제목을 만납니다.",
      downloads: ["제목 후보 워크시트", "클릭되는 제목 예시"],
      faqs: [["제목이 마음에 안 들면 다음 차시로 못 가나요?", "아니요. 제목은 뒤에서 다시 다듬을 수 있습니다."]]
    },
    {
      round: 5,
      title: "Canva로 전자책 표지 만들기",
      goal: "Canva를 활용해 제목과 어울리는 표지 초안을 만듭니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["전자책 표지 만들기", "Canva를 활용한 표지 제작", "제목과 어울리는 표지 이미지 구성하기"],
      core: "디자인 실력보다 중요한 것은 내 전자책의 첫인상을 만들어보는 경험입니다. 템플릿을 활용해도 괜찮습니다.",
      mission: "전자책 표지 초안 만들기",
      cheer: "디자인을 잘하지 않아도 괜찮습니다. 내 전자책이 세상에 보이는 첫 얼굴을 만들어보는 경험이 중요합니다.",
      downloads: ["Canva 표지 제작 순서", "표지 점검 체크리스트"],
      faqs: [["Canva가 처음인데 가능할까요?", "템플릿 선택, 글자 수정, 다운로드 순서만 따라오면 됩니다."]]
    },
    {
      round: 6,
      title: "전자책 목차와 원고 구조 잡기",
      goal: "독자가 이해하기 쉬운 흐름으로 목차를 만들고 원고 구조를 잡습니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["전자책 목차 정하기", "독자가 이해하기 쉬운 흐름 만들기", "목차를 기준으로 원고 구조 잡기"],
      core: "목차는 흩어진 경험에 길을 만들어주는 작업입니다. 독자가 앞에서 뒤로 따라올 수 있게 순서를 정합니다.",
      mission: "전자책 목차 작성하기",
      cheer: "목차는 내 이야기에 길을 만들어주는 작업입니다. 흩어진 경험이 구조를 갖기 시작합니다.",
      downloads: ["목차 설계 양식", "원고 구조 예시"],
      faqs: [["목차 개수는 몇 개가 좋나요?", "초안 단계에서는 5~8개 정도면 시작하기 좋습니다."]]
    },
    {
      round: 7,
      title: "목차에 따라 원고 초안 쓰기",
      goal: "각 목차별 핵심 내용을 채우며 완벽한 글보다 초안 완성을 목표로 합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["목차에 따라 전자책 원고쓰기", "각 목차별 핵심 내용 작성하기", "완벽한 글보다 초안 완성을 목표로 하기"],
      core: "처음부터 잘 쓰려고 하면 멈추기 쉽습니다. 빈칸을 채우는 마음으로 한 문단씩 써보세요.",
      mission: "목차에 따라 원고 초안 작성하기",
      cheer: "처음부터 잘 쓰려고 하지 마세요. 일단 채우는 사람이 완성까지 갑니다.",
      downloads: ["원고 초안 템플릿", "막힐 때 쓰는 질문 리스트"],
      faqs: [["글이 너무 부족하면 어떡하죠?", "부족한 초안도 편집할 수 있습니다. 빈 문서보다 훨씬 좋은 출발입니다."]]
    },
    {
      round: 8,
      title: "크몽 상세페이지 준비하기",
      goal: "전자책 소개글을 쓰고 구매자가 이해하기 쉬운 상세페이지 흐름을 구성합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["크몽 상세페이지 내용 준비하기", "전자책 소개글 작성하기", "구매자가 읽고 신청하고 싶어지는 상세페이지 구성하기"],
      core: "상세페이지는 과장하는 글이 아니라, 이 전자책이 누구에게 어떤 도움을 주는지 설명하는 글입니다.",
      mission: "크몽 상세페이지 초안 준비하기",
      cheer: "상세페이지는 판매글이 아니라, 이 전자책이 누구에게 어떤 도움을 주는지 설명하는 글입니다.",
      downloads: ["상세페이지 구성표", "전자책 소개글 예시"],
      faqs: [["판매글처럼 써야 하나요?", "과한 표현보다 독자의 문제와 도움을 분명히 쓰는 것이 좋습니다."]]
    },
    {
      round: 9,
      title: "크몽에 전자책 등록하기",
      goal: "상품 등록 절차를 따라가며 가격, 파일, 상세페이지를 최종 확인합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["크몽에 전자책 등록하기", "상품 등록 절차 따라하기", "가격, 파일, 상세페이지 최종 확인하기"],
      core: "등록은 내 경험을 세상에 처음 소개하는 과정입니다. 하나씩 체크하면서 올리면 됩니다.",
      mission: "크몽에 전자책 등록하기",
      cheer: "크몽 등록은 단순한 업로드가 아니라, 내 경험을 세상에 처음 소개해보는 과정입니다.",
      downloads: ["크몽 등록 체크리스트", "등록 전 최종 확인표"],
      faqs: [["등록 후 수정할 수 있나요?", "대부분의 내용은 등록 후에도 수정할 수 있습니다."]]
    },
    {
      round: 10,
      title: "내 전자책 홍보글 쓰기",
      goal: "블로그와 인스타그램에 올릴 첫 번째 홍보글을 작성하고 발행합니다.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      topics: ["내 전자책 홍보하는 글쓰기", "블로그/인스타그램 홍보글 작성하기", "내 전자책을 알리는 첫 번째 글 발행하기"],
      core: "홍보는 자랑이 아닙니다. 내 경험이 필요한 사람에게 조심스럽게 말을 건네는 일입니다.",
      mission: "내 전자책 홍보글 작성하기",
      cheer: "홍보는 자랑이 아니라, 내 경험이 필요한 사람에게 조심스럽게 말을 건네는 일입니다.",
      downloads: ["홍보글 템플릿", "첫 발행 체크리스트"],
      faqs: [["SNS가 없으면 어떡하나요?", "블로그, 카페, 지인 공유 등 가능한 채널 하나만 선택해도 됩니다."]]
    }
  ],
  notices: [
    { date: "5월 12일", title: "60기 온라인 작업실 오픈", body: "홈 화면에서 오늘의 미션과 강의실 바로가기를 확인해주세요." },
    { date: "매주 월요일", title: "새 차시 안내", body: "이번 주 강의 영상과 실습 미션이 순서대로 열립니다." },
    { date: "상시", title: "막히면 질문하기", body: "혼자 오래 고민하지 말고 네이버카페 질문 게시판에 남겨주세요." }
  ],
  students: [
    { name: "봄날기록", status: "입장 완료", memo: "오늘 첫 로그인 성공" },
    { name: "단단한초안", status: "크몽 가입 완료", memo: "전문가 등록 버튼 찾는 중" },
    { name: "엄마의노트", status: "전문가 소개 작성 중", memo: "내 경험을 문장으로 정리 중" },
    { name: "퇴근후작가", status: "기획안 작성 중", memo: "타겟 고객을 좁혀보는 중" },
    { name: "차분히한칸", status: "제목 작성 중", memo: "제목 후보 3개 완성" },
    { name: "오늘도완성", status: "목차 작성 중", memo: "흩어진 경험이 정리되는 중" },
    { name: "나의첫전자책", status: "원고 초안 작성 중", memo: "완벽보다 채우기" },
    { name: "다시발견", status: "상세페이지 준비 중", memo: "도움이 되는 사람을 떠올리는 중" }
  ],
  guideItems: [
    { icon: "🎥", title: "줌 들어오는 방법", body: "공지된 줌 링크를 누르고 이름을 닉네임으로 바꿔 입장하세요." },
    { icon: "✅", title: "네이버카페 인증 방법", body: "미션 인증 버튼을 누른 뒤 게시판에 캡처나 작성 내용을 올리면 됩니다." },
    { icon: "📄", title: "PDF 저장 방법", body: "문서에서 내보내기 또는 다운로드를 누르고 PDF 형식으로 저장하세요." },
    { icon: "🎨", title: "Canva 사용 안내", body: "템플릿을 고른 뒤 제목과 색상만 바꿔도 충분한 표지 초안이 됩니다." },
    { icon: "💬", title: "막히면 질문하기", body: "혼자 오래 붙잡지 마세요. 화면 캡처와 함께 질문하면 더 빨리 해결됩니다." },
    { icon: "🌱", title: "부담 줄이기", body: "일단 초안만 써보는 것이 목표입니다. 완성은 수정하면서 가까워집니다." }
  ],
  resources: [
    { title: "전자책 기획안 양식", body: "내 경험, 타겟 고객, 해결 방향을 한 장에 정리합니다." },
    { title: "Canva 표지 체크리스트", body: "표지 초안을 만들 때 확인할 제목, 이미지, 가독성 기준입니다." },
    { title: "PDF 저장 안내", body: "완성한 원고를 PDF로 저장하는 기본 순서를 확인하세요." },
    { title: "질문 남기는 법", body: "막힌 화면을 캡처하고 어디에서 막혔는지 함께 적어주세요." },
    { title: "홍보글 템플릿", body: "자랑이 아니라 필요한 사람에게 말을 거는 방식으로 작성합니다." },
    { title: "최종 등록 체크리스트", body: "가격, 파일, 상세페이지, 썸네일을 마지막으로 확인합니다." }
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
let activeLesson = CONFIG.currentLesson;

function currentLesson() {
  return CONFIG.lessons.find((lesson) => lesson.round === CONFIG.currentLesson) || CONFIG.lessons[0];
}

function renderHome() {
  const lesson = currentLesson();
  $("#homeTodayCard").innerHTML = `
    <span class="lesson-number">현재 ${lesson.round}차 진행 중</span>
    <h2>${lesson.title}</h2>
    <p>${lesson.goal}</p>
    <div class="button-row">
      <a class="btn primary" href="#classroom" data-lesson="${lesson.round}">이번 주 영상 보기</a>
      <a class="btn secondary" href="${CONFIG.cafeMissionUrl}" target="_blank" rel="noopener">미션 인증</a>
    </div>`;

  $("#currentLessonCard").innerHTML = `
    <span class="card-kicker">현재 진행 중인 차시</span>
    <h2>${lesson.round}차</h2>
    <p>${lesson.title}</p>`;
  $("#currentMissionCard").innerHTML = `
    <span class="card-kicker">오늘 해야 할 미션</span>
    <h2>${lesson.mission}</h2>
    <p>${lesson.cheer}</p>`;
  $("#progressCard").innerHTML = `
    <span class="card-kicker">현재 진행 단계</span>
    <h2>${lesson.round}/10차</h2>
    <p>한 번에 하나씩, 오늘의 칸만 채우면 됩니다.</p>
    <div class="progress-bar"><div class="progress-fill" style="width:${lesson.round * 10}%"></div></div>`;

  $("#noticeSummary").innerHTML = CONFIG.notices.slice(0, 3).map((notice) => `
    <li><strong>${notice.title}</strong><br><span>${notice.date} · ${notice.body}</span></li>`).join("");

  $("#statusPreview").innerHTML = CONFIG.students.slice(0, 4).map((student) => `
    <div class="status-pill"><b>${student.name}</b><span>${student.status}</span></div>`).join("");
}

function renderGuide() {
  $("#guideGrid").innerHTML = CONFIG.guideItems.map((item) => `
    <article class="guide-item">
      <div class="guide-icon">${item.icon}</div>
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    </article>`).join("");

  const faqs = [
    ["온라인 수업이 처음인데 따라갈 수 있을까요?", "괜찮습니다. 홈에서 오늘 할 일, 강의실에서 영상, 미션 페이지에서 인증 순서만 보면 됩니다."],
    ["미션을 완벽하게 제출해야 하나요?", "아닙니다. 초안 인증도 괜찮습니다. 완성 경험을 만드는 것이 먼저입니다."],
    ["어디에 질문해야 하나요?", "막힌 화면을 캡처해서 네이버카페 질문 게시판에 올려주세요."],
    ["진도가 늦으면 어떡하나요?", "현황판을 보면 모두 각자의 속도로 가고 있습니다. 오늘 한 가지부터 다시 시작하면 됩니다."]
  ];
  $("#beginnerFaq").innerHTML = faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}

function renderLessons() {
  $("#lessonTabs").innerHTML = CONFIG.lessons.map((lesson) => `
    <button class="lesson-tab ${lesson.round === activeLesson ? "active" : ""}" type="button" data-lesson="${lesson.round}" role="tab" aria-selected="${lesson.round === activeLesson}">${lesson.round}차</button>`).join("");
  renderLessonDetail();
}

function renderLessonDetail() {
  const lesson = CONFIG.lessons.find((item) => item.round === activeLesson) || CONFIG.lessons[0];
  $("#lessonDetail").innerHTML = `
    <div class="lesson-layout">
      <article class="card">
        <span class="card-kicker">${lesson.round}차 강의</span>
        <h2>${lesson.title}</h2>
        <p><strong>이번 차시 목표</strong><br>${lesson.goal}</p>
        <div class="video-box" aria-label="${lesson.round}차 유튜브 강의 영상">
          <iframe src="${lesson.videoUrl}" title="${lesson.round}차 강의 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </article>
      <aside class="card quote-card">
        <h2>응원 문구</h2>
        <p>${lesson.cheer}</p>
        <a class="btn primary" href="${CONFIG.cafeMissionUrl}" target="_blank" rel="noopener">미션 인증하러 가기</a>
      </aside>
    </div>
    <div class="lesson-layout">
      <article class="card">
        <h2>핵심 설명</h2>
        <p>${lesson.core}</p>
        <ul class="check-list">${lesson.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
      </article>
      <article class="card">
        <h2>오늘의 실습 미션</h2>
        <p>${lesson.mission}</p>
        <div class="button-row"><a class="btn primary" href="${CONFIG.cafeMissionUrl}" target="_blank" rel="noopener">미션 인증하러 가기</a></div>
      </article>
    </div>
    <div class="lesson-layout">
      <article class="card">
        <h2>참고자료 다운로드</h2>
        <p>샘플 링크입니다. 실제 자료 링크는 CONFIG.lessons의 downloads 또는 자료실 링크로 교체하세요.</p>
        <div class="download-row">
          ${lesson.downloads.map((name) => `<a class="download-link" href="${CONFIG.resourcesBaseUrl}"><span>${name}</span><span>보기 →</span></a>`).join("")}
        </div>
      </article>
      <article class="card">
        <h2>자주 묻는 질문</h2>
        ${lesson.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
      </article>
    </div>`;
}

function renderMissions() {
  $("#missionList").innerHTML = CONFIG.lessons.map((lesson) => `
    <article class="mission-item">
      <div class="round-num">${lesson.round}차</div>
      <div>
        <h2>${lesson.mission}</h2>
        <p>${lesson.cheer}</p>
      </div>
      <a class="btn primary" href="${CONFIG.cafeMissionUrl}" target="_blank" rel="noopener">인증하기</a>
    </article>`).join("");
}

function renderSubmit() {
  $("#submitMainButton").href = CONFIG.cafeMissionUrl;
  $("#submitSteps").innerHTML = [
    { icon: "1", title: "미션 내용 확인", body: "오늘의 미션 또는 차시별 강의실에서 제출할 내용을 확인합니다." },
    { icon: "2", title: "초안 그대로 준비", body: "완벽한 결과물이 아니어도 괜찮습니다. 지금 단계의 작업물을 준비하세요." },
    { icon: "3", title: "네이버카페 인증", body: "미션 인증 게시판에 닉네임, 차시, 작업 내용을 올리면 운영자가 확인합니다." }
  ].map((item) => `
    <article class="guide-item">
      <div class="guide-icon">${item.icon}</div>
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    </article>`).join("");
}

function renderBoard() {
  $("#studentTable").innerHTML = CONFIG.students.map((student) => `
    <tr><td>${student.name}</td><td>${student.status}</td><td>${student.memo}</td></tr>`).join("");
}

function renderResourcesAndNotices() {
  $("#resourceGrid").innerHTML = CONFIG.resources.map((item) => `
    <article class="resource-item"><h2>${item.title}</h2><p>${item.body}</p><a class="btn secondary" href="#resources">샘플 자료 보기</a></article>`).join("");
  $("#noticeCards").innerHTML = CONFIG.notices.map((notice) => `
    <article class="notice-item"><span class="card-kicker">${notice.date}</span><h2>${notice.title}</h2><p>${notice.body}</p></article>`).join("");
}

function showPage(hash) {
  const target = hash.replace("#", "") || "home";
  $$(".page").forEach((page) => page.classList.toggle("active-page", page.id === target));
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${target}`));
  $(".main-nav").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  window.addEventListener("hashchange", () => showPage(location.hash));
  $(".menu-toggle").addEventListener("click", () => {
    const nav = $(".main-nav");
    const isOpen = nav.classList.toggle("open");
    $(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
  });
  document.body.addEventListener("click", (event) => {
    const lessonButton = event.target.closest("[data-lesson]");
    if (!lessonButton) return;
    activeLesson = Number(lessonButton.dataset.lesson);
    renderLessons();
    if (lessonButton.getAttribute("href") === "#classroom") {
      location.hash = "#classroom";
    }
  });
}

function init() {
  renderHome();
  renderGuide();
  renderLessons();
  renderMissions();
  renderSubmit();
  renderBoard();
  renderResourcesAndNotices();
  bindEvents();
  showPage(location.hash || "#home");
}

document.addEventListener("DOMContentLoaded", init);
