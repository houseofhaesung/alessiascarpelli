# Alessia Scarpelli — website

빌드 과정 없는 정적 사이트입니다. 폴더 내용을 GitHub 저장소 루트에 그대로 올리면 됩니다.

```
index.html      홈 (이미지 갤러리)
about.html      About 페이지
fonts/          ABC Areal, Faculty Glyphic (라이선스 문서 포함)
images/         About 이미지, 로고
images/home/    홈 갤러리 이미지
favicon.*       파비콘
```

## GitHub Pages 배포
1. 이 폴더 내용을 저장소 루트에 올립니다.
2. **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 지정합니다.
3. 1–2분 뒤 `https://<아이디>.github.io/<저장소명>/`에서 열립니다.

## 홈 갤러리에 이미지 추가
1. 사진을 `images/home/`에 넣습니다. 세로 1600px 정도로 줄여 넣으면 빠르게 열립니다.
2. `index.html` 아래쪽의 `IMAGES` 목록에 한 줄을 추가합니다.

```js
{ src: 'images/home/home-06.jpg', w: 1067, h: 1600, size: 'L', alt: '사진 설명' },
```

- `size`: `L` 큰 사이즈(화면 높이의 68%), `M` 중간(52%), `S` 작은(38%). 비워두면 M, L, S, M, L 순서로 자동 배정됩니다.
- `w`, `h`: 사진의 가로·세로 픽셀(비율만 맞으면 됩니다).
- 목록 순서가 화면 순서입니다. 마지막 사진 다음에는 첫 사진이 다시 이어집니다.

## 갤러리 움직임 조정 (`index.html`)
- `EASE` — 휠·방향키로 움직일 때 따라오는 속도 (클수록 빠르게 멈춤)
- `WHEEL_SPEED` — 휠 한 번에 움직이는 거리
- `THROW` — 빠르게 스와이프했을 때 미끄러지는 거리
