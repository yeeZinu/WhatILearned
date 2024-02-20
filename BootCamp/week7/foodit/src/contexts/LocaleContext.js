import { createContext, useContext, useState } from "react";

// context 생성
const LocalecContext = createContext();

// context의 provider 생성
// defaultValue는 ko로 설정
// children은 LocaleProvider로 감싸진 모든 컴포넌트를 렌더링하기위해 사용
export function LocaleProvider({ defaultValue = 'ko', children }) {
  // context의 상태관리를 위한 state
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocalecContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocalecContext.Provider>
  );
};

// locale을 반환하는 hook
export function useLocale() {
  const context = useContext(LocalecContext);
  if (!context) {
    throw new Error('LocaleProvider 안에서만 사용할 수 있습니다.');
  }
  return context.locale;
};

// setLocale을 반환하는 hook
export function useSetLocale() {
  const context = useContext(LocalecContext);
  if (!context) {
    throw new Error('LocaleProvider 안에서만 사용할 수 있습니다.');
  }
  return context.setLocale;
};