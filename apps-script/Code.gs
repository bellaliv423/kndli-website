// ============================================================
// KNDLI 문의/세미나 폼 처리 — Google Apps Script
// 배포: kndli.210@gmail.com (자동응답 발신 계정)
// 시트: KNDLI_Form_Data (kndli.423@gmail.com 소유, 편집 공유)
// ============================================================

// ★ 배포 후 아래 ID를 실제 Google Sheets ID로 교체!
var SHEET_ID = '1l1FVJpHl_dS9IfJUkvMOAvUmxqdqaXY7VBOmEeJVLL0';
var NOTIFY_EMAIL = 'kndli.210@gmail.com';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var formType = data.formType; // 'contact' or 'seminar'
    var lang = data.lang || 'ko';

    var ss = SpreadsheetApp.openById(SHEET_ID);

    if (formType === 'contact') {
      handleContact(ss, data, lang);
    } else if (formType === 'seminar') {
      handleSeminar(ss, data, lang);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── 문의 폼 처리 ──
function handleContact(ss, data, lang) {
  var sheet = ss.getSheetByName('문의');
  if (!sheet) {
    sheet = ss.insertSheet('문의');
    sheet.appendRow(['날짜', '이름', '이메일', '유형', '메시지', '언어']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  }

  var timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
  sheet.appendRow([timestamp, data.name, data.email, data.type, data.message, lang]);

  // 자동응답 (문의자에게)
  var subject, body;
  if (lang === 'zh') {
    subject = '[KNDLI] 感謝您的諮詢';
    body = data.name + ' 您好，\n\n'
      + '感謝您透過 kndli.com 聯繫我們。\n'
      + '我們已收到您的諮詢，將在1-2個工作日內回覆。\n\n'
      + '── 諮詢內容 ──\n'
      + '類型: ' + data.type + '\n'
      + '訊息: ' + data.message + '\n\n'
      + '如有緊急事項，請透過以下方式聯繫：\n'
      + 'Email: kndli.210@gmail.com\n'
      + 'Instagram: @bellaliv423\n\n'
      + '韓妮德來有限公司 KNDLI Co., Ltd.\n'
      + 'Bella (黃鈴雅)';
  } else {
    subject = '[KNDLI] 문의해 주셔서 감사합니다';
    body = data.name + '님, 안녕하세요.\n\n'
      + 'kndli.com을 통해 문의해 주셔서 감사합니다.\n'
      + '접수된 문의는 1-2 영업일 내에 회신드리겠습니다.\n\n'
      + '── 문의 내용 ──\n'
      + '유형: ' + data.type + '\n'
      + '메시지: ' + data.message + '\n\n'
      + '급한 사항은 아래로 연락주세요:\n'
      + 'Email: kndli.210@gmail.com\n'
      + 'Instagram: @bellaliv423\n\n'
      + '한니드레이 유한회사 KNDLI Co., Ltd.\n'
      + 'Bella (황영아)';
  }

  GmailApp.sendEmail(data.email, subject, body, {
    name: 'KNDLI (Bella)',
    replyTo: NOTIFY_EMAIL
  });

  // 벨라님에게 알림
  GmailApp.sendEmail(NOTIFY_EMAIL,
    '[KNDLI 문의] ' + data.name + ' - ' + data.type,
    '새 문의가 접수되었습니다.\n\n'
      + '이름: ' + data.name + '\n'
      + '이메일: ' + data.email + '\n'
      + '유형: ' + data.type + '\n'
      + '언어: ' + lang + '\n'
      + '메시지:\n' + data.message + '\n\n'
      + '시트에서 확인: https://docs.google.com/spreadsheets/d/' + SHEET_ID,
    { name: 'KNDLI Form Bot' }
  );
}

// ── 세미나 폼 처리 ──
function handleSeminar(ss, data, lang) {
  var sheet = ss.getSheetByName('세미나');
  if (!sheet) {
    sheet = ss.insertSheet('세미나');
    sheet.appendRow(['날짜', '이름', '이메일', '소속', '선호 언어', '메시지', '페이지 언어']);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
  }

  var timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
  sheet.appendRow([timestamp, data.name, data.email, data.affiliation, data.language, data.message, lang]);

  // 자동응답 (신청자에게)
  var subject, body;
  if (lang === 'zh') {
    subject = '[KNDLI] 講座申請已確認';
    body = data.name + ' 您好，\n\n'
      + '感謝您報名「聰明的 Claude 魔法」講座！\n'
      + '我們已收到您的申請，確定日期後將另行通知。\n\n'
      + '── 申請資訊 ──\n'
      + '姓名: ' + data.name + '\n'
      + '郵件: ' + data.email + '\n'
      + (data.affiliation ? '所屬: ' + data.affiliation + '\n' : '')
      + (data.message ? '備註: ' + data.message + '\n' : '')
      + '\n如有問題，歡迎隨時聯繫：\n'
      + 'Email: kndli.210@gmail.com\n'
      + 'Instagram: @bellaliv423\n\n'
      + '韓妮德來有限公司 KNDLI Co., Ltd.\n'
      + 'Bella (黃鈴雅)';
  } else {
    subject = '[KNDLI] 세미나 신청이 접수되었습니다';
    body = data.name + '님, 안녕하세요.\n\n'
      + '「슬기로운 클로드 마법」 세미나에 신청해 주셔서 감사합니다!\n'
      + '신청이 정상적으로 접수되었으며, 일정이 확정되면 별도 안내드리겠습니다.\n\n'
      + '── 신청 정보 ──\n'
      + '이름: ' + data.name + '\n'
      + '이메일: ' + data.email + '\n'
      + (data.affiliation ? '소속: ' + data.affiliation + '\n' : '')
      + (data.message ? '메시지: ' + data.message + '\n' : '')
      + '\n문의사항은 아래로 연락주세요:\n'
      + 'Email: kndli.210@gmail.com\n'
      + 'Instagram: @bellaliv423\n\n'
      + '한니드레이 유한회사 KNDLI Co., Ltd.\n'
      + 'Bella (황영아)';
  }

  GmailApp.sendEmail(data.email, subject, body, {
    name: 'KNDLI (Bella)',
    replyTo: NOTIFY_EMAIL
  });

  // 벨라님에게 알림
  GmailApp.sendEmail(NOTIFY_EMAIL,
    '[KNDLI 세미나] ' + data.name + ' 신청',
    '새 세미나 신청이 접수되었습니다.\n\n'
      + '이름: ' + data.name + '\n'
      + '이메일: ' + data.email + '\n'
      + '소속: ' + (data.affiliation || '-') + '\n'
      + '선호 언어: ' + (data.language || '-') + '\n'
      + '메시지: ' + (data.message || '-') + '\n'
      + '페이지 언어: ' + lang + '\n\n'
      + '시트에서 확인: https://docs.google.com/spreadsheets/d/' + SHEET_ID,
    { name: 'KNDLI Form Bot' }
  );
}

// ── 테스트용 (Apps Script 에디터에서 실행) ──
function testDoPost() {
  var e = {
    postData: {
      contents: JSON.stringify({
        formType: 'contact',
        name: '테스트',
        email: 'kndli.210@gmail.com',
        type: 'AI 자동화 상담',
        message: '테스트 메시지입니다.',
        lang: 'ko'
      })
    }
  };
  var result = doPost(e);
  Logger.log(result.getContent());
}
