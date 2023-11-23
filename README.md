# newsapp



***10.13(금)***

<aside>
✅ 공식 명세서 받기 전, 둘이서 사전 아이디어 회의:

</aside>
주제는 운동으로 추측. 
필수 기본 기능 구현은 관통 프로젝트 때 해왔던 기능들로 추측.
아마 영상 목록 및 각각의 영상 보여주기, 로그인, 회원가입, 구독, 찜하기 등.

처음 아이디어는 영상 사이트 구현 
⇒ 이후 피드백을 받아 주제별 뉴스 사이트로 변경.

영상 사이트로 만들면 지금까지 해왔던 관통 프로젝트와 너무나도 흡사하기 때문에 차별점을 둘 의미가 없으리라 판단. 또한, 뉴스 사이트로 만들면 운동을 포괄하여 더욱 확장된 주제를 다룰 수 있을 것이라고 생각. 특히 뉴스의 경우 각기 다른 신문사 사이트에 가서 Python으로 크롤링이 가능하기 때문에 대량의 데이터를 비교적 수월하게 다룰 수 있다. 크롤링 시 selenium(의 request)이나 beautiful soup 등을 이용해볼 수 있겠다.

상단에 테마 분류 버튼을 만들어 운동 (헬스) / 식단 (다이어트) / 의사 및 전문가 조언 (지병, 유전병 등)으로 주제를 확장하여 나눔. 이전부터 헬스케어 관련해서 관심이 있었기 때문에 그에 관련된 확장 주제들을 집어넣기로.

추천 영상 띄우기 
⇒ 언론사별 기사 목록을 각 게시판에 나눠 띄우기 + 테마에 따라 기사가 달라지게 설정.  필요 시 페이지네이션도 적용해보도록 함.

구독 시 구독 영상을 따로 묶어 볼 수 있도록 구현 
⇒ 구독한 언론사의 게시판이 상단에 위치하도록 설정.

구독(팔로우) 기능에 구독료 혹은 멤버십을 이용한 유료 결제를 구현 
⇒ 언론사 구독 + 유료 결제를 한 회원에 한하여 프리미엄 기사를 볼 수 있도록 설정.

댓글 및 리뷰를 영상마다 구현 
⇒ 한 기사 당 최대 하나의 영상(의사 및 전문가 조언 주제는 뉴스가 아닌 칼럼을 위주로 하기 때문에 따로 영상을 넣지 않는다)을 넣고 각 기사의 하단에 댓글을 달 수 있는 댓글란을 구현. 필요 시 페이지네이션도 적용해보도록 함.

좋아요, 싫어요, 글 검색, 로그인, 회원가입 기능 구현.
좋아요 및 싫어요는 사용자 ID를 인식하여 한 번 더 누를 시 취소되도록 설정.
회원가입 시 개인 건강 기록을 필요한 경우 작성하게 하고, 각 주제에 대한 체크박스에 본인의 관심사를 복수 체크하게 해 해당 관심사가 상단에 위치하도록 설정.

글 작성은 기자인지 확인하는 변수를 이용해 일반인의 경우 작성할 수 없도록 설정.

프리미엄 기사는 프리미엄 결제를 했는지 확인하는 변수를 이용해 일반인 혹은 구독은 하되 결제는 하지 않은 구독자의 경우 볼 수 없도록 설정.

만약 광고창을 만들 거라면 회원 별 관심사를 이용해 인근 헬스장이나 추천 운동 기구 소개 / 추천 보조식품 혹은 영양제 소개 / 인근 병원 소개 등의 광고를 GPS 기능까지 구현해 적절하게 배치하기로.

필요 시 AI의 API를 긁어와 QnA 기능에 이용.

영상 연속 재생 기능 구현 
⇒ 뉴스 사이트로 변경되어 계획 철회.

구독 영상 및 회원의 관심사별 새 영상 실시간 알림 구현 
⇒ 구독한 언론사의 새 기사 및 회원의 관심사별 새 기사 알림 구현. 이 때, 팝업이나 SNS 푸시 알림 서비스처럼 실시간 알림을 띄울 지, 회원에게 구독 레터처럼 메일 서버에 메일을 전송해 알림을 보낼 지 고민 중. 클라우드 기능을 이용해 모든 알림을 모아서 보내되 각 회원의 관심사와 비교해 일치할 경우에만 개개인에게 맞춤 전달이 가능하도록 필터링해볼 수 있겠다. 혹은 spring scheduler 의 주기적으로 전송하는 기능을 통해 구독 레터처럼 일정 시각마다 전송하도록 설정해볼 수도 있겠다.

프로젝트 코드는 Github로 branch하여 협동할 예정. 다만 둘이 반반씩 나눠서 분담하기보다는 한 코드를 함께 작업하는 방향으로 진행. 그 과정에서 각자 배울 수 있는 것은 배우고, 서로 알려줄 수 있는 것은 알려주는 방식으로 할 예정.



***10.27.(금)***

<aside>
✅ DB:

user, article, board(필요 시), comment, video, 구독, 좋아요, 싫어요, 찜(즐겨찾기), premium 표 작성할 예정. 

user가 기자일 경우에만 글(기사) 작성 버튼을 볼 수 있도록 설정. 

lft, rgt, depth 요소를 이용해 페이지네이션 구현 예정. 페이지네이션은 집합 포함 관계를 이용해 부모의 rgt 이상인 모든 값에 2를 더하고, 그 사이의 이용되지 않은 값들이 각각 자식의 lft와 rgt가 된다. 그림으로 그렸을 때 U자 모양으로 그려지면 포함 관계라 봐도 무방. 이 때, 자기 자신이 자기 자신의 부모도 된다고 가정. 이후 child 표와 parent 표를 self join해 대댓글을 구현. 이를 Nested Set Model이라고 부른다.

회원 표 user, 기사 표 article SQL 작성 완료. 

</aside>

<aside>
✅ Java: 
DB를 기반으로 config, controller, application, model.dao, model.dto, model.service, mappers, application.properties, pom.xml 작성 완료.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/24ac52a9-4e10-46b3-97eb-9853811b23cc/9175b6d2-fcf4-4a4b-bcd0-eb0c34de3221/Untitled.png)

</aside>

<aside>
✅ Swagger-ui 및 VS-code로 REST-API 메소드 작동 여부 테스트:

실행 확인 완료.

</aside>

<aside>
⚠️ Spring에서 Swagger를 사용해 보려다가 Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException 에러 발생:

⇒ application.properties 파일에 spring.mvc.pathmatch.matching-strategy=ant_path_matcher를 추가했으나 여전히 에러 발생.

⇒ pom.xml 파일에 빠졌던 io.springfox 의존성들을 추가로 부여해 해결.

</aside>

<aside>
⚠️ Spring Boot에서 RestController의 mapping이 안 되는 에러 발생:

