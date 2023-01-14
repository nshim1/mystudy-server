import { User } from "../model/User";
export function getEmailTemplate(name) {
  return `
      <div class="container">
          <div class="logo"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="cc-logo" border="0">
          </div>
          <div class="illustration">
              <div class="hgroup">
              <span class="name">Hello, ${name}</span>
              <h1>Thank you for Signing Up</h1>
              <div class="thumbs">
                  <a href="https://imgbb.com/"><img src="https://i.ibb.co/2g7tS2d/good.png" alt="good" border="0"></a>
              </div>
              <p class="rad">Rad stuff is here</p>
              </div>
          </div>
  
          <div class="hgroup">
              <p>
              Placeholder aims at solving all lending problems in africa, we built a platform to support the lenders community with high quality, cost concious assets like: the web plug in, mobile app, chat bot, sophiscated credit analysis, bank statement analysis and more. And these products live on a site packed with the best practice and shared knowledge resources from our team to you.
              <br><br>
              <p>
                  <span class="raised">Hold up, there's more!</span>
                  A 7 days simulation trial, your trial starts now.
              </p>
              <p>If you have any questions, kindly reach out to our team on support@placeholder.com.</p>
  
              <p>Have an AWESOME day! <br>
                  Brought to you by your friends at Placeholder.
              </p>
              </p>
  
          </div>
          <div class="hgroup">
              <h2>What we offer</h2>
          </div>
          <div class="items">
              <div class="item">
              <div class="icon">
                  <img src="https://i.ibb.co/tHZQHTB/desktop.png" alt="desktop" border="0">
              </div>
              <div class="title">Advance Backend</div>
              <div class="subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed culpa cupiditate?
              </div>
              </div>
              <div class="item">
              <div class="icon">
                  <img src="https://i.ibb.co/zSD3NkX/smartphone.png" alt="smartphone" border="0">
              </div>
              <div class="title">Mobile Platform</div>
              <div class="subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed culpa cupiditate?
              </div>
              </div>
          </div>
          <div class="button-wrap">
              <button class="explore">
              Explore
              </button>
          </div>
          <footer>
              Brand Name Inc © ${new Date().getFullYear()}
              <br>
              Somewhere in earth.
              <br>
              Tel: 00 1 460 5416
          </footer>
      </div>
      `;
}

export function signIn({ email, password }) {
  if (email === "test@test.com" && password === "test123") {
    return true;
  }
  return false;
}
const users = [];
export function signUp({ email, password }) {
  const isExit = users.find((user) => user.email === email);
  if (!isExit) {
    const user = new User(email, password);
    users.push(user);
    console.log(users);
  }
  return users;
}
