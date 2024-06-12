


### DevBlog - 개발 블로그 프로젝트
### 배포사이트 : https://developer-blog-two.vercel.app/
- **페이지 구성**
    - posts/ - 모든 블로그 게시글이 존재하는 페이지
    - posts/[포스트명] - 각 블로그 콘텐츠의 내용이 담겨있는 페이지
    - contact/ - 이메일, 이름등을 기입해 연락 및 피드백을 남길 수 있는 페이지
- **블로그 콘텐츠 구현 방법**
    - **fs**
        - 블로그 컨텐츠 데이터는 프로젝트 디렉토리 내부 /posts 폴더 내부에 위치해있습니다.
        **fs** 모듈을 활용해 .md 파일로 작성된 블로그 콘텐츠 데이터를 가져옵니다.
    - **gray-matter**
        - **gray-matter** 을 활용해 .md 파일 내부 Front matter 정보와 content 데이터를 각각의 객체로 리턴해줍니다.
    - **react-markdown**
        - **ReactMarkdown** 컴포넌트를 활용해 마크다운 컨텐츠 정보를 html태그로 변환해줍니다.
    - **react-syntax-highlighter**
        - 마크다운 컨텐츠 내부 자바스크립트 코드블록 부분은 
        **react-syntax-highlighter**를 활용해 코드블록에 하이라이팅을 적용시켜줍니다.
- **Database 활용**
    - 연락 및 프로젝트에 대한 피드백을 정보를 MongoDB를 활용해 저장할 수 있도록 구현하였습니다.
    - api 통신 과정을 하단에 노출되는 Notification 컴포넌트를 활용해 시각화를 구현하였습니다.
