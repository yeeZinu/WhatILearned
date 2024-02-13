export async function getFoods({ order = 'createdAt', cursor = '', limit = 10, search = ''}) {
  const qurey = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
  const response = await fetch(`https://learn.codeit.kr/6665/foods?${qurey}`);
  if(!response.ok) {
    throw new Error('요청이 실패했습니다.');
  }
  const body = await response.json();
  return body;
}