⇒ SsafYpjtApplication.java가 속한 Hello 패키지와 별도의 패키지를 만들어 작성하는 바람에 실행이 되지 않음. basePackages가 달라서 생긴 문제였음.

⇒ 직접 작성했던 com.ssafy.pjt 패키지로 SsafYpjtApplication.java 파일을 옮겨 해결.
(혹은 옮기지 않는 대신에 SsafYpjtApplication.java 파일 상단에 @ComponentScan(basePackages = “com.ssafy.pjt”)을 작성해도 똑같이 해결됨)

</aside>

<aside>
⚠️

</aside>

<aside>
🎯 사소한 실수들: 

@Server 등 Annotation을 빠뜨리고 작성. 

ArticleMapper 작성 도중 parameterType의 “Article”에서 대소문자 혼동.

</aside>



***11/03(금)***

<aside>
✅ GitHub 사용법 및 명령어 학습:

branch 종류(이름은 임의로 명명):
- master: 직접 작업하지 않는다. 완성된 코드를 유지하는 용도. 유저들이 실제로 활용하는 환경.
- develop: 코드를 병합하고 작업하는 브랜치. 주로 공통 기능을 작성한다. 개발 환경 구성에도 쓰인다.
- feature/login: 개인 브랜치에 로그인 기능을 구현한 것.
- feature/enroll: 개인 브랜치에 회원가입 기능을 구현한 것.

명령어:
- git init: 초기화
- git status: 깃 상태 보기
- git switch -c develop: 해당 브랜치가 없을 경우 새로 만들면서 디벨롭 브랜치로 이동
- git switch develop: 디벨롭 브랜치로 이동
- git remote add origin url: 여기서 url은 만들어 둔 레포지토리의 url을 말한다. 원격저장소 설정
- git add .: 추가
- git commit -m 원격저장소명: 저장 혹은 수정
- git push origin develop/master: 파일 푸쉬하기
- git switch master: 마스터 브랜치로 이동

작업 방법:
new pull request 만든 뒤 base는 master로, compare는 develop으로 설정해 팀원과 코드 리뷰가 가능하다.
여기서 assign은 본인이 했다는 것을 표시하며, files changed에서 리뷰 작성이 가능하다.

개별 기능을 작성하기 위해서는 
우선 해당 개별 브랜치(예를 들어, feature/login)에 가서 git merge develop
그 후 develop 브랜치로 옮겨가서 git merge feature/login
이런 식으로 양 방향 머지를 한다.
예시로 든 feature에는 login과 enroll 2가지가 있었는데, 만약 login쪽을 develop과 머지했다면 enroll이 develop과 파일 내용이 다른 상태가 되어서 무턱대고 합쳤다가는 충돌이 일어날 수 있다.
이러한 상황 때문에 양 방향 머지를 하되, 먼저 본인의 개별 브랜치에서 develop 코드를 안전하게 지키면서 머지가 될 때까지 시도해볼 수 있는 것이다.
이 때 develop 쪽을 나중에 찾아가서 머지하는 것은, develop 브랜치와 나 자신이 작성한 개별 브랜치가 서로 합쳐지면서 충돌이 날 수 있기 때문에 이로 인해 develop 코드가 망가지지 않도록 하기 위함이다.
develop 코드의 안정성을 위해 충돌을 해소한 뒤 정상 작동이 될 때까지 개별 브랜치에서 머지를 시도한다. 이후 안전하다는 것이 확인되었을 때 develop으로 옮겨가 똑같이 머지를 해주는 것으로 마무리한다.

git push origin develop
푸쉬를 할 경우 개별 브랜치(여기서는 feature)까지 해 줄 필요는 없다. 어차피 develop에 모을 것이기 때문.
git pull origin develop
원격저장소에서 당겨온다 (= 충돌 해소를 위해 다른 사람의 수정되어 올라간 코드들을 다운 받는 개념으로 보면 된다. 이를 통해 추가되거나 수정된 다른 사람들의 코드들을 갱신한다.)

</aside>

<aside>
✅ 아이디어 회의 중간 점검:

DB에 user 테이블 정보 필요.
회원가입 시 row를 추가, 회원삭제 시 row를 삭제.

운동(영상) 테이블은 지난 관통 프로젝트에서 가져오면 될 것 같음.

article 테이블에서 페이지네이션 관련해서는 잠시 제쳐두고, joinedat라는 기준명은 createdat으로 통일하는 게 좋다.

권한(기자, 관리자 = admin)은 정규화해서 권한 테이블을 따로 빼서 만들 것.
spring security를 이용하면 권한을 막을 수 있다. 이는 인터셉터의 확장판으로 보면 되며, 찾아볼 시 role 테이블, 인증과 권한 설계라고 검색해보면 된다.

preferrence도 category처럼 따로 표를 빼고 user와 연결할 것.
foreign key로 id와 board 관련 요소들을 연결해주자.

viewcnt를 표에 넣었을 때의 문제를 고민해보도록 하자.
영상 조회수를 넣겠다면 영상 표, 기사 표를 따로 만들어서 viewcnt를 만들면 되니 문제없다.

리뷰 기능 구현은 댓글 기능으로 동일시하기로 하자.

언론사 구독으로 가되, 작성자 명에는 기자 명을 표시하기로 하고, 언론사 테이블을 만들기로 하자. 만약 기자를 구독하는 방향으로 간다면 다른 방식을 써야.

프리미엄 기사 및 결제는 API를 긁어오면 되겠지만 시간 상 애매할 수 있다. 필수 기능 구현이 아니므로 당장은 필요 없겠지만, 그럼에도 넣겠다면 구독 테이블에 premium이라는 기준 명을 넣고 0 혹은 1로 표현할 수도 있다.

만약 크롤링해서 정제된 데이터를 가져올 수만 있다면 DB는 [기존 데이터 + 크롤링]이 될 테니 정제가 꼭 필요할 것이다. 물론 이에 대해서는 우리가 아닌 강사님의 의견이었으므로 꼭 여쭤보고 다시 결정해볼 필요가 있다.

또한, 뉴스 사이트로 갈 지 영상 사이트로 갈 지 명세서에 얼마나 따르는 게 좋은 것인지 꼭 여쭤보고 결정하자.

조회수 관련해서는 여러 사람이 많이 보면 한 사람 당 업데이트 쿼리가 한 번 나가게 되어 DB에 부하가 걸릴 것이다. 보통 +1씩 하는 카운트여서 lock을 걸고 동기화 단계를 설정하는 방법이 있긴 하지만, 성능이 저하된다는 문제점이 있다. 그래서 redis에서 제공하는 increment를 이용하면 좋다. 이는 싱글 스레드라서 한 사람 당 하나로 치며, 빠르기까지 해 대규모 트래픽 상황을 방지 가능할 것이다.

