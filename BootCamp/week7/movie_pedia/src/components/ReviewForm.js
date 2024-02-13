import { useState } from "react";
import FileInput from "./FileInput";
import './ReviewForm.css';
import RatingInput from "./RatingInput";

function ReviewForm() {

  // 인풋 데이터를 관리하는 스테이트
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  });

  // 인풋의 name과 value를 받아와서 컴포넌트에서 활용할 수 있게 하는 함수
  // 스프레드 연산자를 사용하여 객체에서 변경된 부분만 업데이트됨
  // 스프레드 연산자는 나중에 변경된 내용을 적용시킴.
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 인풋의 value를 받아와서 스테이트에 저장하는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  // 제출버튼을 눌렀을 때 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput name="rating" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      <button type="submit">확인</button>
    </form>
  )
}

export default ReviewForm;