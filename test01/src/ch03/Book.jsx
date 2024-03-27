import React from "react";

// (클래스의 개념) props는 매개 변수
function Book(props) {
    return (
        <div>
            <h1>{'이 책의 이름은 ${props.name}입니다.'}</h1>
            <h2>{'이 책은 통 ${props.numOfPage}페이지로 이루어져 있습니다.'}</h2>
        </div>
    );
}

// Book이라는 클래스에 기초함
export default Book;