comment_like, comment_dislike, article_like, article_dislike처럼 좋아요 싫어요를 굳이 나누는 건 조금 과할 수 있다. 물론 comment와 article처럼 대상 별 분리는 당연히 필요하다. lock을 걸 때에도 like와 dislike에 거는 편이 더 낫다.

preference theme은 1대1 정규화를 하는 게 좋다.

뷰에 스프링을 연결하는 건 유튜브에 검색하면 다 나올 것이다. allow도 해주고, 그 외 등등 검색해보면 그리 어렵지 않다.

알림 시스템 구조 설계 꼭 해볼 것!
실질적으로는 팝업 쪽이 맞긴 하나, 지금의 실력으로는 메일 형식이 더 쉽다.
중요 키워드는 “실시간”이라는 것!

알림 서버가 죽었을 때 다른 서버로 대체 가능하도록 대비해둬야 하는가 고민해보자.
예를 들어, DB를 매번 조회하기 힘드니 캐시를 적용한다거나, 알림 대상자를 또 분류하기 위한 작업 서버가 부하를 얼마나 어떻게 처리할 지 등.

객체지향으로 작성한다.
entity는 되도록 DB에만 연결시키는 게 좋다. DB schema가 변경되거나 데이터가 변할 때 등 수정이 어려워지기 때문.
도메인, entity, DTO 꼭 분리하자.
- 도메인: 비즈니스의 핵심 로직이 들어간 클래스. 그 외의 아무 영향도 받지 말아야 함. 아무 의존성도 없음. DAO와 완전히 다르다. (엄밀히 보면 수업 때 배운 DTO 작성이 원래는 도메인) (건드리지 말아야 하는 성역)
- DAO = entity.
- DTO: 담아서 옮길 요소만 작성하는 것. 예를 들어, login_dto가 있다면 로그인 정보를, enroll_dto는 가입 정보를 담아야 한다. 물론 가입의 경우 모든 정보를 보내야 하므로 user.dto와 흡사하다. 컨트롤러에 전달하고 나면 해체되고 끝나야 한다. (임시로 거쳐 감)
그럼에도 API가 바뀔 수도 있고, 요구 사항이 추가될 수도 있기 때문에 분리는 필수적이다!
(개발하다 보면 쓸데없는 클래스가 많아지는 이유도 객체지향으로 전부 분리하여 작성하기 때문이라고 볼 수 있다.)
일반적으로 레포지토리를 DAO로 보는 경우가 많긴 함. 도메인 객체와 분리할 것. 이를 어떻게 만들지 생각해보자.

</aside>

<aside>
🎯 향후 계획:

- 더 알아볼 것:
깃 merge와 이로 인한 충돌(conflict) 해결 방법.
깃 rebase = 플로우를 편하게 해주는 것으로, 머지보다 많이 사용됨.
role 테이블, 인증과 권한 설계. (spring security를 통한 권한 막기)
대규모 트래픽 상황 해결 방법. (redis에서 제공하는 increment)
뷰 연결 및 allow하는 방법. (유튜브에서 검색)
알림 시스템 구조 설계. (팝업/메일 등 실시간 알림으로)

- 강사님께 피드백 얻을 부분:
크롤링을 통한 데이터 정제가 가능한가. (필수적으로 크롤링을 해야만 하는가)
뉴스로 갈 지 영상으로 갈 지 사이트의 방향성을 다시 한번 여쭤보고, 명세서에 어디까지 따라야 하는지 엄격성을 파악.

- 꼭 생각해 볼 문제:
동시 시청자가 많을 경우 조회수에 관련해서 DB에 부하가 걸리는 문제가 발생할 것. 이러한 대규모 트래픽 상황을 해결할 방법이 무엇인가 고민해보기. (redis에서 제공하는 increment)
알림 서버가 죽었을 경우 다른 서버로 대체 가능하도록 대비할 수 있는 방법이 무엇인가 고민해보기. 캐시 적용 혹은 알림 대상자 분류 작업 서버가 부하를 처리하는 방법 등.
도메인 객체와 DAO를 분리하는 것. 이를 어떻게 만들지에 대해 생각해보기.

- 추후 면접 등에서 다룰 수도 있는 것:
정규화를 일반적으로 1부터 3까지만 알아두고 있지만, 아마 4로는 해볼 생각을 하지 않았냐든지 정규화가 과하지는 않았는지 비정규화할 수도 있지 않았는지 장단점에 대해 질문이 들어올 수도 있다. 이를 단계별로 잘 알아두고 다대다 관계에서 포함 관계가 복잡할 때의 정규화를 고려해야 하고, 과하게는 아니되 조인 관계를 잘 풀어놓을 수 있어야 한다.

</aside>



***11/09(목)***

<aside>
✅ 피드백 받은 답변들 정리:

1) 크롤링 
- 크롤링은 되도록 해 보고 안 되면 더미 데이터를 만들어 넣을 수도 있다. 뉴스 사이트는 크롤링을 막아뒀을 확률이 크기 때문.

2) 명세서에 어디까지 따라야 하는지 (뉴스 사이트로 유지 or 명세서대로 영상 사이트로 원상복귀)
- 뉴스 사이트 그대로 유지하되, 명세서에 언급된 기능 구현도 대상만 바꾼다는 전제 하에서는 무방. 기능을 구현할 줄 아는지를 평가하기 위함이므로.

3) 대규모 트래픽 해결에 사용된다는 redis의 increment에 대해
- redis queue라는 것이 있다. 이는 조회수가 올라갈 때 생기는 병목 현상을 예방할 수 있다. 차곡차곡 쌓고 하나씩 꺼내 처리 가능한 수준만큼만 서버로 보낸다. 또, 메모리에서 돌아가기 때문에 더욱 빠르다. (캐시로 조회수 정보를 꺼내는 방법도 이용해볼 수 있겠다.) 물론 메모리 사용에 한계가 있긴 하다. 최대 53GB 정도이며, 클러스터링하면 530GB까지도 가능하다고 한다. MySQL의 경우 innodb를 사용해 TB 단위까지도 다룰 수 있다고 한다.

4) 알림 시스템 메일로 설계 시 알아둘 것
- 메일 서버 SMTP라고 따로 있다. (HTTP 말고 다른 것.) Spring email 검색해보기. (구글 계정 필요할 것).

</aside>



***11/10(금)***

<aside>
✅ Github에 Organization 만들기 전 오프라인에서의 역할 분담:

- 본인:
Spring Boot 공통 기초 작업 코드 작성 후 수정 및 logout 부분 추가 작성.
SQL DB 표 수정.
크롤링 결과를 배분해 DB에 insert 및 join 결과 테스트.
Vue.js 틀만 미리 작성. (Router, Pinia, CSS, Axios 사용 일절 없이 뼈대만.)
Swagger-ui 사이트에서 Spring Boot 메소드들 작동 여부 확인.

