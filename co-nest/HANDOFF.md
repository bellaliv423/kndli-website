# 🤝 HANDOFF — Dream Team ↔ Co-Nest ↔ Open Claw

> 이 문서는 **Claude Code (Dream Team), OpenClaw 가족**이 *"Co-Nest가 KNDLI에서 뭘 하고 있는지"* 빠르게 파악할 수 있게 합니다.

## 1. Co-Nest가 맡는 범위 (KNDLI repo 내)

✅ Co-Nest가 진행 가능:
- 신규 HTML 페이지 제작 (Cream/Rust + Pretendard 톤 준수)
- 기존 디자인 시스템 내 컴포넌트 추가·정정
- 버그 fix + 리팩터링 (기능 동일)
- 빌드·테스트·CI 일반 작업
- `co-nest/` 4 파일 standard 작성

❌ 벨라 사전 결재 필수:
- 새 GitHub repo 생성
- Vercel 신규 배포 + 도메인 변경
- 벨라 본인 정보 변경 (NDA·자격·이메일·전화)
- Dream Team 영구 룰 (R_*_v1) 영향 변경
- 민감 자산 (.env / 토큰 / API 키)
- OZKIZ / 한양봇 / 벨덴 마스킹 영향 변경

## 2. NDA 마스킹 의무 (공개 영역)

| 회사·자산 | 공개 표기 |
|---|---|
| OZKIZ (벨라 직장) | "패션 소비재" |
| 한양봇 (HUBS) | "Smart Campus App" 또는 "스마트 캠퍼스봇" |
| 벨덴 (B2B 첫 기업 과외) | "Be***회사" |
| KNDLI / Bella AI Dream Team / Co-Nest | 정상 표기 ✅ |
| 벨라 본인 자격 (한양 MBA·홍보대사·AX 1위·KCBRI 이사) | 정상 표기 ✅ |

## 3. 디자인 시스템

- 색상: `--accent: #C45A2C` (Rust) + `--bg-primary: #FBF8F3` (Cream)
- 폰트: Pretendard (KO) + Noto Sans TC (ZH) + Playfair Display (Display)
- 언어 토글: `.lang-ko` / `.lang-zh` / `.lang-en` + `body.zh` / `body.en`
- **공개 자산에 "풀" 단어 절대 사용 금지** (R-NO-PUL-IN-PUBLIC v1)

## 4. 기존 페이지 매트릭스 (R-LegacyFirst 의무)

| 페이지 | 담당자 | 진입 전 확인 |
|---|---|---|
| index.html | 🌬️ 윈디 (Dream Team) | OUR TEAM 섹션 풀 보존 |
| profile.html | 🌬️ 윈디 | Hero 배지 3 + Journey 카드 풀 보존 |
| translation.html | 🌬️ 윈디 | 4 가격 카드 + 후기 풀 보존 |
| ai-training.html | 🌬️ 윈디 | 벨덴 스타일 5 섹션 풀 보존 |
| contact.html | 🌬️ 윈디 | KakaoTalk/LINE 분리 + Instagram 2 풀 |
| seminar.html | 🌬️ 윈디 | AI 세미나·교육 풀 |

## 5. 작업 SOP (Co-Nest 진입 시)

```
Step 1: 이 HANDOFF.md 풀 읽기
Step 2: 진입 페이지의 기존 코드 풀 인지 (R-LegacyFirst)
Step 3: 작업 시작 → CHANGELOG.md + TASK_LOG.md 동시 작성
Step 4: 민감 영역 발견 → 벨라 사전 결재 요청
Step 5: 완료 → commit 메시지 + CHANGELOG 양쪽 풀 기록
Step 6: Dream Team이 PR 자동 리뷰 (R-CROSS-TEAM-CODE-REVIEW v1)
```

## 6. 보고 라인

```
Co-Nest 작업 → 도큐 (CHANGELOG·TASK_LOG)
              → 🌬️ 윈디 (Dream Team DKM 흡수)
                 → 🐱🌬️ 윈큐티 (매니저)
                    → 👤 벨라 (최종 결재)
```

— Co-Nest x Dream Team x Open Claw · 2026-05-20 (D+28)
