import { createContext, useContext, useState } from "react";

// 새로운 컨텍스트를 만들기위해서는 createContext가 필요함
const LocaleContext = createContext();

// 기본 언어는 ko로 설정
// LocaleProvider 컴포넌트사이의 컴포넌트 렌더링을 위한 children
// 컴포넌트 사이에 다른 컴포넌트를 렌더링하기 위해서는 children이 필요함
export function LocaleProvider({ defaultValue = 'ko', children }) {
  // LocaleContext의 상태를 여기서 다 관리하기 위한 state 선언
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

// 커스텀 훅을 만들어서 사용

// useLocale은 현재 언어를 반환하는 훅
export function useLocale() {
  // useContext를 사용하여 LocaleContext에 접근가능함.
  const context = useContext(LocaleContext);
  // 만약 context가 없다면 에러를 발생시킴
  // context가 없다는것은 LocaleProvider가 없다는것을 의미함 즉 LocaleProvider밖에서 선언되었다는 말임
  if (!context) {
    throw new Error('LocaleProvider 안에서 사용되어야 합니다.');
  }
  return context.locale;
};

// useSetLocale은 언어를 변경하는 함수를 반환하는 훅
export function useSetLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('LocaleProvider 안에서 사용되어야 합니다.');
  }
  return context.setLocale;
};
