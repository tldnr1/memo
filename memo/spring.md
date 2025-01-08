## 기본적인 폴더 구조
1. controller : 사용자의 요청/응답 처리
2. service : 비즈니스 로직 (데이터 처리/가공 후, 결과를 Controller에 반환)
3. repository : DB 엑세스
4. entity : DB와의 매핑 (코드에 숨기는 느낌)
5. DTO : 클라이언트에게 전달할 데이터 가공

## 구조 간의 상호작용
1) 클라이언트가 HTTP 요청을 보냄 --> Controller에서 수신
2) Controller는 요청을 처리할 Service를 호출
3) Service는 비즈니스 로직을 수행하며, 필요하면 Repository를 통해 DB와 상호작용
4) 데이터는 Entity 객체로 조회되며, Service가 이를 가공하여 DTO로 변환
5) DTO를 Controller가 클라이언트에게 응답으로 반환

- 흐름으로 보면 다음과 같음
- 클라이언트 -> url 통해 요청 -> Controller -> Service -> Repository -> DB
<br>-> Service -> DTO -> 클라이언트

### DTO와 Entity
- DTO (Data Transfer Object)
  - 외부와의 데이터 교환을 목적으로 설계됨
  - 계층 간 데이터 전송에 사용되는 객체
  - 보통 Entity를 외부에 노출하지 않고, 필요한 정보만 포함시켜 보안과 성능을 향상
  - 클라이언트가 필요한 데이터만 전달하거나 데이터를 가공해 전달
  - 주로 Controller와 Service 사이에서 사용
- Entity
  - DB 테이블과 1:1 매핑됨
  - DB 구조와 비슷하며, JPA 어노테이션(@Entity, @Table, @Column)으로 매핑 정보 정의

- 왜 분리?
  1. 보안 강화
     - Entity를 클라이언트에 직접 반환하면 DB 구조와 민감 정보 노출의 위험
  2. 데이터 관리 효율화
     - Entity는 DB 작업에 집중, DTO는 전송에 집중하여 역할 분리
  3. 유지보수 용이
     - DTO 사용하면 클라이언트의 요구사항에 맞춰 별도의 데이터 구조를 설계 가능
     - Entity 변경 시 DTO가 영향을 받지 않으므로 더 유연하게 확장 가능
  4. 확장성
     - API 응답이나 요청이 변화하더라도 DTO만 수정하면 되므로 서비스 로직과 DB 구조를 독립적 유지 가능