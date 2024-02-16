import { useState } from "react";
import FileInput from "./FileInput";
import './ReviewForm.css';
import RatingInput from "./RatingInput";
import { createReview } from "../api";

function ReviewForm({ onSubmitSuccess }) {
  // 리뷰 폼의 초기값을 설정
  const INITIAL_STATE = {
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  }
  // 인풋 데이터를 관리하는 스테이트
  const [values, setValues] = useState(INITIAL_STATE);
  // 리뷰를 제출중인지 여부를 관리하는 스테이트
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 리뷰를 제출한 후의 결과를 관리하는 스테이트
  const [submitError, setSubmitError] = useState(null);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 리뷰를 보낼 FormData 객체를 생성
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('rating', values.rating);
    formData.append('content', values.content);
    formData.append('imgFile', values.imgFile);

    // 리뷰를 저장할 result 변수를 선언
    let result;
    try {
      // 제출 결과를 초기화
      setSubmitError(null);
      // 리뷰를 제출중인 상태로 변경
      setIsSubmitting(true);
      // 리뷰를 생성하는 API 호출해 결과를 result에 저장
      result = await createReview(formData);
    }
    catch (err) {
      // 에러가 발생했을 때 에러를 스테이트에 저장
      setSubmitError(err);
      return;
    }
    finally {
      // 리뷰를 제출중인 상태를 초기화
      setIsSubmitting(false);
    }
    // 작성한 리뷰의 결과를 review에 구조분해 저장
    // post형태로 데이터를 보내면 review라는 이름의 객체로 저장됨.
    // 때문에 result 값을 구조분해하여 review에 저장
    const { review } = result;
    // 리뷰의 결과를 상위 컴포넌트에 전달
    onSubmitSuccess(review);
    // 리뷰 작성 후 폼 초기화
    setValues(INITIAL_STATE);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput name="rating" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      <button type="submit" disabled={isSubmitting}>확인</button>
      {submitError && <div>{submitError.message}</div>}
    </form>
  )
}

export default ReviewForm;