# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



// super 키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용된다.
        // 부모 클래스의 메소드를 호출할 때도 사용된다.
        // 생성자에서는 super 키워드 하나만 사용되거나, this가 사용되기 전에 호출되어야 한다.
        // super 이전에 this가 사용되면 할당이 되어있지 않은 상태(특히 상속된 클래스의 경우)이기 때문에 오류가 일어난다

        // React에서 super에 propr를 인자로 전달하는 이유는
        // React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 Props를 전달
        // 생성자 내부에서도 this.props를 정상적으로 사용할수 잇도록 보장하기 위해서


        // 리액트에서 데이터가 변할때 화면을 다시 렌더링 해주기 위해서는 React State를 사용해야 한다.
        // React State란, 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고있는 객체
        // State가 변경되면 컴포넌트는 리렌더링 된다. 또한 state는 컴포넌트 안에서 관리된다.



        // 컴포넌트 안에서 무언가를 기억하기 위해서는 state를 사용해야 한다.
        // React 컴포넌트는 생성자에 this.state를 설정하는 것으로 state를 가질 수 있다.
        // this.state는 정의된 React 컴포넌트에 대해 비공개로 간주해야 한다.
        // 여러개의 자식으로부터 데이터를 모으거나 두개의 자식 컴포넌트들이 서로 통신하게 하려면 부모 컴포넌트에 공유 state를 정의해야 함.
        // 부모 컴포넌트는 props를 사용하여 자식 컴포넌트에 state를 다시 전달할 수 있음.
        // 이것은 자식 컴포넌트들이 서로 또는 부모 컴포넌트와 동기화하도록 만든다.

# 리액트 불변성 지키기
불변성을 지켜야 하는 이유는 ?
1. 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되기에 이 원본 데이터를 참조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있어서 프로그래밍의 복잡도가 올라갑니다.

2. 리액트에서 화면을 업데이트할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후 업데이트하기 때문에 불변성을 지켜줘야 합니다.

# 불변성을 지키는 방법?
Array나 Object같은 참조 타입에서는 값을 바꿧을 때 Call stack 주소 값은 같은데 Heap 메모리 값만 바꿔주기에 불변성을 유지할 수 없었으므로 아예 새로운 배열을 반환하는 메소드를 사용하면 된다.
ex) 스프레드 연산자, map, filter, slice, reduce

# React Hooks?
class 없이 state를 사용할 수 있는 새로운 기능

## 필요한 이유?

1. Class component vs Functional Component<br>
- 클래스형 컴포넌트는 더 많은 기능을 제공하지만, 코드가 길고 복잡하며 성능이 더디다
- 함수형 컴포넌트는 제공하는 기능은 적지만, 짧고 심플한 코드이며 더 빠른 성능을 제공한다.
![클래스vs함수](image.png)