### Bai 121 cấu hình redux

npm install redux react-redux redux-thunk

Redux DevTools V mới

### Bai 122 xong

### Bai 123 Tích hợp redux gọi api xong

### Bai 124 Dispatch Action tương ứng

### Bài 127,128 Generator

### Bai 129

-   cai redux-saga
-   npm i --save reduc-sage

### Bai 130

---------Fork------
-Non_blocking là thực hiện nhiều dispatch cùng 1 lúc
-Chức năng của fork là nhóm các sagas theo nhiều login authSaga có login , refresh Token
-Lưu trữ tham chiều đến các sagas để có thể hủy hoặc vào lại
-Dùng để rẻ nhánh ra 1 công việt

### Bai 132

-------Put-----

-   là non-bloacking có thể thực hiện cùng lúc nhiều action cùng 1 lúc

### Bai 131

------Take------
-Dùng để phản hồi các action khi các action được dispatch
-Là Blocking chỉ chạy khi action được dispatch
------Call-----
-Thường dùng để gửi các request ,Call API
--Là Blocking thực hiện xong gọi api thì mới thực hiện tiếp

%%%% TakeLatest , Select, TakeEvery
!!! TakeLatest

-   dùng để thây thế fork phương thức này dùng để dispatch action và theo giỏi action
-   chỉ lấy giá trị cuối cùng của hàm khi được thực thi
-   tốt cho trang web
    &&& select dùng để lấy dữ liệu từ store trong sage
    (((TakeEvery))) khác với TakeLatest là thực hiện actions là lấy giá trị action khi đc dispatch

###Bai 153 xong
// ctrl + K + 0 đóng code dể nhìn
=============
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
