/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });
*/
// 위의 코드를 async/await로 변환하면 아래와 같다.
async function getTheLastPostOfTheLastUser() {
  const usersJSON = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersJSON.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  
  const postsJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await postsJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
