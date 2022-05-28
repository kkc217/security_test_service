import React from "react";
import createScrollSnap from "scroll-snap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/Intro/explanation.css";

const FirstExplainContent = () => {
    return (
        <>
            <div className="explain_contents">
                <h1>개발자와 창업자를 위한 필수 보안 기능 점검 서비스<br/>WhitePen</h1>
                <br/>
                <p>
                    WhitePen은 번거로운 다운로드 과정 없이 웹상에서 동작하는 반자동화 모의 침투 서비스 입니다.<br/>
                    많은 보안 업체에서 모의 해킹 서비스와 보안 컨설팅 서비스를 제공하지만 대부분의 경우 패키지로만 판매되어 비싼 요금을 지불해야 합니다.<br/>
                    웹 서비스 구동에 있어 필수적인 요소인 보안은 포기할 수 없지만, 자본금이 충분하지 않은 개발자들을 위해 저희 WhitePen은 모의 침투 서비스를 무료로 제공합니다.<br/>
                    WhitePen은 웹 서비스가 OWASP(Open Web Application Security Project)와 한국인터넷진흥원에서 권장하는 필수 보안 요소를 충족시키는지 테스트합니다.
                </p>
            </div>
        </>
    )
}

const SecondExplainContent = () => {
    return (
        <>
            <div className="explain_contents">
                <h1>침투 테스트란?</h1>
                <br/>
                <p>
                침투 테스트(Penetration Test)는 컴퓨터 시스템이나 네트워크, 웹 어플리케이션에 모의 공격을 수행해<br/>공격자가 악용할 수 있는 보안상의 취약점을 찾아내는 예방 차원의 보안 행위입니다.<br/>
                WhitePen에서는 웹 보안 분야에서 전 세계적으로 권위를 갖는 비영리단체 OWASP에서 제공하는 2021  OWASP Top10과 한국인터넷진흥원에서 제공하는<br/>가이드라인을 참고해 침투 테스트를 수행할 공격을 선정하였습니다.<br/>
                우리의 목적은 서비스가 가장 기본적인 보안 요소를 충족하는지 확인하는 것이기 때문에 복잡하고 심오한 공격은 수행하지 않습니다.<br/>
                <br/>
                WhitePen 서비스에서 제공하는 공격은 다음과 같습니다.<br/>
                .<br/>.<br/>.<br/>
                </p>
            </div>
        </>
    )
}

const ThirdExplainContent = () => {
    return (
        <>
            <div className="explain_contents">
                <h1>Injection</h1>
                <br/>
                <p>
                Injection 공격은 로그인 창, 게시판의 글쓰기 기능 등과 같이 서비스가 사용자로부터 입력을 받음으로 인해 발생 가능한 취약점을 악용하는 공격입니다.<br/>
                대표적인 Injection 공격으로는  데이터베이스를 조작하는데 사용되는 쿼리(Query)형 코드를 입력해 서버의 데이터베이스를 공격하는 SQL Injection,<br/>악성 파일을 업로드하는 SSI Injection 등이 있습니다.
                </p>
            </div>
        </>
    )
}

class Explanation extends React.Component {
    container = React.createRef();

    bindScrollSnap() {
        const element = this.container.current;
        createScrollSnap(
            element,
            {
                snapDestinationY: "100%",
                timeout: 100,
                duration: 300,
                snapStop: true
            }
        );
    }

    componentDidMount() {
        this.bindScrollSnap();
    }

    render() {
        return (
            <>
                <div className="explanation_container" ref={this.container}>
                    <div className="explain_content_container" id="first_explain">
                        <FirstExplainContent />
                        <FontAwesomeIcon icon={faChevronDown} className="chevron_down" />
                    </div>
                    <div className="explain_content_container" id="second_explain">
                        <SecondExplainContent />
                        <FontAwesomeIcon icon={faChevronDown} className="chevron_down" />
                    </div>
                    <div className="explain_content_container" id="third_explain">
                        <ThirdExplainContent />
                        <Link to='/login' className="test_link">테스트 시작 <FontAwesomeIcon icon={faArrowRightLong} /></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Explanation;