- 파트너 팀원:
Python으로 크롤링 작업 및 더미 데이터 작성.
SQL DB에 연동 확인.
크롤링 경과를 배분해 DB에 insert 및 join 결과 테스트.
Spring Boot 추가 수정 후 Swagger-ui 사이트에서 메소드들 작동 여부 확인.
코드 작성 작업 도중에 생긴 오타 및 빠뜨린 부분 확인 작업.

</aside>

<aside>
⚠️ 크롤링 관련 문제 발생:

생각보다 크롤링이 굉장히 어려워서 배우는 데에 시간을 잡아먹었음.

미리 찾아뒀던 뉴스 사이트들의 대부분이 크롤링을 막아두는 바람에 DB 테스트 시도가 어려워졌음. 결국 실제 기사를 그대로 받아 적은 형태의 더미 데이터를 동원하는 방식으로 변경.

</aside>

<aside>
⚠️ 해소되지 않은 점:

category가 user와 다대일 관계인데, 정규화해서 표를 다로 파는 게 좋을지.

만약 그대로 user 표 안에 둔다면 어떻게 다중선택을 표현할 수 있을지.

실제로 테스트해 본 결과, category를 0개(= null) 혹은 1개를 작성했을 때는 문제가 없었으나, 2개 이상을 작성했을 시 오류가 떴음. 추후 체크박스로 구현하고 싶은데 DB에 어떻게 표현해야 할 지 구상을 거듭하는 중.

</aside>

<aside>
🎯 사소한 실수들:

SQL문 크롤링 결과물 내의 큰 따옴표 앞에 escaping을 위한 백 슬래쉬(\)를 작성하지 않아 오류가 뜸.

SQL문에서 join한 foreign key들의 default 값들을 임의로 적어두지 않아 테스트가 불발되었음.

Spring에서 엔티티(DTO)를 수정하다가 video_url 작성을 빠뜨려 계속 테스트에 오류가 뜸. 처음에는 원인을 몰라 계속 헤매어 찾아다녔음.

</aside>



***11/13(월)***

<aside>
✅ 오늘의 협업:

Github에 만든 Organization 내의 newsapp 프로젝트에서 branch develop을 추가로 생성. 
branch develop으로 이동해 공통 기초 작업 코드 (Spring Boot + Vue.js) 업로드 성공. 
그 후 업로드한 코드들을 Back과 Front 폴더로 나누는 작업 시도해봤으나, 일부만 들어가서 불발.

</aside>



***11/14(화)***

<aside>
✅ 오늘의 협업:

Github의 back, front 폴더 분배 해결: 실제 로컬에서 back, front 폴더를 미리 만들고 push.
Git Bash로 Github과 로컬을 연동하는 테스트 연습 및 업로드 성공.
branch feature/user을 만들어 공통 기초 작업 코드를 자잘하게 수정한 후 업로드 성공.

- 본인: 
기존에 작성해둔 Spring Boot 및 Vue.js의 회원 정보 CRUD 및 로그인, 로그아웃 메소드들을 Router, Pinia, Axios를 추가 수정해 가며 서버와의 연동 테스트 시도.

- 파트너 팀원:
Vue.js 틀의 디자인을 구체화해서 nav 태그 작동하도록 만듦.

</aside>



***11/15(수)***

<aside>
✅ 오늘의 협업:

- 본인:
어제 수정하던 Spring Boot와 Vue.js 코드에 Token을 적용하는 방식으로 변경해 방향성 수정. 
수정 작업을 진행하면서 강사님께 토큰에 대해 다시 배우며 복습도 병행. 
토큰 적용한 Spring 및 Vue 코드 완성. 
들어뒀던 설명을 다시 파트너 팀원에게 전달해서 코드에 대한 이해도를 높여 혼란을 방지함.
수정된 Spring Boot 코드는 파트너 팀원에게 전달해 협업 작업에 그대로 사용할 수 있도록 함.
Git Bash로 branch feature/front/login을 만들어 완성한 Vue.js 코드만 업로드.
추후 파트너 팀원이 Spring 테스트 후 완성해서 feature/back/jwt에 업로드하면 그걸 fetch해 Vue와 연동시켜 테스트해 볼 예정.
귀가 후 파트너 팀원의 Spring 코드 중 mapper 오타 수정해 전달.
함께 검색 기능 불발의 원인을 고민해봤지만, 내일 강사님께 확인해보기로 함.

- 파트너 팀원:
들은 설명을 토대로 전달 받은 Spring 코드로 전면 수정.
귀가 후 Spring 코드의 회원 수정 기능과 검색 기능 수정 및 테스트 시도.
mapper 코드 오타 수정 후 Git Bash로 branch feature/back/jwt에 업로드.
회원 수정 기능은 정상 작동했으나, 검색 기능은 토큰 문제가 원인 인 것으로 추측되어 내일 강사님께 확인해보기로 함.

</aside>

<aside>
⚠️ 생각해 볼 부분들:

기사의 CRUD 코드에서 category 분류를 따로 구현해서 한 페이지로 통합할 것인가, 혹은 아예 category 별로 페이지를 개별적으로 만들어 단순 작업을 할 것인가.

권한 부여 0,1,2의 구현을 어떻게 Spring과 Vue 코드에 작성할 것인가. Spring Security에 대해 구글링해보고 이를 이용할 것인가.

발표용 PPT 제작, 발표자, Github의 README 작성 등 추후 어떻게 할 것인가.

</aside>



***11/16(목)***

<aside>
✅ 오늘의 협업:

-본인:
* 오늘의 목표
유저 관련 back 코드를 받아와서 front와 연동하는지 테스트하고 수정하기.
추후 기능별로 분담해서 카테고리 나눠서 뷰 전환하기, 대댓글, 찜하기 (기사 crud 완성되면 그 안에 추가) 구현해보기.
# 낮 3시 48분 경
일단 유저 관련해서는 인터셉터 없앤 상태로 기능 테스트 완료. develop에 업로드 완료.
스프링: 토큰 관련 인터셉터에서 문제가 터졌는데 아직 모르겠음, 더 수정해볼 생각.
뷰: 변수에 중괄호 { } 빠뜨린 것과 변수명 바뀐 것들 반영 안 한 실수로 작동 잘 되던 것들이 불발했는데 다시 작동하게끔 만듦.
# 낮 4시 48분 경
인터셉터 켰을 시 작동 안 되던 유저 코드 front & back 수정 다 했으나 검색 기능 + 로그아웃 버튼이 새로고침 시 로그인 버튼으로 혼자 바뀌는 문제에서 막힘. 일단 user name부분이 문제인 것 같은데 계속 찾아보고 있지만 모르겠음. 추후 해결 예정.
# 그 이후
유저 수정 완료, 테스트 완료. 알고 보니 인터셉터 문제가 아니었다!
카테고리 별로 어떻게 컴포넌트 내용을 갈아끼울 지 설명을 간략하게 들음. router link에 category를 가져와 bind하고, 그 category의 변화를 watch에 넣어 변화를 감지해 일회성이 아니라 계속 nav를 누를 때마다 category의 component 내용들도 변하게끔 설정 가능.
유저 부분이 완료된 코드를 develop에 push해 둠.

