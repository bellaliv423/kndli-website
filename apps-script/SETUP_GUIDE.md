# KNDLI 폼 자동화 설정 가이드

## 전체 흐름
```
방문자가 폼 제출
  → Google Apps Script (웹앱)
  → Google Sheets에 데이터 저장
  → 방문자에게 자동응답 이메일 (해당 언어로)
  → 벨라님에게 알림 이메일
```

## ✅ 배포 완료 정보 (2026-03-19)

| 항목 | 값 |
|------|-----|
| Google Sheets | `KNDLI_Form_Data` |
| Sheets ID | `1l1FVJpHl_dS9IfJUkvMOAvUmxqdqaXY7VBOmEeJVLL0` |
| Sheets URL | https://docs.google.com/spreadsheets/d/1l1FVJpHl_dS9IfJUkvMOAvUmxqdqaXY7VBOmEeJVLL0/edit |
| Sheets 소유 | kndli.423@gmail.com |
| Apps Script 계정 | kndli.210@gmail.com (자동응답 발신) |
| 배포 ID | `AKfycbyVrqKCCcZGKdfKDT6xwEzBmtyj2Uguvpy-8akRt030QsSxx45z6MSJilooBJpWFIyExw` |
| 웹앱 URL | https://script.google.com/macros/s/AKfycbyVrqKCCcZGKdfKDT6xwEzBmtyj2Uguvpy-8akRt030QsSxx45z6MSJilooBJpWFIyExw/exec |
| 시트 탭 | `문의` / `세미나` (첫 제출 시 자동 생성) |
| 알림 수신 | kndli.210@gmail.com |

## 기능 상세

### 문의 폼 (contact.html)
- 수집: 이름, 이메일, 유형, 메시지, 언어
- 자동응답: 해당 언어(ko/zh)로 감사 회신
- 알림: 벨라님에게 새 문의 알림
- 실패 폴백: mailto: 링크 제공

### 세미나 폼 (seminar.html)
- 수집: 이름, 이메일, 소속, 선호 언어, 메시지, 페이지 언어
- 자동응답: 해당 언어(ko/zh)로 신청 확인
- 알림: 벨라님에게 새 신청 알림

## 테스트 방법

1. Apps Script 에디터에서 `testDoPost` 함수 실행 → 테스트 메일 수신 확인
2. kndli.com/contact.html에서 실제 폼 제출 테스트
3. kndli.com/seminar.html에서 실제 폼 제출 테스트
4. Google Sheets에 데이터 저장 확인
5. 자동응답 이메일 수신 확인
6. 벨라님 알림 이메일 수신 확인

## 참고

- 자동응답 이메일은 **kndli.210@gmail.com**에서 발송됨
- Google Apps Script 무료 한도: 하루 100통 (충분!)
- 시트 탭: `문의` / `세미나` (첫 제출 시 자동 생성)
- 실패 시 contact.html은 mailto: 폴백 제공
- Apps Script 수정 시 **새 배포** 필요 (배포 관리 → 새 배포)
