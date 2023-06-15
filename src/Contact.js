import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const {isAuthenticated, user} =useAuth0()
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6301274325756!2d75.87699769999999!3d22.741985099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5deef819ed%3A0x7fd985e762916bce!2sNanda%20Nagar%20Main%20Rd%2C%20Nanda%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1686286681281!5m2!1sen!2sin" 
      width="100%"
       height="400" 
       style={{border:"0"}} 
       allowfullScreen="" 
       loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xqkovjge" method="POST" className="contact-inputs">
              <input 
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              value={isAuthenticated?user.name:""}
              />

              <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              value={isAuthenticated?user.email:""}
              
              />

              <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter Your Message"
              />

              <input 
              type="submit" value="send"
              />
              
 

            </form>
          </div>
        </div>


    </Wrapper>
  );
};

export default Contact;
