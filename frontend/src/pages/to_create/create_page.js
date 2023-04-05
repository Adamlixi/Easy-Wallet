import styled from '@emotion/styled';
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import yourImage from '././Group4.png';
import yourImage1 from '././Group6.png';

const StyledImage1 = styled.img`

position: absolute;
width: 40px;
height: 40px;
left: 14px;
top: 10px;

`;


const StyledImage = styled.img`
position: absolute;
width: 60px;
height: 60px;
left: 176px;
top: 65px;

`;

const ToCreateContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: linear-gradient(178.38deg, #FF1EB2 1.38%, #D41DD8 34.69%, #B200DE 34.69%);
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 414px;
  height: 396px;
  left: 0px;
  top: 224px;
  background: #FFFFFF;
  border-radius: 20px 20px 0px 0px;
`;

// const Rectangle15 = styled.div`
//   position: absolute;
//   width: 358px;
//   height: 54px;
//   left: 28px;
//   top: 526px;
//   background: #D9D9D9;
//   border-radius: 27px;
// `;

const Rectangle15 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 495px;
background: #FF1EB2;
border-radius: 27px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`;



const Rectangle24 = styled.div`
  position: absolute;
  width: 340px;
  height: 6px;
  left: 37px;
  top: 328px;
  background: #D9D9D9;
  border-radius: 2px;
`;

const Title = styled.div`
  position: absolute;
  width: 345px;
  height: 16px;
  left: 34px;
  top: 138px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const Subtitle = styled.div`
  position: absolute;
  width: 334px;
  height: 16px;
  left: 34px;
  top: 165px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const HintText = styled.div`
  position: absolute;
  width: 388px;
  height: 16px;
  left: 37px;
  top: 261px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ACACAC;
`;




// const InputLine = styled.div`
//   position: absolute;
//   width: 340px;
//   height: 20px; // 更改高度
//   left: 37px;
//   top: 314px; // 根据新的高度调整位置
//
//   input {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: transparent;
//     border: none;
//     outline: none;
//     padding: 0;
//     margin: 0;
//     color: transparent;
//     caret-color: black;
//     font-size: 16px;
//   }
// `;

const InputLine = styled.div`
  position: absolute;
  width: 340px;
  height: 6px;
  left: 37px;
  top: 328px;
  background: #D9D9D9;
  border-radius: 2px;
  z-index: -1; // 添加这一行以确保输入框始终在上层
`;


const WordInput = styled.input`
  position: absolute;
  width: 340px;
  height: 20px; // 更改高度
  left: 37px;
  top: 308px; // 根据新的高度调整位置
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  caret-color: black;
  font-size: 16px;
  z-index: 1; // 添加这一行以确保输入框始终在上层
  
  // 添加以下行以设置字体颜色
  color: #1E1E1E;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const InputBar = styled.div`
  position: absolute;
  width: 340px;
  height: 6px;
  left: 37px;
  top: 328px;
  background: ${props => props.color};
  border-radius: 2px;
`;


const Input = styled.input`
const Input = styled.input\`
  position: absolute;
  width: 340px;
  top: 328px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #0B0F3B;
`;

const BackgroundLine = styled.div`
  position: absolute;
  width: 340px;
  height: 6px;
  top: 328px;
  background: #D9D9D9;
  border-radius: 2px;
`;

const ProgressLine = styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: 6px;
  top: 328px;
  background: ${(props) => (props.error ? '#FF0000' : '#E9B9FF')};
  border-radius: 2px;
`;

// const ErrorText = styled.div`
//   position: absolute;
//   width: 88px;
//   height: 16px;
//   top: 334px;
//   left: ${(props) => props.left}px;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 16px;
//   color: #FF0000;
// `;

const WordIndicator = styled.div`
  position: absolute;
  height: 6px;
  top: 328px;
  background: ${({ valid }) => (valid ? '#E9B9FF' : '#FF0000')};
  border-radius: 2px;
`;

const ErrorText = styled.div`
  position: absolute;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #FF0000;
`;


const ColoredBar = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: 6px;
  left: 0;
  top: 0;
  background: ${props => props.color};
  border-radius: 2px;
`;



function ToCreatePage() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [errorPosition, setErrorPosition] = useState(0);
    const [words, setWords] = useState([]);
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const isValidWord = (word) => {
        // 在这里添加你的单词验证逻辑
        // 例如，你可以使用正则表达式验证单词是否仅包含字母
        if (/^\s+$/.test(word)) {
            return /^[a-zA-Z]+$/.test(word);
        }
        return /^[a-zA-Z]+$/.test(word);
    };


    const getUnderlineColor = (word) => {
        if (word.text === ' ') {
            return '#D9D9D9';
        }
        return word.valid ? '#E9B9FF' : '#FF0000';
    };

    const handleChange = (event) => {

        setInputValue(event.target.value);
        const inputWords = event.target.value.split(/(\s+)/);
        setWordCount(inputWords.filter((word) => word.trim() !== '').length);
        // setWordCount(inputWords.filter((word) => word.trim() !== '').length);
        // setWordCount(inputWords.length);
        const newWords = inputWords.map((word) => {
            if (word.trim() === '') {
                return { text: word, valid: true };
            } else {
                const isValid = /^[a-zA-Z0-9]+$/.test(word);
                return { text: word, valid: isValid };
            }
        });
        setWords(newWords);
    };


    const wordIndicators = words.map((word, index) => {
        const wordWidth = word.text.length * 10; // 这里我们假设每个字符的宽度为10px，您可以根据需要进行调整

        const position = words
            .slice(0, index)
            .reduce((acc, cur) => acc + cur.text.length * 10 + 5, 0); // 计算每个单词的位置，假设每个单词之间有5px的间距

        return (
            <React.Fragment key={index}>
                <WordIndicator
                    valid={word.valid}
                    style={{
                        width: wordWidth,
                        left: 37 + position,
                    }}
                />
                {!word.valid && (
                    <ErrorText
                        style={{
                            width: wordWidth,
                            left: 37 + position,
                            top: 334,
                        }}
                    >
                        Please re-enter
                    </ErrorText>
                )}
            </React.Fragment>
        );
    });

    const [inputBarColor, setInputBarColor] = useState('#D9D9D9');

    useEffect(() => {
        if (isValidWord(inputText)) {
            setInputBarColor('#E9B9FF');
        } else {
            setInputBarColor('#FF0000');
        }
    }, [inputText]);

    function getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }

    useEffect(() => {
        const textWidth = getTextWidth(inputText, "16px 'Inter'");
        if (isValidWord(inputText)) {
            setInputBarColor({ width: textWidth, color: '#E9B9FF' });
        } else {
            setInputBarColor({ width: textWidth, color: '#FF0000' });
        }
    }, [inputText]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/SeedPage');
    };

    return (
        <ToCreateContainer>
            {/*<Rectangle24 />*/}
            <Rectangle9 />
            <StyledImage src={yourImage} alt="Your Image Description" />
            <StyledImage1 src={yourImage1} alt="Your Image Description" />
            {/*<InputLine>*/}
            {/*    <Input value={inputValue} onChange={handleChange} />*/}
            {/*    <BackgroundLine />*/}
            {/*    <ProgressLine width={error ? errorPosition : inputValue.length * 10} error={error} />*/}
            {/*    {error && <ErrorText left={errorPosition}>Please re-enter</ErrorText>}*/}
            {/*</InputLine>*/}

            <InputLine />
            {/*<WordInput value={inputValue} onChange={handleChange} />*/}
            {/*{wordIndicators} /!* 添加这一行 *!/*/}
            <WordInput
                placeholder="Type your words here"
                onChange={(e) => setInputText(e.target.value)}
            />
            <InputBar>
                <ColoredBar width={inputBarColor.width} color={inputBarColor.color} />
            </InputBar>

            <Title>Create Your Own Seed Phrase</Title>
            <Subtitle>You can customize your own Seed Phrase with 8-20 words</Subtitle>
            <HintText>Fill in the blank, tap the space to enter or add.</HintText>
            <Rectangle15 active={wordCount >= 12} onClick={handleClick}>Next</Rectangle15>
        </ToCreateContainer>
    );
}

export default ToCreatePage;
