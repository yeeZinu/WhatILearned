import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {

  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }
    // filelist 객체를 URL.createObjectURL() 함수를 사용하여 URL로 변환
    // 선언할 때 마다 새로운 메모리를 할당함.
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // 컴포넌트가 언마운트 될 때 URL.revokeObjectURL() 함수를 사용하여 메모리 해제
    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };

  }, [value]);

  return (
    <div>
      <img src={preview} alt="미리보기 이미지" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
