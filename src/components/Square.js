import React from "react";
import "./Square.css"

export default class Square extends React.Component {
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
    // this.props.props의 이름


    // 부모 컴포넌트에서 받은 데이터를 props를 통해 받아오기
    render() {
        return (
            <button className="square"
                onClick={() => { this.props.onClick() }}
            >
                {this.props.value}
            </button>
        )
    }
}