-파트너 팀원:
* 오늘의 목표
유저 관련 back 코드 완성해서 나한테 보내기.
추후 기능별로 분담해서 기사 crud + 영상 url 넣기. 
(작성 및 수정에도 영상까지 가능한지 확인) 
# 낮 4시 48분 경
크롤링으로 건강식품 데이터 뽑아오는 중.
# 그 이후
크롤링도 하면서 문제 해결 방법에 대한 설명 함께 듣고, 카테고리 별 컴포넌트 내용 변화 방법의 방향성 설명도 함께 들음.

</aside>

<aside>
✅ 피드백 받은 답변들 정리 (실무에서의 작업 관련 조언 포함):

일반적으로 화면 구성 코딩은 한 화면에서 다 처리하게 만든다.
html에서 table 혹은 div 등을 이용해 보여주고 숨기는 방식을 이용하면 좋다.
예를 들어, list 스크린 하나, detail 스크린 하나 이런 식으로 하면 되겠다.

DB에서 category id, 저장한 시간이 있을 것이고, 그 것들을 이용해 sorting하면 카테고리 별로 글의 CRUD가 가능해질 것이다.

DB 설계 시 테이블 자체의 ID field가 있는 게 관리하기 편해서 좋다. (auto increment한 바로 그 id)

테이블에 레코드를 넣을 때 시간과 누가 넣었는지도 알아야 한다.

각각의 테이블마다 history 테이블이 있으면 더 좋다. 
history란, 예를 들어 1차 수정 후 2차 수정을 했으면 2차 수정한 시간만 modified_at에 갱신되어 남게 되는데, history에는 1차, 2차 시간을 모두 남겨 두는 것을 말한다.
이를 통해 원본 테이블이 바뀌면 history 테이블에서 무엇이 바뀐 건지 알 수 있다.
또한, history 테이블에도 바뀐 시간(작성 시간 및 수정 시간), 바꾼 사람(작성자) 정보를 추가한다.
왜냐하면 원본 테이블에 저장되면 이전 레코드가 덮어 씌워지기 때문이다.

삭제할 때에는 실제 레코드에서 삭제하는 게 아니라, 실무에서는 이걸 삭제했다고 flag하는 필드가 따로 있다. 레코드는 그대로 남아있고 유저에게만 보이지 않는 것. 
(세션 얘기와는 다르다. 세션은 로그인한 상태에서 가지고 있는 값)

user 테이블도 user type이 필요함.
원래는 각각의 페이지마다 페이지 id가 필요하고, 그 page id에 user 혹은 user type에 따른 page permission이 필요하다. 
아무나 해당 페이지에 권한을 갖게끔 하는 게 아니게끔. 
물론 우리의 프로젝트는 애초에 작업 페이지 수가 적어서 상관 없을 것.

가장 중요한 건 비밀번호는 절대 plain 값을 그대로 써서 저장하면 안 된다는 것!!
주로 가입 때 암호 저장에 쓰이며, 로그인 시 비밀번호를 매칭할 때에도 쓰인다.
로그인이든 가입이든 비밀번호는 무조건 encrypt(암호화)를 해준다. 
(토큰과 암호화는 다르다. 암호화에 토큰이 추가된다면 모를까. 수업에서 배운 것이 base64라면 그걸 쓰라는 얘기일 지도 모르겠다)
그 암호화한 것을 다시 디코딩해서 DB와 비교하는 방식으로 진행해줘야 한다.
즉, cyber security가 제일 중요하다.

SQL injection 핸들링도 해야 한다. 요즘 제일 중요한 것이 바로 이거다.
물론 이건 advanced 개념이라 프로젝트에서 따로 언급이 없었다면 패스해도 무방하다.

메일 실시간 알림의 경우 메일 서버에 레코드 추가하고 스케쥴러로 메일을 발송시킨다.
메일 서버에도 보낸 시간 timestamp를 넣고, timestamp가 없는 레코드(= 아직 전송되지 않은 메일)만 검색해 메일을 발송한다. (mail_sent_at is null) 
이 때, default 값이 null이 되게 하는 것.
현업에서는 어지간하면 timestamp가 다 필요하다.
boolean flag도 많이 쓰긴 하지만, 이 경우 언제 보냈는지 저장하는 게 오히려 낫다.
즉, 기사를 저장하고, 저장하는 동시에 메일 서버에 올리고, 메일 발송 스케쥴러가 보낸 시간이 없는 레코드를 추려서 전송하는 식으로 진행된다.
이걸 가능하게 하려면 transaction을 이용한다. 
레코드 저장 시 동시에 여러 개 저장이 가능하게 만들어준다. 
이 때 now()를 직접 쓰지 말고, strNow = now() 처럼 써서 strNow로 써야 여러 테이블에 똑같은 timestamp가 저장된다. 
만약 now()를 써버리게 되면 transaction하는 동안 밀리세컨드 차이로 다른 timestamp가 찍혀버리는 문제가 발생한다.

transaction은 one fail, all fail로 디자인하는 게 좋다.
적어도 하나에서 뻑났다면 (트랜잭션 시 뻑나기 직전까지 진행되었던) 모든 테이블에 저장했던 레코드도 없애준다. 
물론 하나라도 실패하면 rollback시켜준다.
(만약 테이블이 1개라면 의미 없긴 하다)

timestamp을 굳이 쓰는 이유는 종종 article.time = mail.time 처럼 timestamp를 비교하는 상황이 생기게 되기 때문. 
이 때 밀리세컨드가 달라서 결과 값이 안 나오는 걸 방지하기 위함이다.

* 재정리:
새 기사를 추가할 때 동시에 여러 테이블에 저장할 경우, now()보다는 strNow같은 변수에 저장시켜 똑같은 timestamp를 여러 테이블에 동시에 저장시키는 게 좋다.
각각의 insert into 테이블에서 now()를 쓰면 timestamp가 미묘하게 달라져서 레코드가 지저분해진다.
필수 요소라기보다 better design 정도로 알고 있으면 된다.

</aside>

<aside>
⚠️ 새로고침 시 로그아웃 버튼만 로그인으로 풀리는 문제 발생:

