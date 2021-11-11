//const path = require("path");

module.exports = {
  //outputDir: path.resolve(__dirname, "../" + "static주소"), //-> 해당디랙션으로 배포환경으로 빌드된 뷰 파일을 생성해줌
  devServer: {
    overlay: false,
    // Proxy: {
    //   "/api": {
    //     target: "http://localhost:8090",
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
    // proxy 설정을 통해서 뷰 서버/api 로 오는 요청을 스프링부트 api 로 요청을 돌려줌
  },
};
