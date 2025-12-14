import React, {useState} from 'react'
import Header from './Header'
import Button from './Button'

const ProfileCard = ({item}) => {
    const [word, setWord] = useState("")
    const [answer, setAnswer] = useState(null)
    // const [checkAnswer, setCheckAnswer] = useState("")

    const checkValue = ()=>{
        if(word == item.type){
            setAnswer(true);
            // setCheckAnswer("정답입니다");
            console.log("정답")
        } else{
            setAnswer(false);
            // setCheckAnswer("오답입니다");
        }
    }

  return (
    <div className='profile-card'>
      <Header keyword={item.word}/>
      <div className='input-area'>
        <input placeholder='종류를 입력하세요' onChange={(e)=>setWord(e.target.value)}/>
        <Button item={item} word={word} setAnswer={setAnswer} checkValue={checkValue}/>
      </div>
      <h4 className={`answer-area ${answer?'':'incorrect'}`}>{answer?'정답입니다!':answer==null?"":'틀렸습니다'}</h4>
      {/* <h4 className={`answer-area ${answer?'':'incorrect'}`}>{checkAnswer}</h4> */}
      
    </div>
  )
}

export default ProfileCard


// 처음은 아무것도 안나와야한다.
// 입력버튼 누르면서 시작되어야 한다.