로그인 토큰은 제대로 저장되어 있었고, 그 외 로그인 시에만 접근 가능한 페이지들도 열람이 잘 되는 상태였다. 
로그아웃 버튼 변환 태그에 작성된 if문에서 로그인 상태가 true인 경우라는 표현에서의 변수명을 잘못 옮겨적은 문제였다. 
이를 해결하는 김에 {persist = true}로 작성해서 로컬 스토리지에 저장되던 정보를 전부 세션에 토큰 형태로 저장되도록 모든 js 파일의 코드를 전면 수정해 통일시켰다. 이후 정보도 날아가지 않으면서 로그아웃 버튼도 자동으로 풀리지 않게 되었다.

</aside>

<aside>
⚠️ 검색 기능에서 회원 목록에 있는 사람이든 없는 사람이든 모두 res.data가 null로 넘어오면서 디버깅 출력 결과가 계속 ‘검색 성공’으로만 넘어오던 문제 발생:

변수명 userName으로 수정했던 것에 오타로 n을 한 번 더 썼던 것을 몰라 계속 원인을 찾아 헤매고 있었다.
항상 변수명을 수정하고 나면 오타가 있는지 두 번은 확인하는 습관을 가져야겠다.

</aside>



***11/17(금)***

<aside>
✅ 오늘의 협업:

5팀_[엄,,안이] 팀장_엄세원, 팀원_안수진 으로 결정. 
발표 순서 1번째. 발표자 수는 1명으로 할지 2명으로 할지 아직 미정.
처음으로 github 파일을 merge 시도해보고 충돌을 경험. 
필요 없는 부분을 삭제하고 일부 수정하는 것으로 각자 작업 재개.

-본인:
* 오늘의 목표
카테고리 구현 틀만 잡아보는 중(store 메소드 작성 및 기사 crud부터는 짝에게 토스), front는 틀만 잡았고 back에서 category 넘겨서 받아올 수 있는지 알아보는 중.
일단 메소드 완성이 안 된 상태라서 기능이 먹통인 것 같아 push해서 넘김, 이제 댓글 대댓글 구현해보자 (찜하기(북마크) 기능은 기사crud 완성 후에).
* 한 일
mapper, controller 등 spring 코드 comment 부분 작성 및 파라미터 등 수정.
vs code에서 테스트 완. 이 때, rest로 파일 생성 시 테스트가 가능하며, 토큰이 필요하도록 작성했을 경우 테스트 전에 로그인을 꼭 먼저 해주고, 그걸로 나온 token을 긁어서 다른 테스트 시 함께 넣어 보내줘야 결과가 잘 뜬다.
feature/comment에 comment 기능 back 부분은 완성해서 올려둠, front는 아직.
* 생각해 볼 부분
navigation guard 이용해서 회원 목록 관리자만 보일 수 있게 설정 가능.
기사 작성 및 삭제 등 crud에서 read를 뺀 나머지는 role에 따라 v-if 해서 보여주고 감추기 가능.
comment like dislike는 표 새로 DB에 작성해서 빼 둠, 이건 view cnt 이용해서 비스무리하게 작성하면 ok.
페이지네이션은 보류 (추후 도와주실 예정).
createdAt은 어차피 default current timestamp로 설정되어 있어서 굳이 일일이 넣어서 작성할 필요가 없음, 전부 빼둠. modifiedAt은 필요함.
사실 url에 {articleId}를 적어놓은 경우 굳이 articleId까지 같이 입력해서 보낼 필요는 없긴 함.
role도 0,1,2로 같이 데이터 넘어오는 거 vs code 테스트로 확인 완. 이걸 잘 버무려서 v-if 써먹기.
메일 전송 관련해서는 굳이 변수 따로 설정해서 시간 transaction할 필요 없고, spring으로 설정이 가능함 (실제 작성은 일단 보류).
vs code에서 테스트해볼 때, 설정을 exchange로 바꿔주면 내가 보낸 응답과 그 응답의 결과를 한 번에 볼 수 있어 좋다.
* rest-client.previewOption:
full: Default. Full response is previewed.
headers: Only the response headers(including *status line*) are previewed.
body: Only the response body is previewed.
exchange: Preview the whole HTTP exchange(request and response).

-파트너 팀원:
* 오늘의 목표
article crud 구현해보는 중.
* 한 일
feature/board에 카테고리별 기사 목록 띄우는 기능 구현 완료해 올려둠.
나머지 개별 기사의 CRUD는 아직.
* 생각해 볼 부분
article restcontroller에서 파라미터로 String category를 받아온다, 이 때, DB에서는 한글로 적었기 때문에 if문을 써서 영어로 된 것을 한글로 바꿔줌.

</aside>

<aside>
⚠️ 문제 발생 및 해결 방법:

-본인:
router view (전체 화면을 갈아끼울 때)와 실제 view 이름을 넣어야 할 때를 잘 구분할 것. router index.js에서 children은 component가 아니다!
url 중복(article restcontroller & comment restcontroller끼리)이 오류 발생시켜서 url도 수정함. comment restcontroller의 requestmapping을 articleapi에서 commentapi로 수정했더니 정상 작동함.
foreign key 작성했다고 mapper에 꼭 조건 넣어줘야 하는 건 아니다! 특히 comment 수정,삭제 부분.

-파트너 팀원:
카테고리별 색 변화 문제는 통째로 바뀌고 고정되는 문제가 있었는데, 이후 category를 각각 일치하는지 조건을 부여해주니 로그인, 회원가입 등 nav처럼 클릭한 것만 정상적으로 색이 변하도록 기능하게 됨.
header 정보가 빠져서 작동을 안 함, 모든 메소드에 token을 넣어줘야 함.
store의 getarticlelistbycategory에서 파라미터로 category를 받아왔기 때문에 url에도 category를 넣어줌.

</aside>

<aside>
🎯 사소한 실수들:

nickname을 댓글 옆에 표현할 시 nickname도 mapper에 넣어줘야 한다.

store 이름을 바꿨는데 실수로 예전 store명을 쓴 코드가 있었다.

</aside>



***11/19(일)***

<aside>
✅ 오늘의 협업:

-본인:
댓글 CRUD 기능 부분 작성 완료 후 feature/comment에 임시 업로드 완료. 
아직 article 구현이 안 되어있는 파일이어서 npm run dev로 렌더링 모습은 확인 못 했으나, vs code로 간략하게 한 좋아요/싫어요 REST-API 테스트는 잘 되었다.
대댓글 pagination과 기사 찜하기(북마크) 기능은 article 구현된 코드가 필요해서 테스트 및 추가 기능 작성은 보류.

-파트너 팀원:
article CRUD 및 영상 url 가져오는 작업 이어서 하는 중.
article restcontroller에서 카테고리 별 목록 전체 조회 메소드 안에 category equals 조건으로 나뉜 if문들을 넣었으나, 운동 카테고리 관련 글들만 나오는 형태로 카테고리별 전환이 되지 않던 문제와 response.data를 받아오지 못했던 문제를 이틀 만에 watch를 이용해서 해결해 냄.

</aside>



***11/19(일)***

