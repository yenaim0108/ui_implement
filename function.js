// 변수 선언
var current, past = 0;
var currDivID, pastDivID = 'homeContents';
function layerShowHidden(current, currDivID) {
    document.getElementById('QnABar').style.display = 'none';        // QnA 컨텐츠 영역 상단바 숨기기.
    document.getElementById('actionBar').style.display = 'block';    // channelCom을 눌렀을 경우를 대비해서..
    document.getElementById('channelCom').style.display = 'none';    // channelCom을 눌렀을 경우를 대비해서..
    document.getElementById('channelTop').style.display = 'none';    // channelCom을 눌렀을 경우를 대비해서..
    switch(past)
    { // 선택됐었던 아이콘을 미선택 아이콘으로 바꾸기.
        case 0 :
            home.src = "image/unslcHome.png";
            break;
        case 1 :
            live.src = "image/unslcLive.png";
            break;
        case 2 :
            subscribe.src = "image/unslcSubscribe.png";
            break;
        case 3 :
            majorField.src = "image/unslcMajorField.png";
            break;
        case 4 :
            QnA.src = "image/unslcQnA.png";  
    }

    switch (current)
    { // 클릭한 아이콘을 선택 아이콘으로 바꾸기.
        case 0 :
            home.src = "image/slcHome.png";
            break;
        case 1 :
            live.src = "image/slcLive.png";
            break;
        case 2 :
            subscribe.src = "image/slcSubscribe.png";
            break;
        case 3 :
            majorField.src = "image/slcMajorField.png";
            break;
        case 4 :
            QnA.src = "image/slcQnA.png";
            document.getElementById('QnABar').style.display = 'block';     // QnA 컨텐츠 영역 상단바 보이기.
            document.getElementById('actionBar').style.boxShadow = 'none'; // 상단바 그림자 숨기기 
    }
    // 레이어 숨기고 보이기.
    document.getElementById(pastDivID).style.display = 'none';
    document.getElementById(currDivID).style.display = 'block';

    past = current;        // 현재 클릭된 아이콘을 past에 저장하기
    pastDivID = currDivID; // 현재 큳릭된 아이콘의 컨텐츠를pastDivID에 저장하기
}

// 변수 선언
var currQnA, pastQnA = 1;
function clickQnA(currQnA) { // QnA 컨텐츠 버튼 누르면 style 바꾸기.
    var faq = document.getElementById('faqBtn');
    var qna = document.getElementById('qnaBtn');
    switch(pastQnA)
    { 
        case 0:
            faq.style.boxShadow = '-2px 2px 2px #252525';
            faq.style.border = 'none';
            break;
        case 1:
            qna.style.boxShadow = '2px 2px 2px #252525';
            qna.style.border = 'none';
    }
    switch(currQnA)
    {
        case 0:
            faq.style.borderBottom = '2px solid #4FE1FB';
            faq.style.boxShadow = 'none';
            document.getElementById('QnAContents').style.visibility = 'hidden';
            break;
        case 1:
            qna.style.borderBottom = '2px solid #4FE1FB';
            qna.style.boxShadow = 'none';
            document.getElementById('QnAContents').style.visibility = 'visible';
    }
    pastQnA = currQnA;
}

// 변수 선언
var nthMiddle, middleLayer, plusMinus;
// 배열 선언 및 초기화
var mLength = 7;
var cntM = new Array(mLength);
for(var i = 0; i < mLength; i++) {
    cntM[i] = 0;
}
function middleShowHidden(nthMiddle, plusMinus) { /* 중분류 레이어 보이고 숨기기. */
    middleLayer = document.getElementsByClassName('middle')[nthMiddle]; // 몇 번째 중분류 레이어인지...

    if((cntM[nthMiddle] % 2) == 0)
    { // 레이어 보이기
        middleLayer.style.display = 'block';
        plusMinus.src = 'image/mMinus16.png';
    }
    else
    { // 레이어 숨기기
        middleLayer.style.display = 'none';
        plusMinus.src = 'image/mPlus16.png';
    }
    cntM[nthMiddle]++;
}

// 배열 선언 및 초기화
var sLength = 8;
var cntS = new Array(sLength);
for(var i = 0; i < sLength; i++) {
    cntS[i] = 0;
}
function smallShowHidden(nthSmall, plusMinus, sParent) { /* 소분류 레이어 보이고 숨기기. */
    if((cntS[nthSmall] % 2) == 0)
    { // 레이어 보이기
        sParent.getElementsByClassName('small')[0].style.display = 'block';
        plusMinus.src = 'image/gMinus.png';
    }
    else
    { // 레이어 숨기기
        sParent.getElementsByClassName('small')[0].style.display = 'none';
        plusMinus.src = 'image/gPlus.png';
    }
    cntS[nthSmall]++;
}

function channel() { /* 동영상 업로드 한 사람 프사를 누르면 채널 정보 띄우기. */
    document.getElementById('actionBar').style.display = 'none';      // 액션바 숨기기.
    document.getElementById('QnABar').style.display = 'none';         // QnA 컨텐츠 영역 상단바 숨기기.
    document.getElementById(pastDivID).style.display = 'none';        // 페이지 숨기기.
    document.getElementById('channelTop').style.display = 'block';    // channel 상단 보이기.
    document.getElementById('channelCom').style.display = 'block'     // channel 페이지 보이기.
    document.getElementById('channelCom').style.visibility = 'hidden' // channel 페이지 구조만 보이기.
    // 프사를 누르면 채널의 '홈'페이지가 가장 먼저 뜨게 하기.
    menuChild = document.getElementById('channelMenu').getElementsByClassName('menuBtn');
    for(var i = 1; i < menuChild.length; i++) {
       menuChild[i].style.borderBottom = 'none'
    }
    previousBtn = document.getElementById('channelMenu').firstElementChild;
    previousBtn.style.borderBottom = '3px solid #FBFBFB'
}

// 변수 선언
var pageNum, pageBtn;
function channelPage(pageNum, pageBtn) { /* 채널 컨텐츠 내의 5개 페이지 정보 보이고 숨기기. */ 
    previousBtn.style.borderBottom = 'none';          // 클릭되어있었던 버튼 스타일 숨기기.
    pageBtn.style.borderBottom = '3px solid #FBFBFB'; // 현재 클릭된 버튼 스타일 바꾸기

    document.getElementById('channelCom').style.visibility = 'hidden' // 커뮤니티 페이지 숨기기.
    if(pageNum == 3) { /* 커뮤니티 버튼이 눌렸을 경우 커뮤니티 페이지 보이기 */
        document.getElementById('channelCom').style.visibility = 'visible'
    }
    previousBtn = pageBtn; // 현재 눌린 버튼 정보를 previousBtn으로 넘기기
}

function upBtn() { /* 상위 메뉴 페이지로 이동 */
    document.getElementById('channelTop').style.display = 'none';    // channel 상단 숨기기.
    document.getElementById('channelCom').style.display = 'none'     // channel 페이지 숨기기.
    document.getElementById('actionBar').style.display = 'block';    // 액션바 보이기.
    if (pastDivID == 'QnAContents') { /* QnA가 상위메뉴일 경우... */
        document.getElementById('QnABar').style.display = 'block';   // QnA 컨텐츠 영역 상단바 보이기.
    }
    document.getElementById(pastDivID).style.display = 'block';      // 상위 메뉴 페이지 보이기.
}