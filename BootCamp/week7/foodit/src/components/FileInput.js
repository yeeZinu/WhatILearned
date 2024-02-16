import { useEffect, useRef, useState } from 'react';

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // 파일 삭제 함수
  const handleClearClick = () => {
    // ref의 current를 저장
    const inputNode = inputRef.current;
    // 만약 input의 current가 없다면 early return
    if (!inputNode) return;

    // input의 value를 초기화
    // 비제어 함수는 사용자가 작성하거나
    // js에서는 ''로 초기화해주어야 함
    // 안해주면 input의 value가 남아있음
    inputNode.value = '';
    // onChange 함수를 통해 value를 초기화
    onChange(name, null);
  };

  // 파일 선택 시 미리보기 이미지 생성
  useEffect(() => {
    // 만약 이미지 파일이 없다면 early return
    if (!value) return;
    // 이미지 파일 객체를 URL.createObjectURL을 통해 URL로 변환해 저장
    const nextPreview = URL.createObjectURL(value);
    // 미리보기 이미지 주소를 preview에 저장
    setPreview(nextPreview);

    // return은 언마운트(화면에서 사라짐) 될 때 콜백함수를 실행
    return () => {
      // 미리보기 이미지 초기화
      // 비어있으면 undefined로 초기화
      setPreview();
      // 이미지파일이 화면에서 사라질 때 revokeObjectURL을 통해 메모리 해제
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      <button type="button" onClick={handleClearClick}>
        X
      </button>
    </div>
  );
}

export default FileInput;