<aside>
✅ 오늘의 협업:

-본인:
댓글 CRUD 기능 부분 작성 완료 후 feature/comment에 임시 업로드 완료. 
아직 article 구현이 안 되어있는 파일이어서 npm run dev로 렌더링 모습은 확인 못 했으나, vs code로 간략하게 한 좋아요/싫어요 REST-API 테스트는 잘 되었다.
대댓글 pagination과 기사 찜하기(북마크) 기능은 article 구현된 코드가 필요해서 테스트 및 추가 기능 작성은 보류.

-파트너 팀원:
article CRUD 및 영상 url 가져오는 작업 이어서 하는 중.
article restcontroller에서 카테고리 별 목록 전체 조회 메소드 안에 category equals 조건으로 나뉜 if문들을 넣었으나, 운동 카테고리 관련 글들만 나오는 형태로 카테고리별 전환이 되지 않던 문제와 response.data를 받아오지 못했던 문제를 이틀 만에 watch를 이용해서 해결해 냄.

</aside>



***11/21(화)***

<aside>
✅ 오늘의 협업:

-본인:
loginUserId와 loginUserNickname이 토큰을 통해 undefined로 들어와 사이트가 먹통이 되는 문제를 해결했고, 댓글 CRUD 기능도 이제 모두 정상 작동한다.
이후 회원가입 시 체크박스를 통해 DB에 저장할 수 있도록 카테고리 data를 가입 화면 외의 곳으로 넘겨보려 했으나 실패했고, 메인 화면인 마이 페이지의 프로필도 갑자기 떴다 안 떴다 하게 되어 내일 재개하기로 하고 다른 기능을 구현하기로 함.
DB에 저장되어 있던 더미 데이터의 role을 넘겨 현재 로그인된 유저의 role에 따라 nav와 버튼을 숨겼다 보였다 할 수 있도록 구현하는 데에 성공했다. 처음부터 둘이 구상했던 대로 nav는 관리자(role === 2)만 보이게끔 했고, 기사 작성/수정/삭제 버튼은 기자(role === 1)와 관리자만 보이게끔 설정했다. 일반 회원(role === 0)은 기사 조회와 댓글 작성만 할 수 있도록 해두었다. 
단, 아직 가입할 때 role 데이터를 입력해 DB에 저장하는 기능을 구현하지 못해 내일 시도해보기로 함.

-파트너 팀원:
틈 날 때마다 크롤링 진행 중이지만, 영상 없이 이미지만 있는 기사의 경우나 전문가 칼럼의 경우 저작권의 문제로 크롤링이 막혀 있는 경우 때문에 그 부분들은 보류 중이다. 
기사 수정 기능과 검색 기능이 작동하지 않아 코드를 고쳐 수정 기능은 정상 작동하게 만들었다. 
검색 기능은 카테고리 별 기사 목록에서 검색 조건 및 분류까지 적용해야 해서 여전히 수정 중.

</aside>

<aside>
✅ 피드백 받은 답변 정리:

메일 서버에 대한 개념이 나와 있는 사이트를 참고해서 공부할 것.
(https://goldsony.tistory.com/m/184)
단, 직접 구축하는 것은 힘드니 무료 메일 서비스를 이용하는 것도 방법이다.

</aside>

<aside>
⚠️ loginUserId와 loginUserNickname이 undefined로 들어와서 작동을 안 하는 문제 발생:

이 둘은 nickname을 토큰에 넣어서 보내줘야 했기에 새로 수정했던 코드였고, 추가로 집어넣는 과정에서 오류가 생겨 comment 기능이 작동하지 않게 되었었다.

결국 수업 때 따로 배우지는 못했던 await, async를 이용한 비동기 방법을 간단하게 학습해 데이터 전송이 완료된 뒤에 작업이 진행되도록 코드를 수정했고, 기능이 작동하게 만들었다.

</aside>

<aside>
⚠️ 기사 update(수정) 기능이 안 되는 문제 발생:

params를 넘길 때 {중괄호} 안에 key 값을 함께 적어야 하는 것을 빠뜨린 게 원인이 되었다. { category: 보내고자 하는 data값 } 으로 수정하니 정상적으로 작동했다.

</aside>



***11/22(수)***

<aside>
✅ 오늘의 협업:

오늘은 웬만하면 기능 구현과 디자인까지 끝내고, 내일은 발표 자료 준비를 할 예정.
금요일 낮 12시 반까지 최종 제출인 데다가 오후 2시 첫 번째 발표 순서라서 준비할 시간이 촉박하다.

-본인:
알고 보니 새로고침이 되지 않아 pinia가 켜지지 않은 상태였기에 프로필이 뜨지 않았던 것이어서 새로고침을 한 번 해주는 것으로 곧바로 해결했다.
가입 시 회원 별 카테고리 정보를 체크박스 체크를 통해 DB에 넘기는 데에 성공했다. 
가입 시 회원 별 role 정보를 라디오 체크를 통해 DB에 넘기는 데에 성공했고, 조회할 때 카테고리 및 role을 볼 수 있도록 추가 반영했다.
메일 서버를 이용해서 실시간 자동 발송 구현을 시도해 봤으나, 난이도가 너무 높아 일단 보류하기로 했다. 이를 구현만 할 수 있다면 클라우드에서 카테고리를 통해 다시 분류를 거쳐 각 회원 별로 원하는 새 기사 등록 알림을 보내게끔 구현하고 싶다.
만약 메일 구현을 실패한다면 기사 사이트와 어울리지 않아 따로 빼두었던 찜하기(북마크) 기능과, 구현했어도 메리트가 없어 철회했던 구독 기능을 구현해야 할 지도 모르겠다.
파트너 팀원이 크롤링할 수 있는 전문가 칼럼 사이트를 찾아 전달해주었다.
일단 기본적으로 요구되는 기능은 웬만큼 구현한 것 같아서 보류해두었던 pagination 기능을 기사 목록 페이지와 대댓글 구현에 이용할 수 있도록 코드 작성을 시도 중이다.
뉴스 사이트에 어울리는 사이트명을 창작하고 그에 따른 로고를 디자인해 파트너 팀원에게 평가를 받았다. 해당 로고는 ‘건강’을 의미하는 ‘Wellness’와 프로젝트명인 ‘SSAFIT’의 공통 글자인 ‘SS’를 겹쳐 신뢰감 있는 폰트로 이름을 창작했으며, 아이콘은 하트 모양이되 그 안에는 마우스를 집어 넣어 프로그래밍 프로젝트임을 명시했다.
지난 번부터 틈 날 때마다 해뒀던 디자인을 본격적으로 시작했다. 템플릿은 뉴스 사이트에 사용하기에는 너무 어울리지 않아 기각되었고, 아이콘이나 버튼 등의 요소들은 bootstrap을 이용해 추가로 수정할 예정. 아직 디자인 완성은 못 했고, article 쪽 디자인만 조금 더 수정하면 될 것 같다.
PPT의 인물 소개 페이지에 실물 사진을 대신해 넣을 캐릭터 그림을 그려서 그걸 파트너 팀원에게 평가를 받아볼 예정. 
현재 작성 중인 이 노션의 프로젝트 관련 글을 전부 복사해 내일 글까지 기록하고 나면 README.md에 붙여넣을 예정.
오늘 한 작업은 feature/designAndLogo에 업로드했다.

-파트너 팀원:
영상이 없는 다이어트 카테고리 기사들의 크롤링에 성공했다.
영상이 없는 기사의 경우 이미지를 대신 크롤링해 영상을 대체했고, 저작권 문제로 막혀 있던 전문가 칼럼은 크롤링이 가능한 새로운 사이트를 전달 받아 크롤링에 성공했다.
DB에 크롤링 결과를 추가했고, 기사 목록 중앙 정렬 및 이미지 첨부 등의 디자인 작업에 들어갔다.
pagination 구현은 시도 중이고, 본격적인 디자인을 시작했다.
창작된 사이트명과 만들어진 로고를 보고, 함께 그 것으로 하기로 합의했다.
홀로 발표자 역할을 맡기로 결정을 내렸다. 대본은 물론 함께 작성할 예정.
내일 README.md에 붙여넣어질 글의 원문을 편집할 예정.
오늘 한 작업은 feature/design에 업로드했다.

제작한 로고의 출처 사이트:
https://www.shopify.com/tools/logo-maker/onboarding/customize-logo

채택된 원본 로고와, 편집을 거친 추가 로고들:

![로고1.PNG](https://prod-files-secure.s3.us-west-2.amazonaws.com/24ac52a9-4e10-46b3-97eb-9853811b23cc/21b2f023-ba6b-41ac-bd07-21d85c0fc2b5/%EB%A1%9C%EA%B3%A01.png)

![로고1-1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/24ac52a9-4e10-46b3-97eb-9853811b23cc/bf9ce457-8698-48bc-b858-d988d7bb8a69/%EB%A1%9C%EA%B3%A01-1.png)

![로고1-2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/24ac52a9-4e10-46b3-97eb-9853811b23cc/aaa2c846-1953-4cda-ba38-fa78ade4cfb8/%EB%A1%9C%EA%B3%A01-2.png)

![로고2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/24ac52a9-4e10-46b3-97eb-9853811b23cc/f027af3d-ec0c-41cd-9408-65eca8ea976a/%EB%A1%9C%EA%B3%A02.png)

</aside>

<aside>
✅ 피드백 받은 답변들 정리:

1) 메일 서버 구현에 참고할 만한 사이트들

https://velog.io/@tjddus0302/Spring-Boot-메일-발송-기능-구현하기-Gmail

https://born2bedeveloper.tistory.com/14

2) 메일 자동 전송에 대한 피드백

