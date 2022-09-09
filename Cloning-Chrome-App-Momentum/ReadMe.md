# Cloning-Chrome-App-Momentum
Nomad Coders의 '바닐라 JS로 크롬 앱 만들기' 복습용 클론코딩

## Login 제작
제작일 : 22.09.09

- html 초기 설정
    - 1. 빈 문서에 __html: 5__ 를 입력해서 초기 html 세팅을 불러옴
    ```
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
            </head>
            <body>
            </body>
        </html>
    ```
    - 2. head에 title과 link(CSS 불러오기) 입력
    ```
        <link rel="stylesheet" href="style.css">
        <title>Momentum App</title>
    ```
    - 3. body에 script(js 불러오기) 입력
    ```
        <script src="app.js"></script>
    ```

- __개발 순서 (내 생각)__
    - 0. __계획 구성__ 을 통해 뭘 만들지 생각
    - 1. html로 대략적인 틀 잡기
    - 2. css로 html 위치 조정 (모습 다듬기)
    - 3. js로 필요한 동작 구현
    - 4. js 개발 중 필요한 부분 수정
        - __중복 제거__ : 임의로 입력되는 string이나 중복되는 함수 묶어서 정리
        - html : 태그 변경 및 필요한 클래스, id 선택자 추가
        - css : 필요한 클래스, id 선택자 추가
        - 폴더 : 파일의 상하관계에 맞게 파일 정리