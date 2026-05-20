# 📋 TASK_LOG — Co-Nest 작업 메모

> 작업 중 대화 요약, 결정 사항, 다음 할 일

---

## 2026-05-20 (D+28) · stub 생성

**시작**: 윈디가 Co-Nest 진입을 위한 폴더 stub 생성 (벨라 D+28 결정 반영)

### 핵심 결정
1. Co-Nest 자체 GitHub `bellaliv423/co-nest` 유지
2. KNDLI repo `bellaliv423/kndli-website-new` 안에 `co-nest/` 폴더 + 4 파일 추가
3. KNDLI 사이트 메뉴에 Co-Nest 카테고리 추가 (외부 링크: bella-codex-nest.vercel.app)
4. 도메인 연결 후 → co-nest.kndli.com으로 메뉴 링크 정정 예정

### 합의된 협업 SOP
- Co-Nest 진입 시 → HANDOFF.md 풀 읽기
- 작업 → CHANGELOG.md + TASK_LOG.md 동시 작성
- 민감 영역 → 벨라 사전 결재 (R-Bella-Final-Edit-V1)
- 완료 → Dream Team(윈디) 자동 리뷰 (R-CROSS-TEAM-CODE-REVIEW v1)

### 다음 할 일 (Co-Nest 진입 시)
- [ ] Co-Nest README/HANDOFF/CHANGELOG/TASK_LOG 본인 직접 정리·갱신
- [ ] index.html OUR TEAM 섹션의 Co-Nest 카드 디테일 강화 (네스트 멤버 7명 풀)
- [ ] dream-co-nest.html 페이지 디자인 정정 (한국어 모드에서 중국어 동시 표시 버그 잔여)
- [ ] AI 자동화 카드 5번째 Co-Nest 풀 협력

---

## 2026-05-20 (D+28 23:00) · 🚨 Co-Nest 첫 위탁 작업 (벨라 제안)

### 🐛 발견된 문제
`bella-obsidian` repo 자동 업데이트 풀 끊김:
- 마지막 commit: **2026-04-28 17:50** "Auto-update dashboard stats"
- 22일 풀 정지 (4/28 → 5/20 현재)
- `.github/workflows/` 폴더 비어있음 (GitHub Actions 누락)

### 🔗 LIVE URL
- 사이트: https://bellaliv423.github.io/bella-obsidian/
- GitHub: https://github.com/bellaliv423/bella-obsidian
- 로컬: D:/bella-obsidian (clone 완료)

### 🎯 Co-Nest 위탁 작업 (벨라 D+28 직접 제안)

**담당**:
- 🐙 깃토 (GitHub + Actions 설정)
- 🔍 덱스 (기존 자동 update 스크립트 분석)
- 📚 도큐 (작업 기록)

**작업 범위**:
1. `.github/workflows/auto-update.yml` 생성 (cron schedule)
2. 기존 "Auto-update dashboard stats" 스크립트 풀 분석 (어떤 데이터를 어디서 fetch했는지)
3. 매일 자동 commit 풀 복구 (12:30 / 17:50 KST)
4. CHANGELOG.md에 변경 이력 풀 기록
5. README에 자동 업데이트 SOP 추가

**자율 영역** (벨라 결재 없이 진행 OK):
- GitHub Actions 워크플로우 작성
- 기존 스크립트 분석·리팩터링
- README/CHANGELOG 문서화

**벨라 사전 결재 필요**:
- 새 GitHub Secret 추가 (API 키 등)
- BKMS 데이터 소스 외부 노출
- 비공개 자료 영향

### 📝 Co-Nest 진입 시 첫 commit 형식
```
feat(auto-update): bella-obsidian 자동 업데이트 풀 복구 (D+28 위탁)

🪺 Co-Nest 첫 위탁 작업 (벨라 D+28 직접 제안):
- bella-obsidian repo 22일 풀 정지 발견 (4/28 → 5/20)
- .github/workflows/auto-update.yml 신규 추가
- 매일 12:30, 17:50 KST cron schedule
- CHANGELOG.md + TASK_LOG.md 풀 기록

작업자: 🐙 깃토 + 🔍 덱스 + 📚 도큐
검수: 🌬️ 윈디 (Dream Team DKM 흡수)
결재: 👤 벨라
```

### 메모
- 벨라 핵심: "서로 배우고 서로 성장 — 최고의 결과물"
- 4 KPI: ⚡효율 · 🎓전문성 · 💎예쁘게 · 📐체계
- NDA 마스킹 필수 (OZKIZ·한양봇→Smart Campus App·벨덴)