만약 서버에서 막아 놨으면 할 수 있는게 없다. 시도해 봤는데 안 되면 그건 하기 힘들고, 그 대신 뉴스 서비스니까 피드 주는 것도 방법 중의 하나이다.

https://heyjihye.com/blog/rss-feed/

이전에 블로깅하면서 써 보고 지금은 쓰지 않는 것이지만, 지금은 서비스가 많이 죽었다는 문제가 있다. 아무래도 블로깅 문화가 쇠퇴하고 저작권 법과 광고 등 여러 문제가 있기 때문에 지금은 잘 쓰지 않는다는 듯.

</aside>



***11/23(목)***

<aside>
✅ 오늘의 협업:

하단의 모든 작업을 끝낸 후 함께 요구사항 정의서, 유즈케이스 다이어그램, ERD(테이블 구조도), 클래스 다이어그램, 화면 설계서를 작성해 PPT에 추가했다.

-본인:
썸네일 미리보기로 불러올 URL이 없는 경우 로고로 대체하는 기능 구현 완성.
디자인도 전부 완성.
크롤링으로 들어간 SQL dummy data에서 과하게 들어간 개행(enter키)를 지워 렌더링 시 배치가 과하게 떨어져 있지 않게끔 했다.
최종 코드를 designAndLogo 브랜치에 업로드했다.
PPT에 실물 사진 대신 넣을 둘의 캐릭터를 그려 이미지로 만들었다.
PPT 구성 디자인 및 내용 작성 완료. 
발표를 맡은 파트너 팀원에게 대본 작성 방향을 제시했다.
노션 작성도 오늘 부로 완료. 
Github에 있는 README.md에 노션 기록 원문을 복사해 마크다운 문법으로 작성했다.

-파트너 팀원:
pagination 기능 구현도 시도해 보는 중.
발표에 쓸 렌더링 화면 기능 구현 스크린샷을 찍었다. (컴퓨터 모니터 크기 이슈 때문)
발표 대본을 작성했고, 오늘부터 내일까지 발표 연습을 할 예정이다.
Github에 있는 README.md 원문을 편집했다. 이 글과 PPT를 참조해 대본을 작성했다.

</aside>

<aside>
⚠️ 기사 작성 시 함께 입력된 이미지 URL이 없을 경우(= 유튜브 영상 URL만 있거나, 아예 아무 것도 없을 경우) 사이트의 로고 이미지로 대체하지 못하는 에러와, 처음에는 정상적으로 뜨다가도 시간이 지나고 나면 헤더에 있는 로고 이미지에 엑스박스가 뜨는 현상 발생:

헤더의 로고는 경로를 잘못 작성했기 때문인데, copy relative path를 해서 생긴 문제였다. 이를 @/assets/이미지URL 로 수정하니 정상적으로 유지되었다.

이 역시 경로를 수정했지만, dummy data가 아닌 새 글을 URL 없이 작성하는 경우에만 로고가 정상적으로 렌더링되는 문제가 있었다. 이에 URL의 형태가 유튜브 영상 링크 형태인지를 판별하는 v-if 조건문을 이용해 유튜브 영상 URL 형태가 아닌 경우 if문 조건으로 설정해 해당 이미지를 썸네일처럼 이용할 수 있게 만들었다. 또한, v-else를 이용해 유튜브 영상 URL을 입력했거나, 아무것도 입력하지 않았을 경우 로고 이미지를 대신 띄우도록 설정해 엑스박스를 대체할 수 있게 되었다.

</aside>

<aside>
🎯 사소한 실수들:

pagination 구현을 하다가 변수명의 대소문자를 잘못 옮겨 적었다.
이 때문에 처음에는 잘 되던 기사 목록 구현이 갑자기 먹통이 되었다가 무사히 원상복구시킬 수 있었다.

</aside>



***11/24(금) 최종 발표일***

<aside>
✅ 프로젝트 후기:  (아직 미작성)

</aside>
