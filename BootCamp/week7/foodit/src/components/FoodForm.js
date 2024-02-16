import { useState } from 'react';
import { createFood } from '../api';
import FileInput from './FileInput';

function sanitize(type, value) {
  switch (type) {
    case 'number':
      return Number(value) || 0;

    default:
      return value;
  }
}

function FoodForm({ onSubmitSuccess }) {

  // 초기 상태값 선언
  const INITIAL_STATE = {
    imgFile: null,
    title: '',
    calorie: 0,
    content: '',
  };

  // 초기 상태
  const [values, setValues] = useState(INITIAL_STATE);
  // 입력 데이터 제출 상태
  const [isSubnitting, setIsSubmitting] = useState(false);
  // 입력 데이터 에러 상태
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 폼 데이터 생성
    const formData = new FormData();
    // 입력 데이터를 폼 데이터에 추가
    formData.append('imgFile', values.imgFile);
    formData.append('title', values.title);
    formData.append('calorie', values.calorie);
    formData.append('content', values.content);

    let result;
    try {
      // 에러 초기화
      setSubmitError(null);
      // 제출 상태 변경
      setIsSubmitting(true);
      // 음식 데이터 생성
      result = await createFood(formData);
    }
    catch (error) {
      setSubmitError(error);
    }
    finally {
      // 제출 상태 변경
      setIsSubmitting(false);
    }
    // 받아온 음식데이터를 food에 구조분해 할당
    const { food } = result;
    // 부모 컴포넌트로 음식데이터 전달
    onSubmitSuccess(food);
    // 초기 상태값으로 변경
    setValues(INITIAL_STATE);

  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, sanitize(type, value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        type="number"
        name="calorie"
        value={values.calorie}
        onChange={handleInputChange}
      />
      <input
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={isSubnitting}>확인</button>
      {submitError && <div>{submitError.message}</div>}
    </form>
  );
}

export default FoodForm;
