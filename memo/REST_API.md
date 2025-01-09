# REST API란?
REpresentational State Trasfer의 약자<br>
Roy.T Fielding이 소개한 "웹을 위한 네트워크 기반 아키텍처 스타일" 이다.

# REST의 중심 규칙 2가지
#### 1. URI는 정보의 자원을 표현해야 한다

#### 2. 자원에 대한 행위는 HTTP Method 등으로 표현된다

![alt text](image.png)
(출처 : https://meetup.nhncloud.com/posts/92)  <이거 읽어보기>

추가로 정보의 자원에 대해 대충 기록<br>
- OOP에서 객체는 "상태"를 가짐
- 그러나 REST는 stateless이기 때문에 단순히 요청을 처리하기만 하면 됨
- 즉 여기서 정보의 자원을 표현한다는 건<br>
  변화하는 상태와 관계 없이 그 객체의 주소처럼 **객체를 지정(?)해줄 수 있는 정보**를 의미

잘못된 예를 들어보면,
- GET /users/show/1 의 경우 GET에 '본다'라는 표현이 충분히 드러나기 때문에<br>
  /show/ 는 불필요한 표현이 됨
- 즉, 이 경우 GET /users/1 으로 충분하다는 것