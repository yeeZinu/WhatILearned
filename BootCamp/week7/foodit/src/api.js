export async function getFoods(order = 'createdAt') {
  const qurey = `order=${order}`;
  const response = await fetch(`https://learn.codeit.kr/6665/foods?${qurey}`);
  const body = await response.json();
  return body;
}