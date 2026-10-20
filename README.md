# Alessia Scarpelli — About

정적 페이지 하나(`index.html`)와 `images/` 폴더로 구성됩니다. 빌드 과정 없이 GitHub Pages에 그대로 올리면 됩니다.

## GitHub Pages 배포
1. 이 폴더 내용을 저장소 루트에 올립니다 (`index.html`, `images/`).
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 지정합니다.
3. 1–2분 뒤 `https://<아이디>.github.io/<저장소명>/`에서 열립니다.

## 이미지 교체
`images/` 안의 사진은 피그마 캡처에서 잘라낸 임시본입니다. 원본 사진을 **같은 파일명**으로 덮어쓰면 끝입니다.
`about-05a.jpg`는 원래 영상이라면 `<video autoplay muted loop playsinline>`로 바꿔도 됩니다.

## 모션 값 조정
`index.html` 안 `SPRING` / `EASE` 객체에 모든 값이 모여 있습니다.
- `SPRING.image` — 이미지가 자리 잡는 무게감 (stiffness ↓ = 더 느리고 무겁게)
- `SPRING.text` — 단어가 올라오는 속도
- `EASE.reveal` — 이미지 커튼 와이프 곡선
