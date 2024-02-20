import { useState } from "react";
import FileInput from "./FileInput";
import './ReviewForm.css';
import RatingInput from "./RatingInput";
import useAsync from "../hooks/useAsync";
import useTranslate from "../hooks/useTranslate";

// 리뷰 폼의 초기값을 설정
const INITIAL_STATE = {
  title: '',
  rating: 0,
  content: '',
  imgFile: null,
};

// 부모로부터 initialPreview에 해당 id의 이미지 url을 받아옴
function ReviewForm({ initialState = INITIAL_STATE, initialPreview, onSubmit, onSubmitSuccess, onCancel }) {
  // 인풋 데이터를 관리하는 스테이트
  // 부모컴포넌트에서 초기 수정값을 받아오기위해 initialState를 인자로 받음
  const [values, setValues] = useState(initialState);
  const [isSubmitting, submitError, onSubmitAsync] = useAsync(onSubmit);

  const t = useTranslate();



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
    let result = await onSubmitAsync(formData);
    if (!result) return;

    // 작성한 리뷰의 결과를 review에 구조분해 저장
    // post형태로 데이터를 보내면 review라는 이름의 객체로 저장됨.
    // 때문에 result 값을 구조분해하여 review에 저장
    const { review } = result;
    // 리뷰의 결과를 상위 컴포넌트에 전달
    // 네트워크 요청이 성공적으로 완료되었을 때 실행됨
    onSubmitSuccess(review);
    // 리뷰 작성 후 폼 초기화
    setValues(INITIAL_STATE);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        disabled={isSubmitting}
      >
        {t('confirm button')}
      </button>
      {onCancel && <button onClick={onCancel}>{t('cancel button')}</button>}
      {submitError && <div>{submitError.message}</div>}
    </form>
  )
}

export default ReviewForm;